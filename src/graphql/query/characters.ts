import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      id
      name
      work
      appearsIn {
        name
      }
    }
  }
`;

export function useGetCharacters() {
  return useQuery(GET_CHARACTERS);
}
