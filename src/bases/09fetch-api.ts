import { GIFResponse } from "../interfaces/git-response";

const apiKey = "s3R8GG7sQNsMc9xIky8gLmXMCFUcHr4b";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json()) // Es necesario JSON
  .then((body: GIFResponse) => console.log(body.data.images.downsized.url))
  .catch(alert);
