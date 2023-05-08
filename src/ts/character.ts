import { type CharacterStructure } from "./getCharacters/types";

const createCharacterCard = ({
  name,
  image,
  origin: { name: origin },
  species,
}: CharacterStructure) => {
  const characterCard = `<li><article>
    <div>
      <span>${name}</span>
    </div>
    <img
      src=${image}
      alt=${`The face of ${name}`}
      width=300
      height=300
    />
    <div>
      <div>
        <span>Origin</span>
        <span>${origin}</span>
      </div>
      <div>
        <span>Specie</span>
        <span>${species}</span>
      </div>
    </div>
  </article></li>`;

  return characterCard;
};

export default createCharacterCard;
