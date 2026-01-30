import TripStatics from "@/components/TripStatics";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const tripId = resolvedParams.id;

  return <TripStatics tripId={tripId} />;
}
