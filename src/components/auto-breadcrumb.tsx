"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const labels: Record<string, string> = {
  dashboard: "Painel",
  users: "Usuários",
  settings: "Configurações",
  news: "Novidades",
  guide: "Guia",
  tripTips: "Dicas de viagem",
  trips: "Viagens",
  plantrip: "Planejamento",
  explore: "Explorar",
  destination: "Destinos de viagem",
  community: "Comunidade",
  diary: "Diário",
};

export function AutoBreadcrumb() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter((segment) => segment.length > 0);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Home sempre fixo */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;
          const label = labels[segment] ?? segment.replace(/-/g, " ");

          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                {!isLast ? (
                  <BreadcrumbLink asChild>
                    <Link href={href} className="capitalize">
                      {label}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="capitalize">
                    {label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
