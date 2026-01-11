"use client";

import { Button } from "@/components/ui/button";
import { UploadDropzone } from "@/components/ui/upload-dropzone";
import { useUploadFiles } from "@better-upload/client";
import { useState } from "react";

export default function NewsUploader() {
  const { control } = useUploadFiles({
    route: "images",
  });

  const [published, setPublished] = useState(false);

  return (
    <div className="max-w-3/4 mx-auto my-3">
      <form className="flex flex-col gap-4">
        {/* Card: Informações básicas */}
        <section className="bg-card rounded-2xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Dados da Notícia</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium mb-2">Título</span>
              <input
                name="title"
                required
                minLength={3}
                className="input w-full"
                placeholder="Nova funcionalidade lançada"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium mb-2">Autor</span>
              <input
                name="author"
                required
                className="input w-full"
                placeholder="Matheus Iost"
              />
            </label>
          </div>

          <label className="flex flex-col mt-4">
            <span className="text-sm font-medium mb-2">Resumo (Excerpt)</span>
            <textarea
              name="excerpt"
              required
              rows={3}
              className="input w-full resize-none"
              placeholder="Resumo curto da notícia para listagem..."
            />
          </label>
        </section>

        {/* Card: Conteúdo */}
        <section className="bg-card rounded-2xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Conteúdo</h2>

          <textarea
            name="content"
            required
            rows={8}
            className="input w-full resize-none"
            placeholder="Conteúdo completo da notícia..."
          />
        </section>

        {/* Card: Imagem de capa */}
        <section className="bg-card rounded-2xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Imagem de Capa</h2>

          <UploadDropzone
            control={control}
            accept="image/*"
            description={{
              maxFiles: 1,
              maxFileSize: "5MB",
              fileTypes: "JPEG, PNG, WEBP",
            }}
          />

          <p className="text-xs text-muted-foreground mt-2">
            Essa imagem será usada como capa da notícia.
          </p>
        </section>

        {/* Card: Publicação */}
        <section className="bg-card rounded-2xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Publicação</h2>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            <span className="text-sm">Publicar notícia imediatamente</span>
          </label>
        </section>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 p-6">
          <Button type="submit">Criar notícia</Button>
        </div>
      </form>
    </div>
  );
}
