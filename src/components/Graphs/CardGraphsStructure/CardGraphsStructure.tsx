import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

type CardGraphsStructureProps = {
  children: React.ReactNode;
  title: string;
};

export default function CardGraphsStructure({
  children,
  title,
}: CardGraphsStructureProps) {
  return (
    <Card className="h-full w-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Excluir</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Exportar</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Gráfico(.pdf)</DropdownMenuItem>
                    <DropdownMenuItem>Dados brutos (.csv) </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center overflow-hidden">
        <div className="h-full w-full overflow-hidden">{children}</div>
      </CardContent>
    </Card>
  );
}
