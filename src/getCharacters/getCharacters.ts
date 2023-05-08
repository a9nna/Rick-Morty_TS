import "../loadEnvironments";
import axios from "axios";
import { type AxiosRequestConfig } from "axios";
import { type RickAndMortyApiDataStructure } from "./types";

const getCharacters = async () => {
  let response;

  const apiUrl = process.env.API_URL!;

  const options: AxiosRequestConfig = {
    method: "GET",
    url: apiUrl,
    responseType: "json",
    headers: { "Content-Type": "application/json" },
  };

  await axios
    .request(options)
    .then(({ data }: { data: RickAndMortyApiDataStructure }) => {
      response = data;
    });

  return response;
};

export default getCharacters;
