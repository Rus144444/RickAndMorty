import { useState, useEffect } from "react"
import { fetchDataUrl } from "../DAL/api"
import type { CharactersType } from "../types/character"
import type { InfoType } from "../types/location"

const urlCharacters = "https://rickandmortyapi.com/api/character"

export const useCharactersPage = () => {
   const [characters, setCharacters] = useState<CharactersType[]>([])
    const [error, setError] = useState(null)
    const [info, setInfo] = useState<InfoType>({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    })

     useEffect(() => {
        fetchDataUrl(urlCharacters).then((res) => {
        setCharacters(res.data.results)
        setInfo(res.data.info)
        })
    }, [])

     const searchHandler = (event) => {
        const value = event.currentTarget.value
        fetchData(`${urlCharacters}?name=${value}`)
    }

    const fetchData = (url) => {
    fetchDataUrl(url)
    .then((res) => {
        setCharacters(res.data.results)
        setInfo(res.data.info)
        setError(null)
    })
    .catch((err) => {
        setError(err.response.data.error)})
    }

    const nextPageHandler = () => {
        if(info.next){
            fetchData(info.next)
        }
    }
 
    const previousPageHandler = () => {
        if(info.prev){
            fetchData(info.prev)   
        }
    }

  return {
        characters,  error, info, searchHandler, previousPageHandler, nextPageHandler
      }
}
