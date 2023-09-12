"use client";

import { ApolloProvider } from "@apollo/client";



import client from "@/lib/apollo-client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <ApolloProvider client={client}>
      Next JS with Apollo Graphql + MongoDB
      <p>Proceed to /api/graphql to checkout the playgorund</p>
      <button onClick={() => router.push("/api/graphql")}>click</button>
    </ApolloProvider>
  );
}
