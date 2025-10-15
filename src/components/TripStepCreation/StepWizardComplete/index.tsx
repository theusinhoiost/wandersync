import StepWizard from "react-step-wizard";
import Step2 from "../Steps/Step2";
import Step1 from "../Steps/Step1";
import Step3 from "../Steps/Step3";
import { TripProvider } from "@/context/TripContext";
import Step6 from "../Steps/Step6";
import Step5 from "../Steps/Step5";
import Step4 from "../Steps/Step5";

export default function StepWizardComplete() {
  return (
      <TripProvider>
        <StepWizard>
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
          <Step5 />
          <Step6 />
        </StepWizard>
      </TripProvider>

  );
}
