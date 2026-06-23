import { Link } from "react-router"
import { useLocationsPage } from "../../../BLL/useLocationsPage"

export const LocationsPage = () => {
  const {locations, previousPageHandler, nextPageHandler, info} = useLocationsPage()

  return (
    <div>
      <h1 className="pageTitle" >LocationsPage</h1>

        {locations && locations.map((location) => {return<ul className="list" key={location.id}>
        <Link to={`/RickAndMorty/locations/${location.id}`}>{location.name}</Link>
        <li className="item">{location.dimension}</li>
        <li className="item">{location.type}</li>
        <li className="item">{location.url}</li>
        <li className="item">{location.created}</li>
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