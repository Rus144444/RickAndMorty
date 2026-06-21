import { NavLink } from "react-router"
import logo from "../../../assets/img/logo.png"
import s from "./Header.module.css"

export const Header = () => {
  return (
    <div className={s.container}> 
      <NavLink to="/RickAndMorty"><img src={logo} alt="logotype" className={s.logo} /></NavLink>
      <nav>
        <NavLink to={"/RickAndMorty/characters"} className={s.headerLink}>Characters</NavLink>
        <NavLink to={"/RickAndMorty/locations"} className={s.headerLink}>Locations</NavLink>
        <NavLink to={"/RickAndMorty/episodes"} className={s.headerLink}>Episodes</NavLink>
      </nav>
    </div>
  )
}