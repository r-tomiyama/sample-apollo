/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { WORK } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCharacters
// ====================================================

export interface getCharacters_characters_appearsIn {
  __typename: "Episode";
  name: string;
}

export interface getCharacters_characters {
  __typename: "Character";
  /**
   * The unique identifier
   */
  id: string;
  name: string;
  work: WORK | null;
  appearsIn: getCharacters_characters_appearsIn[];
}

export interface getCharacters {
  /**
   * Retrieve multiple characters
   */
  characters: getCharacters_characters[];
}
