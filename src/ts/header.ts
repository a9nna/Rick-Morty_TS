import rickMortyImage from "../assets/img/rick-morty-name.png";

const createHeader = () => {
  const container = `<div>
    <span></span>
    <img
      src=${String(rickMortyImage)}
      alt="page logo"
      width="64"
      height="25"
    />
  </div>`;

  return container;
};

export default createHeader;
