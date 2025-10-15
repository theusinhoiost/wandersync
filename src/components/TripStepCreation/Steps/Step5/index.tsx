// src/components/Steps/Step4.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { StepWizardChildProps } from "react-step-wizard";
import { useState, useEffect } from "react";
import { useTripActions, useTripState } from "@/context/TripContext";

type Step4Props = Partial<StepWizardChildProps>;

export default function Step4({ nextStep, previousStep }: Step4Props) {
  const state = useTripState();
  const actions = useTripActions();

  const [style, setStyle] = useState<string>(state.tripStyle ?? "");
  const [budget, setBudget] = useState<string>(
    state.budget === "" || state.budget === undefined ? "" : String(state.budget)
  );

  useEffect(() => {
    setStyle(state.tripStyle ?? "");
    setBudget(state.budget === "" || state.budget === undefined ? "" : String(state.budget));
  }, [state.tripStyle, state.budget]);

  const handleNext = () => {
    actions.setTripStyle(style || undefined);
    actions.setBudget(budget === "" ? "" : Number(budget));
    if (nextStep) nextStep();
  };

  return (
    <Card>
      <CardHeader>
        <h2>Estilo / Orçamento 💰</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Estilo da viagem</Label>
          <select
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="w-full p-2 rounded border"
          >
            <option value="">Selecionar</option>
            <option value="Luxo">Luxo</option>
            <option value="Econômica">Econômica</option>
            <option value="Aventura">Aventura</option>
            <option value="Família">Família</option>
            <option value="Negócios">Negócios</option>
          </select>
        </div>

        <div>
          <Label>Orçamento estimado (opcional)</Label>
          <Input
            type="number"
            placeholder="Ex: 5000"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            min={0}
          />
        </div>

        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={previousStep}>
            Voltar
          </Button>
          <Button onClick={handleNext}>Próximo</Button>
        </div>
      </CardContent>
    </Card>
  );
}
