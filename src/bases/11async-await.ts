import { type GIFResponse } from "../interfaces/git-response";
import { giphyAPI } from "./10axios";

export const getImage = async () => {
  // async = Retorna una promesa

  try {
    const resp = await giphyAPI.get<GIFResponse>("/random");
    return resp.data.data.images.downsized.url;
  } catch (error) {
    console.error(error);
  }
};

getImage()
  .then((url) => console.log({ url }))
  .catch((err) => console.log(err));
