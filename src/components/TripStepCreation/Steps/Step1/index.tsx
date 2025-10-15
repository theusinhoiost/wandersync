// src/components/Steps/Step1.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepWizardChildProps } from "react-step-wizard";
import { useState, useEffect } from "react";
import { useTripActions, useTripState } from "@/context/TripContext";

type Step1Props = Partial<StepWizardChildProps>;

export default function Step1({ nextStep }: Step1Props) {
  const state = useTripState();
  const actions = useTripActions();

  // local controlled inputs
  const [planName, setPlanName] = useState(state.planName);
  const [peopleCount, setPeopleCount] = useState<string>(
    state.peopleCount === "" ? "" : String(state.peopleCount)
  );

  useEffect(() => {
    // keep local inputs synced if context changes
    setPlanName(state.planName);
    setPeopleCount(state.peopleCount === "" ? "" : String(state.peopleCount));
  }, [state.planName, state.peopleCount]);

  const handleNext = () => {
    actions.setPlanName(planName);
    const parsed = peopleCount === "" ? "" : Number(peopleCount);
    actions.setPeopleCount(parsed === "" ? "" : parsed);
    if (nextStep) nextStep();
  };

  return (
    <Card>
      <CardHeader>
        <h1>Vamos começar o planejamento 🛫</h1>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Nome do Planejamento</Label>
          <Input
            placeholder="Ex: Viagem para Europa 2025"
            value={planName}
            onChange={(e) => setPlanName(e.target.value)}
          />
        </div>

        <div>
          <Label>Quantas pessoas?</Label>
          <Input
            type="number"
            placeholder="Ex: 2"
            value={peopleCount}
            onChange={(e) => setPeopleCount(e.target.value)}
            min={1}
          />
        </div>

        <div className="flex justify-end mt-4">
          <Button onClick={handleNext}>Próximo</Button>
        </div>
      </CardContent>
    </Card>
  );
}
