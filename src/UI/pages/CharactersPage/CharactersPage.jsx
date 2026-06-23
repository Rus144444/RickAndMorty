import { Link } from "react-router"
import { useCharactersPage } from "../../../BLL/useCharactersPage"
import s from "./CharactersPage.module.css"
 
export const CharactersPage = () => {
  const {characters, error, info, searchHandler, previousPageHandler, nextPageHandler} = useCharactersPage()

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
       <div className="buttonContainer">
            <button className="linkButton" onClick={previousPageHandler} disabled={info.prev === null}>
              Назад
            </button>
            <button className="linkButton" onClick={nextPageHandler} disabled={info.next === null} >
              Вперед
            </button>
        </div>
    </div>
  )
}