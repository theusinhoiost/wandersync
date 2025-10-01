"use client";
import { Button } from "@/components/ui/button";
import StepWizard from "react-step-wizard";

function Step1({ nextStep }: any) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Vamos começar a criar seu planejamento</h2>
      <input
        type="text"
        placeholder="Qual será o nome do projeto?"
        className="w-full border border-[--color-border] p-2 rounded mb-4"
      />
      <input
        type="number"
        className="w-full border border-[--color-border] p-2 rounded mb-4"
        placeholder="Quantas pessoas irão?"
        max={12}
        min={1}
      />
      <input
        type="text"
        placeholder="Destino"
        className="w-full border border-[--color-border] p-2 rounded mb-4"
      />
      <Button onClick={nextStep}>Próximo</Button>
    </div>
  );
}

function Step2({ nextStep, previousStep }: any) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">🏨 Acomodações</h2>
      <input
        type="text"
        placeholder="Hotel/Airbnb"
        className="w-full border border-[--color-border] p-2 rounded mb-4"
      />
      <div className="flex justify-between">
        <Button onClick={previousStep}>Voltar</Button>
        <Button onClick={nextStep}>Próximo</Button>
      </div>
    </div>
  );
}

function Step3({ previousStep }: any) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">✅ Resumo</h2>
      <p className="text-[--color-muted-foreground] mb-4">
        Confira os dados antes de confirmar.
      </p>
      <div className="flex justify-between">
        <Button onClick={previousStep}>Voltar</Button>
        <Button variant={"finish"}>Finalizar</Button>
      </div>
    </div>
  );
}

export default function Wizard() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-[--chart-card] rounded-lg">
      <StepWizard>
        <Step1 />
        <Step2 />
        <Step3 />
      </StepWizard>
    </div>
  );
}
