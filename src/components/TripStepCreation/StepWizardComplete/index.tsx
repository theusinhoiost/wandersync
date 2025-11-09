"use client";

import { useEffect, useState, Suspense } from "react";
import StepWizard from "react-step-wizard";
import { Spinner } from "@/components/ui/spinner";
import { TripProvider } from "@/context/TripContext";

import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import Step5 from "../Steps/Step5";

export default function StepWizardComplete() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  if (!mounted) {
    return <Spinner className="size-50" />;
  }

  return (
    <TripProvider>
      <Suspense fallback={<Spinner className="size-50" />}>
        <StepWizard>
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
          <Step5 />
        </StepWizard>
      </Suspense>
    </TripProvider>
  );
}
