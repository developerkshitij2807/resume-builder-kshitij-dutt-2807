import { gql } from "apollo-server-micro";

const UserSchema = gql`
  type User {
    firstName: String
    lastName: String
  }
  type Query {
    getUserDetailsQuery: User
  }
`;

export default UserSchema;