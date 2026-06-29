import {fetchEpisodeUrl} from "../DAL/episode"
import { useEffect, useState } from "react"
import { EpisodeType } from "../types/episode"
import { InfoType} from "../types/location"

const urlEpisode = "https://rickandmortyapi.com/api/episode"

export const useEpisodesPage = () => {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([])
  const [info, setInfo] = useState<InfoType>({
      count: 0,
      pages: 0,
      next: null,
      prev: null,
  })

  useEffect(()=>{
  (urlEpisode)
    fetchEpisodeUrl(urlEpisode)
    .then((data) => {
      setEpisodes(data.results)
      setInfo(data.info)
    })
  },[])

  const fetchData = (url: string) => {
    fetchEpisodeUrl (url)
    .then((data) => {
      setEpisodes(data.results)
      setInfo(data.info)
    })
    .catch((err) => console.log(err))
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

  return {info, episodes, nextPageHandler, previousPageHandler}
}