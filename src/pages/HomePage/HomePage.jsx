import { Header } from "../../common/components/Header/Header"
import { NavLink } from "react-router"
import s from "./HomePage.module.css"

export const HomePage = () => {
  return (
    <div className={s.mainWrapper}>
      <h1 className={s.title}>The Rick and Morty</h1>
       <div className={s.linkWrapper}>
        <NavLink to={"/RickAndMorty/characters"} className="linkButton">
          Characters
        </NavLink>
        <NavLink to={"/RickAndMorty/locations"} className="linkButton">
          Locations
        </NavLink>
        <NavLink to={"/RickAndMorty/episodes"} className="linkButton">
          Episodes
        </NavLink>
      </div>
    </div>
  )
}