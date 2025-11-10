"use client";

import * as React from "react";
import { type DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { useTripActions, useTripState } from "@/context/TripContext";

export function DatePicker() {
  const { departDate, returnDate } = useTripState();
  const { setDepartDate, setReturnDate } = useTripActions();

  // Inicializa o range com base no estado do contexto
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    () => {
      if (departDate && returnDate) {
        return {
          from: new Date(departDate),
          to: new Date(returnDate),
        };
      }
      return undefined;
    }
  );

  // Quando o usuário seleciona novas datas no calendário
  const handleSelect = (range: DateRange | undefined) => {
    setDateRange(range);

    if (range?.from) {
      setDepartDate(range.from.toISOString().split("T")[0]);
    }
    if (range?.to) {
      setReturnDate(range.to.toISOString().split("T")[0]);
    }
  };

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={handleSelect}
      numberOfMonths={2}
      className="mx-auto w-full px-0 xl:max-w-[1500px]"
    />
  );
}
