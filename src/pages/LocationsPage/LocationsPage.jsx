import { useEffect, useState } from "react"
import s from "./LocationsPage.module.css"
import axios from "axios"
import { Link } from "react-router"


export const LocationsPage = () => {
  const [locations, setLocations] = useState()
  const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    })

useEffect(() => {
  const promis = axios.get("https://rickandmortyapi.com/api/location")
  .then((res) => {
    res.data.results
    setLocations(res.data.results)
    setInfo(res.data.info)
  })
  .catch((err) => console.error(err))
},[])

  const fetchData = (url) => {
      axios.get(url).then((res) => {
        setLocations(res.data.results)
        setInfo(res.data.info)
      })
      .catch((err) => console.log(err))
  }

  const nextPageHandler = () => {
  if (info.next) {
    fetchData(info.next)
  }
}

const previousPageHandler = () => {
  if (info.prev) {
    fetchData(info.prev)
  }
}

  return (
    <div>
      <h1 className="pageTitle" >LocationsPage</h1>

        {locations && locations.map((location) => {return<ul className={s.item} key={location.id}>
        <Link to={`/RickAndMorty/locations/${location.id}`}>{location.name}</Link>
        <li>{location.dimension}</li>
        <li>{location.type}</li>
        <li>{location.url}</li>
        <li>{location.created}</li>
        <hr/>
      </ul>})}
      <div className="buttonContainer">
          <button className="linkButton" onClick={previousPageHandler} >
            Назад
          </button>
          <button className="linkButton" onClick={nextPageHandler} >
            Вперед
          </button>
      </div>
    </div>
  )
}