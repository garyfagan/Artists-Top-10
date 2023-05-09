import { RequestError } from "./error";

type Image = {
  height: number;
  url: string;
  width: number;
}

export type Album = {
  external_urls: {
    spotify: string;
  };
  images: Image[];
  name: string;
}

export type Artist = {
  name: string;
}

type Track = {
  id: string;
  artists: Artist[];
  name: string;
  preview_url: string;
  album: Album;
}

export type TrackResults = {
  tracks?: Track[],
  error?: RequestError;
}