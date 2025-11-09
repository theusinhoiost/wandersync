import GraphsWithGrids from "@/components/Graphs/GraphsWithGrids";

export default function TripStatics() {
  const cardsOn = true;
  return <div>{cardsOn && <GraphsWithGrids />}</div>;
}
