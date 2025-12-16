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

export default function TripStatics({ tripId }: { tripId: string }) {
  return (
    <div className="px-6 space-y-6">
      <Suspense fallback={<Spinner />}>
        <div className="mt-6 px-6 text-center space-y-3">
          <h1 className="text-3xl font-bold tracking-tight flex justify-center items-center gap-2">
            Estatísticas da Viagem <BarChart className="animate-pulse" />
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore os gastos, atividades e padrões da sua viagem através de
            gráficos interativos e personalizáveis. Arraste, redimensione e
            organize como quiser!
          </p>
        </div>

        <div className="border rounded-2xl shadow-sm p-4 bg-background mb-4 gap-0 flex flex-col mt-4">
          {/* HoverCard com o ícone como trigger */}
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
                  Passe o mouse sobre os gráficos para ver detalhes. Arraste os
                  cards para reorganizar a visualização.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
          <GraphsWithGrids tripId={tripId} />
        </div>
      </Suspense>
    </div>
  );
}
