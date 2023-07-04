import { mergeTypeDefs } from "@graphql-tools/merge";

import TestSchema from "@/graphql/schema/testSchema";

const typeDefs = mergeTypeDefs([TestSchema]);

export default typeDefs;
