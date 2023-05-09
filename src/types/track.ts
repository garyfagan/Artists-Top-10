import { RequestError } from "./error";
import { Album, Artist } from "./tracks";

export type Track = {
  id: string;
  artists: Artist[];
  name: string;
  preview_url: string;
  album: Album;
  error?: RequestError;
}