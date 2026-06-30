import { useEffect, useState } from "react"
import { fetchLocatinUrl } from "../DAL/location"
import { InfoType, LocationType } from "../types/location"
const urlLocatin = "https://rickandmortyapi.com/api/location"

export const useLocationsPage = () => {
  const [locations, setLocations] = useState<LocationType[]>([])
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<InfoType>({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    })

useEffect(() => {
  fetchLocatinUrl(urlLocatin)
  .then((data) => {
    setLocations(data.results)
    setInfo(data.info)
  })
  .catch((err) => console.error(err))
},[])

  const fetchData = (url: string) => {
      fetchLocatinUrl(url)
      .then((data) => {
        setLocations(data.results)
        setInfo(data.info)
      })
      .catch((err) => setError(err))
  }

  const nextPageHandler = () => {
    if(info.next) {
      fetchData(info.next)
    }
  }

  const previousPageHandler = () => {
      if(info.prev){
        fetchData(info.prev)
      }
  }
  return {locations, previousPageHandler, nextPageHandler, info, error}
}
