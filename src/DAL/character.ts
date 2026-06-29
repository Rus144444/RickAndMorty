import axios from "axios"
import type { CharactersRespons } from "../types/character"

// const url = "https://rickandmortyapi.com/api/character"

export const fetchCharactersUrl = async (url: string): Promise<CharactersRespons> => {
    const {data} = await axios.get<CharactersRespons>(url)
    return data
}