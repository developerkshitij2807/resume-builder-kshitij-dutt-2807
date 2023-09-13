import { gql } from "@apollo/client";

export const GET_USER_DETAILS_QUERY = gql`
    query {
        getUserDetailsQuery {
            firstName
            lastName
        }
    }
`;