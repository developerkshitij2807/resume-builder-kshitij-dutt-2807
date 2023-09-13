import { mergeTypeDefs } from "@graphql-tools/merge";

import TestSchema from "@/graphql/schema/testSchema";
import UserSchema from "@/graphql/schema/userSchema";

const typeDefs = mergeTypeDefs([TestSchema, UserSchema]);

export default typeDefs;
