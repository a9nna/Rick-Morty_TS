export type RickAndMortyApiDataStructure = {
  info: InfoApiStructure;
  results: CharacterStructure[];
};

export type InfoApiStructure = {
  count: number;
  pages: number;
  next: string | undefined;
  prev: string | undefined;
};

export type OriginStructure = {
  name: string;
};

export type LocationStructure = {
  name: string;
};

export type CharacterStructure = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: OriginStructure;
  location: LocationStructure;
  image: string;
};
