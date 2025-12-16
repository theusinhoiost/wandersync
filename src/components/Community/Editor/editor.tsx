import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { DiaryEditor } from "@/components/Community/Diary/DiaryEditor";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Editor() {
  const { theme, systemTheme, resolvedTheme } = useTheme();
  const [content, setContent] = useState("");
  const currentTheme =
    resolvedTheme ?? (theme === "system" ? systemTheme : theme);
  return (
    <div
      data-color-mode={currentTheme === "dark" ? "dark" : "light"}
      className="flex-grow"
    >
      <h2 className="text-xl font-semibold mb-4">
        Crie novas anotações para o seu diário
        <div className="mt-4">
          <DiaryEditor value={content} onChange={setContent} maxLength={3000} />
        </div>
      </h2>

      <div className="flex flex-col gap-4 mt-5">
        <div className="flex gap-4">
          <Label htmlFor="private-post">Post Privado?</Label>
          <Switch id="private-post" />
        </div>
        <div className=" flex gap-4">
          <Button className="max-w-xl" variant={"submit"}>
            Postar anotações
          </Button>
          <Button className="max-w-xl" variant={"secondary"}>
            Salvar em rascunhos
          </Button>
        </div>
      </div>
    </div>
  );
}
