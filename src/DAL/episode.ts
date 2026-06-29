import axios from "axios"
// import { LocationsResponse, LocationType } from "../types/location"
const url = "https://rickandmortyapi.com/api/episode"

export const fetchEpisodeById = async (id: string) => {
    const { data } = await axios.get(`${url}/${id}`)
   return data
}

export const fetchEpisodeUrl = async (url: string) => {
    const { data } = await axios.get(url)
    return data
}

