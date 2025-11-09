import News from "@/components/News/news";
import { Spinner } from "@/components/ui/spinner";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Novidades",
};
export default async function NewsPage() {
  return (
    <Suspense fallback={<Spinner className="size-30" />}>
      <News />
    </Suspense>
  );
}
