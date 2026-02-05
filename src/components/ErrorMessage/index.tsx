"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { House } from "lucide-react";

type ErrorMessageProps = {
  pageTitle?: string;
  contentTitle: string;
  context: React.ReactNode;
};

export default function ErrorMessage({
  pageTitle = "Erro",
  contentTitle,
  context,
}: ErrorMessageProps) {
  return (
    <>
      {pageTitle && <title>{pageTitle}</title>}
      <div className="flex flex-col justify-center items-center h-screen gap-6 text-center px-10 max-w-125 mx-auto">
        <div>
          <h1 className="text-7xl/tight mb-4 font-extrabold">{contentTitle}</h1>
          <div>{context}</div>
        </div>
        <Button>
          <Link href={"/"} className="flex flex-row gap-2 justify-center">
            Voltar ao início <House />
          </Link>
        </Button>
      </div>
    </>
  );
}
