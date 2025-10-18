import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

import { Manrope, Source_Sans_3 } from "next/font/google";
import { AutoBreadcrumb } from "@/components/auto-breadcrumb";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});
export const metadata: Metadata = {
  title: "WanderSync",
  description: "A trip collaborative app ",
  icons: {
    icon: "/imgs/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${sourceSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                  />
                   <AutoBreadcrumb/> 
                </div>
              </header>
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0 max-h-screen">
                {children}
                
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
