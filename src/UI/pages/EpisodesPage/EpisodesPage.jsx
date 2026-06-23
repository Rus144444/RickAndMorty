import axios from "axios"
import { useEffect, useState } from "react"
import s from "./EpisodesPage.module.css"
import { Link } from "react-router"

export const EpisodesPage = () => {
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

  return (
    <div>
      <h1 className={s.title}>EpisodesPage</h1>
        {episodes && episodes.map((episode) => {return<ul className="list" key={episode.id}>
        <Link to={`/RickAndMorty/episodes/${episode.id}`}>{episode.name}</Link>
        <li className="item">{episode.air_date}</li>
        <li className="item">{episode.episode}</li>
        <li className="item">{episode.url}</li>
        <li className="item">{episode.created}</li>
        <hr/>
      </ul>})}
      <div className="buttonContainer">
          <button className="linkButton" onClick={previousPageHandler} disabled={info.prev === null}>
            Назад
          </button>
          <button className="linkButton" onClick={nextPageHandler} disabled={info.next === null}>
            Вперед
          </button>
      </div>
    </div>
  )
}