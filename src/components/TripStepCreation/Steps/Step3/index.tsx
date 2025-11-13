// src/components/Steps/Step3.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StepWizardChildProps } from "react-step-wizard";
import { useTripState } from "@/context/TripContext";
import { CalendarTripDate } from "@/components/DatePicker";

type Step3Props = Partial<StepWizardChildProps>;

export default function Step3({ nextStep, previousStep }: Step3Props) {
  const { departDate, returnDate } = useTripState();

  const handleNext = () => {
    if (!departDate || !returnDate) {
      alert("Selecione as datas de ida e volta!");
      return;
    }
    nextStep?.();
  };

  return (
    <Card className="overflow-visible">
      <CardHeader>
        <h2 className="text-xl font-semibold">Datas da viagem 📅</h2>
      </CardHeader>
      <CardContent>
        <div className="flex gap-12 flex-wrap justify-center max-w-full">
          <CalendarTripDate typeCalendar="depart" />
          <CalendarTripDate typeCalendar="back" />
        </div>

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
