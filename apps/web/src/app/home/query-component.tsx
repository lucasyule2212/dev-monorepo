"use client";

import { useGetProductsQuery } from "@/graphql/generated/graphql";
import { withApollo } from "@/lib/withApolloClient";

function QueryComponent() {
  const { data, loading, error } = useGetProductsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default withApollo(QueryComponent);
