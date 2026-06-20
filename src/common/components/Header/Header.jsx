import { NavLink } from "react-router"
import logo from "../../../assets/img/logo.png"
import s from "./Header.module.css"

export const Header = () => {
  return (
    <div className={s.container}> 
      <NavLink to="/"><img src={logo} alt="logotype" className={s.logo} /></NavLink>
      <nav>
        <NavLink to={"/characters"} className={s.headerLink}>Characters</NavLink>
        <NavLink to={"/locations"} className={s.headerLink}>Locations</NavLink>
        <NavLink to={"/episodes"} className={s.headerLink}>Episodes</NavLink>
      </nav>
    </div>
  )
}