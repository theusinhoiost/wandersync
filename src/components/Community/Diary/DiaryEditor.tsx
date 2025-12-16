"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

type DiaryEditorProps = {
  value: string;
  onChange: (html: string) => void;
  maxLength?: number;
};

export function DiaryEditor({
  value,
  onChange,
  maxLength = 3000,
}: DiaryEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit],
    content: value,
    onUpdate({ editor }) {
      const text = editor.getText();

      if (text.length <= maxLength) {
        onChange(editor.getHTML());
      }
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) return null;

  const textLength = editor.getText().length;

  return (
    <div className="border rounded-lg p-3 bg-background">
      {/* Toolbar */}
      <div className="flex gap-2 mb-3 border-b pb-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-2 py-1 rounded text-sm font-bold ${
            editor.isActive("bold") ? "bg-muted" : ""
          }`}
        >
          B
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-2 py-1 rounded text-sm italic ${
            editor.isActive("italic") ? "bg-muted" : ""
          }`}
        >
          I
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1 rounded text-sm underline ${
            editor.isActive("underline") ? "bg-muted" : ""
          }`}
        >
          U
        </button>
        <button
          onClick={() => editor.chain().focus().toggleLink().run()}
          className={`px-2 py-1 rounded text-sm underline text-blue-400 ${
            editor.isActive("link") ? "bg-muted" : ""
          }`}
        >
          Link
        </button>
      </div>

      <EditorContent editor={editor} />

      {/* Contador */}
      <div className="text-right text-sm mt-2 text-muted-foreground">
        {textLength}/{maxLength}
      </div>
    </div>
  );
}
