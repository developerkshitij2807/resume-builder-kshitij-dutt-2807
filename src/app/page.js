import { ApolloProvider } from "@apollo/client";

import client from "@/lib/apollo-client";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      Next JS with Apollo Graphql + MongoDB
      <p>Proceed to /api/graphql to checkout the playgorund</p>
      <button>click</button>
    </ApolloProvider>
  );
}
