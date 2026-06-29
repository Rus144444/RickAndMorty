import { InfoType } from "./location";

type Orgin = {
    name: string;
    url: string;
}

type CharactersType = {
    id: number;
    name: string;
    status:string;
    species: string;
    type: string;
    gender: string;
    origin: Orgin;
    location: Orgin;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

type CharactersRespons = {
    info: InfoType;
    results: CharactersType;
}
