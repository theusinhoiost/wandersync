// src/context/TripContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

export type TripState = {
  planName: string;
  peopleCount: number | "";
  destination: string;
  departDate: Date | undefined;
  returnDate: Date | undefined;
  tripStyle?:
    | "Luxo"
    | "Econômica"
    | "Aventura"
    | "Família"
    | "Negócios"
    | string;
  budget?: number | "";
};

export type TripContextActions = {
  setPlanName: (v: string) => void;
  setPeopleCount: (v: number | "") => void;
  setDestination: (v: string) => void;
  setDepartDate: (v: Date) => void;
  setReturnDate: (v: Date) => void;
  setTripStyle: (v: TripState["tripStyle"]) => void;
  setBudget: (v: number | "") => void;
  reset: () => void;
};

const defaultState: TripState = {
  planName: "",
  peopleCount: "",
  destination: "",
  departDate: undefined,
  returnDate: undefined,
  tripStyle: undefined,
  budget: "",
};

const TripStateContext = createContext<TripState | undefined>(undefined);
const TripActionsContext = createContext<TripContextActions | undefined>(
  undefined
);

export function useTripState() {
  const ctx = useContext(TripStateContext);
  if (!ctx) throw new Error("useTripState must be used within TripProvider");
  return ctx;
}

export function useTripActions() {
  const ctx = useContext(TripActionsContext);
  if (!ctx) throw new Error("useTripActions must be used within TripProvider");
  return ctx;
}

export function TripProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TripState>(defaultState);

  const actions: TripContextActions = {
    setPlanName: (v) => setState((s) => ({ ...s, planName: v })),
    setPeopleCount: (v) => setState((s) => ({ ...s, peopleCount: v })),
    setDestination: (v) => setState((s) => ({ ...s, destination: v })),
    setDepartDate: (v) => setState((s) => ({ ...s, departDate: v })),
    setReturnDate: (v) => setState((s) => ({ ...s, returnDate: v })),
    setTripStyle: (v) => setState((s) => ({ ...s, tripStyle: v })),
    setBudget: (v) => setState((s) => ({ ...s, budget: v })),
    reset: () => setState(defaultState),
  };

  return (
    <TripStateContext.Provider value={state}>
      <TripActionsContext.Provider value={actions}>
        {children}
      </TripActionsContext.Provider>
    </TripStateContext.Provider>
  );
}
