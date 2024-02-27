"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const ApolloClientProvider = ({
  children,
  accessToken,
}: {
  children: React.ReactNode;
  accessToken: string | undefined;
}) => {
  const client = new ApolloClient({
    uri: "http://localhost:3332/graphql",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
