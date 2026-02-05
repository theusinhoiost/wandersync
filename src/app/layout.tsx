import "./styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Manrope, Source_Sans_3 } from "next/font/google";

import Toastify from "@/components/Toastify";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          {children}
          <Toastify />
        </ThemeProvider>
      </body>
    </html>
  );
}
