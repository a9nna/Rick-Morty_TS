import createCharacterCard from "./createCharacterCard";
import getCharacters from "./getCharacters/getCharacters";
import { type RickAndMortyApiDataStructure } from "./getCharacters/types";
import style from "../styles/createCharacters.module.css";

const createCharacters = async () => {
  let characters: string;
  let apiResponse: RickAndMortyApiDataStructure;
  const charactersStructure = document.querySelector(".root")!;

  await getCharacters().then((result) => {
    apiResponse = result!;

    apiResponse.results.map((character) => {
      if (!characters) {
        characters = createCharacterCard(character);
      } else if (character) {
        characters += createCharacterCard(character);
      }

      return characters;
    });

    charactersStructure.innerHTML = `<ul class=${style.characters}>${characters}</ul>`;
  });
};

export default createCharacters;
