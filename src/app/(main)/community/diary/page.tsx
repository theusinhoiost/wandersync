"use client";

import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import Editor from "@/components/Community/Editor/editor";

export default function Diary() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-75">
        <Spinner className="size-30" />
      </div>
    );
  }

  return (
    <div className="flex gap-5 ">
      <Editor />
    </div>
  );
}
