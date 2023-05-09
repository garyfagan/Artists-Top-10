import { Artist } from "@/types/tracks";

export const listArtists = (artists: Artist[]) => artists?.map((artist) => artist.name).join(", ");