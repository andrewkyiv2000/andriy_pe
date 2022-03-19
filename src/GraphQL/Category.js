import { gql} from '@apollo/client'


const CAT = gql `
query {
  categories{
    name
    products{
      id
      name
      description
      gallery
      prices{
        currency{
          label
          symbol
        }
        amount
    }
  }
} 
}
`;

export default CAT;


/*
query product {
    categories{
      products{
        id
      }
    }
  }



  query {
  categories{
    name
    products{
      id
    }
  }
} 
*/

/*query {
  categories{
    name
    products{
      id
      name
      description
      gallery
      prices{
        currency
        amount
      }
    }
  }
} */
