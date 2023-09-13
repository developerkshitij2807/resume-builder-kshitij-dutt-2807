import { mergeResolvers } from "@graphql-tools/merge";

import testResolvers from "@/graphql/resolvers/testResolvers";
import userResolver from "@/graphql/resolvers/userResolver";

const resolvers = mergeResolvers([testResolvers, userResolver]);

export default resolvers;
