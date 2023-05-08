import createCharacterCard from "./createCharacterCard";
import getCharacters from "./getCharacters/getCharacters";
import { type RickAndMortyApiDataStructure } from "./getCharacters/types";

const createCharacters = async () => {
  let characters: string;
  let apiResponse: RickAndMortyApiDataStructure;
  const testaco = document.querySelector(".root")!;

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

    testaco.innerHTML = `<ul class="characters">${characters}</ul>`;
  });
};

export default createCharacters;
