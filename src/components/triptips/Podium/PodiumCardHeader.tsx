import { MedalIcon } from "lucide-react";
import { CardHeader } from "../../ui/card";

type PodiumCardHeaderProps = {
  iconColor: "gold" | "silver" | "bronze";
  text: string;
};

const colorMap: Record<PodiumCardHeaderProps["iconColor"], string> = {
  gold: "#FFD700",
  silver: "#C0C0C0",
  bronze: "#CD7F32",
};

export default function PodiumCardHeader({ iconColor, text }: PodiumCardHeaderProps) {
  return (
    <CardHeader className="flex flex-row gap-2 justify-center text-card-foreground">
      {text} <MedalIcon color={colorMap[iconColor]} />
    </CardHeader>
  );
}
