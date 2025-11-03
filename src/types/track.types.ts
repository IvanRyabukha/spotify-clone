import type { IArtist } from "./artist.types";


export interface ITrack {
  name: string;
  file: string;
  cover: string;
  artist: IArtist;
  duration: number; // in seconds
}