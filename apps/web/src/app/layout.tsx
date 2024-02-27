import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ApolloClientProvider } from "@/lib/apolloProvider";
import ClientProvider from "@/providers/client-provider";
import { getAccessToken, getSession } from "@auth0/nextjs-auth0";
import { Toaster } from "@repo/ui/components/ui/sonner";
import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Workflow",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  const { accessToken } = session
    ? await getAccessToken({})
    : { accessToken: undefined };

  return (
    <html lang="en">
      <ClientProvider>
        <ApolloClientProvider accessToken={accessToken}>
          <body className={`${inter.className} bg-slate-950 relative`}>
            <Toaster />
            <Header />
            {children}
            <Footer />
          </body>
        </ApolloClientProvider>
      </ClientProvider>
    </html>
  );
}
