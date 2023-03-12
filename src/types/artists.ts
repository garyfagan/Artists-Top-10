type Image = {
  height: number;
  url: string;
  width: number;
}

type Item = {
  id: string;
  name: string;
  genres: string[];
  images: Image[];
}

type Artists = {
  items: Item[];
}

export type ArtistResults = {
  artists?: Artists,
  error?: {
    stats: number,
    message: string,
  }
}