"use client";


import { useRouter } from "next/router";
import { Providers } from "providers";

export default function Home() {
  const router = useRouter();
  return (
    <Providers>
      Next JS with Apollo Graphql + MongoDB
      <p>Proceed to /api/graphql to checkout the playgorund</p>
      <button onClick={() => router.push("/api/graphql")}>click</button>
    </Providers>
  );
}
