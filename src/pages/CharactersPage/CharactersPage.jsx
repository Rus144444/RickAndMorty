import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import s from "./CharactersPage.module.css"
import { Link } from "react-router"


 
export const CharactersPage = () => {
    const [characters, setCharacters] = useState([])
    const [error, setError] = useState(null)
    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    })
 
    const fetchData = (url) => {
        axios.get(url).then((res) => {
        setCharacters(res.data.results)
        setInfo(res.data.info)
        setError(null)
        })
        .catch((err) => {
        setError(err.response.data.error)
      })
    }
 
    const nextPageHandler = () => {
        fetchData(info.next)
    }
 
    const previousPageHandler = () => {
        fetchData(info.prev)
    }

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
        setCharacters(res.data.results)
        setInfo(res.data.info)
        })
    }, [])

    const searchHandler = (event) => {
        const value = event.currentTarget.value
        fetchData(`https://rickandmortyapi.com/api/character?name=${value}`)
    }
 
  return (
    <div className="pageContainer">
      <h1 className="pageTitle">CharacterPage</h1>
      <input type="search" className={s.search} onChange={searchHandler} placeholder="Search..." />
      {error && <div className={s.errorMessage}>{error}</div>}
      <ul className={s.characters}>
        {!error && characters?.map((character) => {
        return(<div key={character.id} className={s.character}>
          <Link to={`/RickAndMorty/characters/${character.id}`} className={s.characterLink} >{character.name}</Link>
          <img src={character.image} alt={`${character.name} avatar`} />
        </div>)
       })}
      </ul>
       <div className={s.buttonContainer}>
            <button className="linkButton" onClick={previousPageHandler} disabled={info.next === null}>
              Назад
            </button>
            <button className="linkButton" onClick={nextPageHandler} disabled={info.next === null} >
              Вперед
            </button>
        </div>
    </div>
  )
}