import axios from "axios"
import type { EpisodeType, EpisodeResponse } from "../types/episode"
const url = "https://rickandmortyapi.com/api/episode"

export const fetchEpisodeById = async (id: string):Promise <EpisodeType>=> {
    const { data } = await axios.get<EpisodeType>(`${url}/${id}`)
   return data
}

export const fetchEpisodeUrl = async (url: string):Promise <EpisodeResponse> => {
    const { data } = await axios.get<EpisodeResponse>(url)
    return data
}

