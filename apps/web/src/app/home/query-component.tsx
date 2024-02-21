"use client";

import { withApollo } from "@/lib/withApolloClient";
import { gql, useQuery } from "@apollo/client";

const PRODUCTS_QUERY = gql`
  query GetProducts {
    products {
      title
    }
  }
`;

function QueryComponent() {
  const { data, loading, error } = useQuery(PRODUCTS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default withApollo(QueryComponent);
