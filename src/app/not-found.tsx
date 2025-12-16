"use client";

import "./styles/globals.css";
import ErrorMessage from "@/components/ErrorMessage";
export default function NotFound() {
  return (
    <ErrorMessage
      pageTitle={"Página não encontrada"}
      contentTitle={"404⛔"}
      context={
        "Ops! A página que você está tentando acessar não existe ou foi removida."
      }
    />
  );
}
