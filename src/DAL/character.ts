import axios from "axios"
import type { CharactersRespons, CharactersType } from "../types/character"

const url = "https://rickandmortyapi.com/api/character"

export const fetchCharactersById = async (id: string): Promise<CharactersType> => {
    const {data} = await axios.get<CharactersType>(`${url}/${id}`)
    return data
}

export const fetchCharactersUrl = async (url: string): Promise<CharactersRespons> => {
    const {data} = await axios.get<CharactersRespons>(url)
    return data
}

