import { ApolloServer } from "apollo-server-micro";

import { buildSubgraphSchema } from "@apollo/subgraph";
import Cors from "micro-cors";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import typeDefs from "@/graphql/schema";
import resolvers from "@/graphql/resolvers";
import { connectDb } from "@/utils/connectDb";

const cors = Cors();

const apolloServer = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
//   await connectDb();
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
