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
import { useTripActions, useTripState } from "@/context/TripContext";

const tripStyles = [
  { value: "Luxo", label: "Luxo" },
  { value: "Econômica", label: "Econômica" },
  { value: "Aventura", label: "Aventura" },
  { value: "Família", label: "Família" },
  { value: "Negócios", label: "Negócios" },
];

export default function KindSelector() {
  const [open, setOpen] = React.useState(false);
  const { tripStyle } = useTripState();
  const { setTripStyle } = useTripActions();

  const selected = tripStyles.find((s) => s.value === tripStyle);

  const handleSelect = (currentValue: string) => {
    setTripStyle(currentValue === tripStyle ? "" : currentValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          {selected ? selected.label : "Selecione um tipo de viagem"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0">
        <Command>
          <CommandInput
            placeholder="Selecione um tipo de viagem"
            className="h-9"
          />
          <CommandList>
            <CommandEmpty>Nenhum tipo de viagem encontrado</CommandEmpty>
            <CommandGroup>
              {tripStyles.map((kind) => (
                <CommandItem
                  key={kind.value}
                  value={kind.value}
                  onSelect={handleSelect}
                >
                  {kind.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      tripStyle === kind.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
