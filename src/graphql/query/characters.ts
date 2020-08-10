import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { getCharacters } from "./__generated__/getCharacters";

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
  return useQuery<getCharacters>(GET_CHARACTERS);
}
