import axios from "axios"
import { LocationsResponse } from "../types/location"
const url = "https://rickandmortyapi.com/api/location"

export const fetchLocatinById = async (id: string):Promise <LocationsResponse> => {
    const { data } = await axios.get(`${url}/${id}`)
   return data
}

export const fetchLocatinUrl = async (url: string):Promise <LocationsResponse>  => {
    const { data } = await axios.get(url)
    return data
}

