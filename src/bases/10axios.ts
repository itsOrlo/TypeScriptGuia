// npm i axios -> package.json (dependencias)
// Librería para realizar solicitudes http desde el navegador

import axios from "axios";
import { type GIFResponse } from "../interfaces/git-response";

const apiKey = "s3R8GG7sQNsMc9xIky8gLmXMCFUcHr4b";

export const giphyAPI = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

giphyAPI
  .get<GIFResponse>("/random")
  .then((resp) => console.log(resp.data.data.bitly_url))
  .catch((err) => console.log(err));
