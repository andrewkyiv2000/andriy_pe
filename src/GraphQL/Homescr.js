import { gql } from "@apollo/client";

const HOMESCR = gql`
  query Category {
    category {
      name
      products {
        id
      }
    }
  }
`;

export default HOMESCR;
