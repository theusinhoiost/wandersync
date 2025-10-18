"use client";
import Link from "next/link";
import "./styles/globals.css"
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-gray-800 p-4 " >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Página não encontrada</h2>
      <p className="mb-6 text-center max-w-md">
        Ops! A página que você está tentando acessar não existe ou foi removida.
      </p>
      <p>
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
