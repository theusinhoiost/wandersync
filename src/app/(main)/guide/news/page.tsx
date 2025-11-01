import News from "@/components/News/news";
import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";

export default async function NewsPage() {
  return (
    <Suspense
      fallback={
        <div className="grid h-screen place-items-center">
          <Spinner className="size-30 text-[var(--color-foreground)]" />
        </div>
      }
    >
      <News />
    </Suspense>
  );
}
