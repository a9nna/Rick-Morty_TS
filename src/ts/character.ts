import { type CharacterStructure } from "./getCharacters/types";
import style from "../styles/character.module.css";

const createCharacterCard = ({
  name,
  image,
  origin: { name: origin },
  species,
}: CharacterStructure) => {
  const characterCard = `<li class=${style.container}>
    <article class=${style.card}>
      <div class=${style.card__header}>
        <span>${name}</span>
      </div>
      <img
        src=${image}
        alt=${`The face of ${name}`}
        width=300
        height=300
      />
      <div class=${style["card__resumed-info"]}>
        <div class=${style.card__origin}>
          <span>Origin</span>
          <span>${origin}</span>
        </div>
        <div class=${style.card__specie}>
          <span>Specie</span>
          <span>${species}</span>
        </div>
      </div>
    </article>
  </li>`;

  return characterCard;
};

export default createCharacterCard;
