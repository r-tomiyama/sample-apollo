import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import {
  getCharacters,
  getCharactersVariables
} from "./__generated__/getCharacters";

const GET_CHARACTERS = gql`
  query getCharacters($name_contains: String) {
    characters(where: { name_contains: $name_contains }) {
      id
      name
      work
      appearsIn {
        name
      }
    }
  }
`;

export function useGetCharacters(params: getCharactersVariables) {
  return useQuery<getCharacters>(GET_CHARACTERS, params);
}
