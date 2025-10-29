// src/components/Steps/Step2.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepWizardChildProps } from "react-step-wizard";
import { useState, useEffect } from "react";
import { useTripActions, useTripState } from "@/context/TripContext";

type Step2Props = Partial<StepWizardChildProps>;

export default function Step2({ nextStep, previousStep }: Step2Props) {
  const state = useTripState();
  const actions = useTripActions();

  const [destination, setDestination] = useState(state.destination);

  useEffect(() => setDestination(state.destination), [state.destination]);

  const handleNext = () => {
    actions.setDestination(destination);
    if (nextStep) nextStep();
  };

  return (
    <Card>
      <CardHeader>
        <h2>Destino da viagem 🌍</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="gap-3 flex flex-col">
          <Label>Destino</Label>
          <Input
            placeholder="Ex: Paris, Nordeste, Chile..."
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
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
