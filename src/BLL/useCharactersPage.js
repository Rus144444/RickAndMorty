import { useState, useEffect } from "react"
import axios from "axios"

export const useCharactersPage = () => {
   const [characters, setCharacters] = useState([])
    const [error, setError] = useState(null)
    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    })

     useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
        setCharacters(res.data.results)
        setInfo(res.data.info)
        })
    }, [])

     const searchHandler = (event) => {
        const value = event.currentTarget.value
        fetchData(`https://rickandmortyapi.com/api/character?name=${value}`)
    }

    const fetchData = (url) => {
        axios.get(url).then((res) => {
        setCharacters(res.data.results)
        setInfo(res.data.info)
        setError(null)
        })
        .catch((err) => {
        setError(err.response.data.error)
      })
    }

    const nextPageHandler = () => {
        fetchData(info.next)
    }
 
    const previousPageHandler = () => {
        fetchData(info.prev)
        
    }

  return {
        characters,  error, info, searchHandler, fetchData, previousPageHandler, nextPageHandler
      }
}
