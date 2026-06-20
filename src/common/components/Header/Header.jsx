import { NavLink } from "react-router"
import logo from "../../../assets/img/logo.png"

export const Header = () => {
  return (
    <div>
      <NavLink to="/"><img src={logo} alt="logotype" /></NavLink>
      <nav>
        <NavLink to={"/characters"}>Characters</NavLink>
        <NavLink to={"/locations"}>Locations</NavLink>
        <NavLink to={"/episodes"}>Episodes</NavLink>
      </nav>
    </div>
  )
}