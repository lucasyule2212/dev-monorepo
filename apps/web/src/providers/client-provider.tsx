"use client";
import buildProvidersTree from "@/providers/buildProvidersTree";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const ProvidersTree = buildProvidersTree([[UserProvider, {}]]);

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProvidersTree>{children}</ProvidersTree>;
}
