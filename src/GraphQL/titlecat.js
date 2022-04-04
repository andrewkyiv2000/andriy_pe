import { gql } from "@apollo/client";

const TITLECAT = gql`
  query {
    categories {
      name
    }
  }
`;

export default TITLECAT;
