import { useState } from "react";
import { getCharactersRequest } from "../lib/api/get-characters-request";
import { getCharacterRequest } from "../lib/api/get-character-request";

export const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [CharacterListError, setCharacterListError] = useState("");

  const getCharacters = async () => {
    try {
      const CharacterResponse = await getCharactersRequest();
      setLoading(false);
      console.log(CharacterResponse);
      return CharacterResponse;
    } catch (error) {
      setCharacterListError(error);
      console.log(CharacterListError);
      setLoading(false);
    }
  };

  const getCharacter = async (url) => {
    try {
      const CharacterResponse = await getCharacterRequest(url);
      setLoading(false);
      return CharacterResponse;
    } catch (error) {
      setCharacterListError(error);
      setLoading(false);
    }
  };

  return {
    getCharacters,
    getCharacter,
    loading,
    CharacterListError,
  };
};
