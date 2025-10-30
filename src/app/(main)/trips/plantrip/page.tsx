"use client";

import GraphsWithGrids from "@/components/Graphs/GraphsWithGrids";
import StepWizardComplete from "@/components/TripStepCreation/StepWizardComplete";
import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

export default function planTrip() {
  const cardsOn = true;
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-center color-primary">
          Nessa página você vai poder criar a viagem do seu jeito e verificar as
          em andamento.
        </h1>
      </div>
      <div className="h-full sm:w-full md:max-w-[35%] md:mx-auto">
        <Suspense fallback={<Spinner />}>
          <StepWizardComplete />
        </Suspense>
      </div>
      {cardsOn && (
        <Suspense fallback={<Spinner />}>
          <GraphsWithGrids />
        </Suspense>
      )}
    </div>
  );
}
