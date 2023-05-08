import createCharacters from "./ts/createCharacters";
import createHeader from "./ts/header";

const container = document.querySelector(".root")!;

(async () => {
  await createCharacters().then((characters) => {
    const header = createHeader();

    container.innerHTML = `${header}${characters}`;
  });
})();
