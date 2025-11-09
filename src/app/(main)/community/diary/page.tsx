"use client";

import MDEditor from "@uiw/react-md-editor";
import { useTheme } from "next-themes";
import rehypeSanitize from "rehype-sanitize";
import { SetStateAction, useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { MarkdownEditor } from "@/components/MarkDownEditor";

export default function Diary() {
  const { theme, systemTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [contentValue, setContentValue] = useState("");

  useEffect(() => setMounted(true), []);

  const currentTheme =
    resolvedTheme ?? (theme === "system" ? systemTheme : theme);

  if (!mounted) {
    return <Spinner className="size-30" />;
  }

  return (
    <div className="flex justify-between gap-8 flex-wrap">
      <div
        data-color-mode={currentTheme === "dark" ? "dark" : "light"}
        className="flex-grow"
      >
        <MarkdownEditor
          labelText="Conteúdo"
          value={contentValue}
          setValue={setContentValue}
          textAreaName="content"
          disabled={false}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-[100px] h-[100px] bg-amber-500">TESTE</div>
        <div className="w-[100px] h-[100px] bg-amber-500">TESTE</div>
        <div className="w-[100px] h-[100px] bg-amber-500">TESTE</div>
        <div className="w-[100px] h-[100px] bg-amber-500">TESTE</div>
      </div>
    </div>
  );
}
