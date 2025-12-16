import CreationTrips from "@/components/CreationTrips";
import { Spinner } from "@/components/ui/spinner";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Criar Viagem",
};

export default function TripCreation() {
  return (
    <Suspense fallback={<Spinner />}>
      <CreationTrips />
    </Suspense>
  );
}
