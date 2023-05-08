import rickMortyImage from "../assets/img/rick-morty-name.png";
import style from "../styles/createHeader.module.css";

const createHeader = () => {
  const container = `<div class=${style.container}>
    <img
      src=${String(rickMortyImage)}
      alt="page logo"
      width="160"
      height="54"
    />
  </div>`;

  return container;
};

export default createHeader;
