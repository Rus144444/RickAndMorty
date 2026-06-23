import s from "./EpisodesPage.module.css"
import { Link } from "react-router"
import { useEpisodesPage } from "../../../BLL/useEpisodesPage"


export const EpisodesPage = () => {
  const {info, episodes, nextPageHandler, previousPageHandler} = useEpisodesPage()
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