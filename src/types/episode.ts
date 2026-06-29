import type { InfoType } from "./location";

type EpisodeType = {
    id: number
    name: string;
    air_date: string;
    episode: string;
    characters: [string];
    url:  string;
    created: string;
}

export type EpisodeResponse = {
  info: InfoType;
  results: EpisodeType[];
};  