import { useEffect, useState } from "react"
import {fetchDataUrl} from "../DAL/api"

export const useLocationsPage = () => {
  const [locations, setLocations] = useState()
  const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    })

useEffect(() => {
  const promis = fetchDataUrl("https://rickandmortyapi.com/api/location")
  .then((res) => {
    res.data.results
    setLocations(res.data.results)
    setInfo(res.data.info)
  })
  .catch((err) => console.error(err))
},[])

  const fetchData = (url) => {
      fetchDataUrl(url)
      .then((res) => {
        setLocations(res.data.results)
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
  return {locations, previousPageHandler, nextPageHandler, info}
}
