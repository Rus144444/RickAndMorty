import axios from "axios"
import { useEffect, useState } from "react"

export const useEpisodesPage = () => {
  const [episodes, setEpisodes] = useState()
  const [info, setInfo] = useState({
      count: 0,
      pages: 0,
      next: null,
      prev: null,
  })

  useEffect(()=>{
    axios.get("https://rickandmortyapi.com/api/episode")
    .then((res)=> {res.data 
      setEpisodes(res.data.results)
      setInfo(res.data.info)
    })
  },[])

  const fetchData = (url) => {
    axios.get(url).then((res) => {
      setEpisodes(res.data.results)
      setInfo(res.data.info)
    })
    .catch((err) => console.log(err))
  }

  const nextPageHandler = () => {
    fetchData(info.next)
  }

  const previousPageHandler = () => {
    fetchData(info.prev)
  }

  return {info, episodes, nextPageHandler, previousPageHandler}
}