import createCharacters from "./ts/createCharacters";
import createHeader from "./ts/header";
import style from "./styles/createCharacters.module.css";

const container = document.querySelector(".root")!;

(async () => {
  await createCharacters().then((characters) => {
    const header = createHeader();

    container.innerHTML = `${header}<ul class=${style.characters}>${characters}</ul>`;
  });
})();
