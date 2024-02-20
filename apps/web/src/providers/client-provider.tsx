"use client";
import { apolloClient } from "@/lib/apollo-client";
import buildProvidersTree from "@/providers/buildProvidersTree";
import { ApolloProvider } from "@apollo/client";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const ProvidersTree = buildProvidersTree([
  [UserProvider, {}],
  [
    ApolloProvider,
    {
      client: apolloClient,
    },
  ],
]);

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProvidersTree>{children}</ProvidersTree>;
}
