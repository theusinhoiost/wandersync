// src/components/Steps/Step5.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StepWizardChildProps } from "react-step-wizard";
import { useTripState, useTripActions } from "@/context/TripContext";
import { toast } from "react-toastify";

type Step5Props = Partial<StepWizardChildProps>;

export default function Step5({ previousStep }: Step5Props) {
  const state = useTripState();
  const actions = useTripActions();

  const handleFinish = () => {
    localStorage.setItem("trip_plan", JSON.stringify(state));
    console.log("Planejamento salvo:", state);
    actions.reset();
    toast.dismiss();
    toast.success("Viagem criada com sucesso");
  };

  return (
    <Card>
      <CardHeader>
        <h2>Confirmação ✅</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <strong>Nome:</strong> {state.planName || "-"}
        </div>
        <div>
          <strong>Quantidade de pessoas:</strong>{" "}
          {String(state.peopleCount) || "-"}
        </div>

        <div>
          <strong>Destino:</strong> {state.destination || "-"}
        </div>
        <div>
          <strong>Ida:</strong> {state.departDate || "-"}
        </div>
        <div>
          <strong>Volta:</strong> {state.returnDate || "-"}
        </div>
        <div>
          <strong>Estilo:</strong> {state.tripStyle || "-"}
        </div>
        <div>
          <strong>Orçamento:</strong>{" "}
          {state.budget === "" ? "-" : `R$ ${state.budget}`}
        </div>

        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={previousStep}>
            Voltar
          </Button>
          <Button variant={"finish"} onClick={handleFinish}>
            Finalizar Planejamento
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
