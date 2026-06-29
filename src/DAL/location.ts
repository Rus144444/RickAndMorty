import axios from "axios"
import { LocationsResponse, LocationType } from "../types/location"
const url = "https://rickandmortyapi.com/api/location"

export const fetchLocatinById = async (id: string):Promise <LocationType> => {
    const { data } = await axios.get<LocationType>(`${url}/${id}`)
   return data
}

export const fetchLocatinUrl = async (url: string):Promise <LocationsResponse>  => {
    const { data } = await axios.get<LocationsResponse>(url)
    return data
}

