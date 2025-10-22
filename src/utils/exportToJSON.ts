import { newsMocks } from "@/db/seed/news/news";
import { writeFileSync } from "fs";

/**
 * Exporta qualquer dado mockado para um arquivo JSON.
 * Converte automaticamente objetos Date para string ISO.
 * 
 * @param data - Array ou objeto a ser convertido
 * @param outputPath - Caminho do arquivo de saída (ex: './public/data/news.json')
 */
export function exportToJSON<T>(data: T, outputPath: string) {
  const replacer = (_key: string, value: unknown) => {
    if (value instanceof Date) return value.toISOString().split("T")[0];
    return value;
  };

  const jsonContent = JSON.stringify(data, replacer, 2);
  writeFileSync(outputPath, jsonContent, "utf-8");
  //console.log(`Exportado com sucesso: ${outputPath}`);
}

exportToJSON(newsMocks, "./public/data/news.json");