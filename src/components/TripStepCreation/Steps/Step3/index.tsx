// src/components/Steps/Step3.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { StepWizardChildProps } from "react-step-wizard";
import { useState, useEffect } from "react";
import { useTripActions, useTripState } from "@/context/TripContext";
import { DatePicker } from "@/components/DatePicker";

type Step3Props = Partial<StepWizardChildProps>;

export default function Step3({ nextStep, previousStep }: Step3Props) {
  const state = useTripState();
  const actions = useTripActions();

  const [departDate, setDepartDate] = useState(state.departDate);
  const [returnDate, setReturnDate] = useState(state.returnDate);

  useEffect(() => {
    setDepartDate(state.departDate);
    setReturnDate(state.returnDate);
  }, [state.departDate, state.returnDate]);

  const handleNext = () => {
    actions.setDepartDate(departDate);
    actions.setReturnDate(returnDate);
    if (nextStep) nextStep();
  };

  return (
    <Card className="overflow-visible">
      <CardHeader>
        <h2>Datas da viagem 📅</h2>
      </CardHeader>
      <CardContent className="px-0">
        <DatePicker />
        <div className="flex justify-between mt-4 px-4">
          <Button variant="outline" onClick={previousStep}>
            Voltar
          </Button>
          <Button onClick={handleNext}>Próximo</Button>
        </div>
      </CardContent>
    </Card>
  );
}
