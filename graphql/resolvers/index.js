import { mergeResolvers } from "@graphql-tools/merge";

import testResolvers from "@/graphql/resolvers/testResolvers";

const resolvers = mergeResolvers([testResolvers]);

export default resolvers;
