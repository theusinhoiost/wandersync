// src/components/TripStatics.tsx
"use client";

import GraphsWithGrids from "@/components/Graphs/GraphsWithGrids";
import { Spinner } from "@/components/ui/spinner";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";
import { BadgeQuestionMark, BarChart } from "lucide-react";
import { Suspense } from "react";

// 👇 Recebe o ID como prop
export default function TripStatics({ tripId }: { tripId: string }) {
  // Proteção extra: se o ID não chegar, avisa na tela
  if (!tripId) {
    return (
      <div className="text-red-500 p-10">Erro: ID da viagem inválido.</div>
    );
  }

  return (
    <div className="px-6 space-y-6">
      <Suspense fallback={<Spinner />}>
        <div className="mt-6 px-6 text-center space-y-3">
          <h1 className="text-3xl font-bold tracking-tight flex justify-center items-center gap-2">
            Estatísticas da Viagem <BarChart className="animate-pulse" />
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore os gastos, atividades e padrões da sua viagem através de
            gráficos interativos e personalizáveis.
          </p>
        </div>

        <div className="border rounded-2xl shadow-sm p-4 bg-background mb-4 gap-0 flex flex-col mt-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="self-end p-2 rounded-full hover:bg-accent transition-colors focus:outline-none">
                <BadgeQuestionMark className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-4 text-sm bg-white dark:bg-gray-800 border shadow-lg rounded-lg z-50">
              <div className="space-y-2">
                <h4 className="font-semibold text-base">
                  Ajuda - Estatísticas
                </h4>
                <p className="text-muted-foreground">
                  Passe o mouse sobre os gráficos para ver detalhes.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* 👇 Passa o ID para os gráficos */}
          <GraphsWithGrids tripId={tripId} />
        </div>
      </Suspense>
    </div>
  );
}
