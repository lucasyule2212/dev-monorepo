import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ClientProvider from "@/providers/client-provider";
import { Toaster } from "@repo/ui/components/ui/sonner";
import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workflow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <ClientProvider>
        <body className={`${inter.className} bg-slate-950 relative`}>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </body>
      </ClientProvider>
    </html>
  );
}
