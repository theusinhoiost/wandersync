"use client";

import { useEffect, useState } from "react";
import { DiaryEditor } from "./DiaryEditor";
import { moods } from "./mood";
import { useAutoSave } from "./useAutoSave";

export function DiaryEntryForm() {
  const today = new Date().toISOString().slice(0, 10);

  const [content, setContent] = useState("");
  const [mood, setMood] = useState("happy");

  // Auto-save
  useAutoSave("wandersync-diary-draft", { content, mood });

  // Restore draft
  useEffect(() => {
    const saved = localStorage.getItem("wandersync-diary-draft");
    if (saved) {
      const parsed = JSON.parse(saved);
      setContent(parsed.content ?? "");
      setMood(parsed.mood ?? "happy");
    }
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Diário</h2>
        <span className="text-sm text-muted-foreground">
          {new Date(today).toLocaleDateString("pt-BR")}
        </span>
      </div>

      {/* Humor */}
      <div className="flex gap-2 overflow-x-auto">
        {moods.map((m) => (
          <button
            key={m.value}
            onClick={() => setMood(m.value)}
            className={`px-3 py-2 rounded-full border text-sm flex items-center gap-1
              ${
                mood === m.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-background"
              }`}
          >
            <span>{m.emoji}</span>
            {m.label}
          </button>
        ))}
      </div>

      {/* Editor */}
      <DiaryEditor value={content} onChange={setContent} maxLength={3000} />

      {/* Footer */}
      <button className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium">
        Salvar entrada
      </button>
    </div>
  );
}
