import axios from "axios";
import { env } from "../../commons/Env";

console.log("apiUrl", env.apiUrl);
console.log("googleCustomSearchJsonAPIKey", env.googleCustomSearchJsonAPIKey);
console.log("cx", env.cx);

export const GoogleCustomSearchJsonAPI = axios.create({
  baseURL: `${env.apiUrl}`,
  timeout: 10000,
  params: {
    key: env.googleCustomSearchJsonAPIKey,
    cx: env.cx,
    searchType: "image",
    imgType: "photo",
    fields: "items(title,link,image(contextLink,width,height,thumbnailLink,byteSize))",
  }
});


