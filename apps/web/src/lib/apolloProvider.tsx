"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { getAccessToken } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";

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
