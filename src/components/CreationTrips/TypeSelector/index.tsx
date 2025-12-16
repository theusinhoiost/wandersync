"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const tripStyles = [
  { value: "Luxo", label: "Luxo" },
  { value: "Econômica", label: "Econômica" },
  { value: "Aventura", label: "Aventura" },
  { value: "Família", label: "Família" },
  { value: "Negócios", label: "Negócios" },
];

export default function KindSelector() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selected ? selected : "Tipo de viagem"}
          <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0 w-[200px]">
        <Command>
          <CommandInput placeholder="Procurar..." className="h-9" />
          <CommandList>
            <CommandEmpty>Nenhum tipo encontrado.</CommandEmpty>
            <CommandGroup>
              {tripStyles.map((kind) => (
                <CommandItem
                  key={kind.value}
                  value={kind.value}
                  onSelect={() => {
                    setSelected(kind.label);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected === kind.label ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {kind.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
