"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTripActions, useTripState } from "@/context/TripContext";

type CalendarTripDateProps = {
  typeCalendar: "depart" | "back";
};

export function CalendarTripDate({ typeCalendar }: CalendarTripDateProps) {
  const [open, setOpen] = React.useState(false);
  const { setDepartDate, setReturnDate } = useTripActions();
  const { departDate, returnDate } = useTripState();

  if (typeCalendar === "depart") {
    return (
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Data da partida
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-48 justify-between font-normal"
            >
              {departDate ? departDate.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={departDate}
              captionLayout="dropdown"
              onSelect={(date) => {
                if (date) {
                  setDepartDate(date);
                }
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }
  if (typeCalendar === "back") {
    return (
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Data do retorno
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-48 justify-between font-normal"
            >
              {returnDate ? returnDate.toLocaleDateString() : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={returnDate}
              captionLayout="dropdown"
              onSelect={(date) => {
                if (date) {
                  setReturnDate(date);
                }
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  }
}
