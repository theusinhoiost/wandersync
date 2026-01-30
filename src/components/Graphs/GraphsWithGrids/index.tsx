"use client";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useEffect, useState } from "react";
import { Responsive, WidthProvider, Layouts } from "react-grid-layout";
import { toast } from "react-toastify";
import { Spinner } from "@/components/ui/spinner";
// 👇 1. MUDANÇA: Importar js-cookie para pegar o token
import Cookies from "js-cookie";
// 👇 2. MUDANÇA: No App Router (use client), usa-se 'next/navigation', não 'next/router'
import { useRouter } from "next/navigation";

// Componentes
import SpendsByCategory from "../SpendsByCategory/SpendsByCategory";
import SpendsByDay from "../SpendsByDay/SpendsDay";
import SpendsByMember from "../SpendsByMember/SpendsByMember";
import { TripStats } from "@/types/trip-stats";

const ResponsiveGridLayout = WidthProvider(Responsive);

const defaultLayouts = {
  lg: [
    {
      i: "cat1",
      x: 0,
      y: 0,
      w: 4,
      h: 6,
      minW: 3,
      maxW: 12,
      minH: 5,
      maxH: 12,
    },
    {
      i: "day",
      x: 4,
      y: 0,
      w: 4,
      h: 6,
      minW: 3,
      maxW: 12,
      minH: 5,
      maxH: 12,
    },
    {
      i: "member",
      x: 8,
      y: 0,
      w: 4,
      h: 6,
      minW: 3,
      maxW: 12,
      minH: 5,
      maxH: 12,
    },
  ],
};

export default function GraphsWithGrids({ tripId }: { tripId: string }) {
  const [stats, setStats] = useState<TripStats | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Agora importado do lugar certo

  const [layouts, setLayouts] = useState<Layouts>(defaultLayouts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 👇 3. PEGAR O TOKEN
        const token = Cookies.get("wandersync_token");

        // Se não tiver token, manda pro login na hora
        if (!token) {
          router.push("/login");
          return;
        }

        const res = await fetch(`http://localhost:3000/trips/${tripId}/stats`, {
          method: "GET", // Opcional, mas bom ser explícito
          // 👇 4. AQUI É O SEGREDO: MANDAR O CRACHÁ
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        // 👇 5. TRATAR SE O TOKEN FOR INVÁLIDO/EXPIRADO
        if (res.status === 401) {
          toast.error("Sessão expirada");
          Cookies.remove("wandersync_token");
          router.push("/login");
          return;
        }

        if (!res.ok) throw new Error("Falha ao buscar dados");

        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error(error);
        toast.error("Erro ao carregar estatísticas");
      } finally {
        setLoading(false);
      }
    };

    if (tripId) fetchData();
  }, [tripId, router]); // Adicione router nas dependências

  // 3. Efeito para CARREGAR o layout salvo no LocalStorage ao abrir a página
  useEffect(() => {
    const savedLayout = localStorage.getItem(`wandersync_layout_${tripId}`);
    if (savedLayout) {
      try {
        // Se achou, converte de texto para JSON e aplica
        setLayouts(JSON.parse(savedLayout));
      } catch (e) {
        console.error("Erro ao ler layout salvo", e);
      }
    }
  }, [tripId]);

  // 4. Função que SALVA quando você arrasta/redimensiona
  const handleLayoutChange = (currentLayout: unknown, allLayouts: Layouts) => {
    // Atualiza o estado visual
    setLayouts(allLayouts);

    // Salva no navegador (transforma objeto em string)
    localStorage.setItem(
      `wandersync_layout_${tripId}`,
      JSON.stringify(allLayouts),
    );
  };

  if (loading)
    return (
      <div className="flex justify-center p-8">
        <Spinner />
      </div>
    );
  if (!stats) return <div className="text-center">Sem dados disponíveis.</div>;

  if (loading)
    return (
      <div className="flex justify-center p-8">
        <Spinner />
      </div>
    );
  if (!stats) return <div className="text-center">Sem dados disponíveis.</div>;

  const charts = [
    { key: "cat1", component: <SpendsByCategory data={stats.byCategory} /> },
    { key: "day", component: <SpendsByDay data={stats.byDay} /> },
    { key: "member", component: <SpendsByMember data={stats.byMember} /> },
  ];

  return (
    <div className="w-full">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
        isResizable={true}
        isDraggable={true}
        isBounded={true}
        resizeHandles={["se", "sw"]}
        onLayoutChange={handleLayoutChange}
      >
        {charts.map((item) => (
          <div key={item.key}>{item.component}</div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}
