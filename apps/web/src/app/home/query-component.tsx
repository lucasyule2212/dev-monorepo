"use client";

import { gql, useQuery } from "@apollo/client";

const PRODUCTS_QUERY = gql`
  query GetProducts {
    products {
      title
    }
  }
`;

export default function QueryComponent() {
  const { data, loading, error } = useQuery(PRODUCTS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
