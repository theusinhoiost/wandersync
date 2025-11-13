import StepWizardComplete from "@/components/TripStepCreation/StepWizardComplete";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planejamento",
};

export default function planTrip() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-center color-primary">
          Nessa página você vai poder criar a viagem do seu jeito e verificar as
          em andamento.
        </h1>
      </div>
      <div className="w-[70%] mx-auto">
        <StepWizardComplete />
      </div>
    </div>
  );
}
