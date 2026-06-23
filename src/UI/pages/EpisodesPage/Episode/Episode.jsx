import { Link,} from "react-router";
import { useEpisode } from "../../../../BLL/useEpisode";
import s from "./Episode.module.css"

export const Episode = () => {
    const { item } = useEpisode()
    if(!item) return
    return (
        <div className={s.pageContainer}>
            <div className={s.container}>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.air_date}</li>
                    <li>{item.episode}</li>
                    <li>{item.url}</li>
                    <li>{item.created}</li>
                    <ol>{item.characters.map((resident, index) => 
                        <li key={index}>{resident}</li>
                    )}</ol>
                </ul>       
                <div className="buttonContainer">
                    <Link className="linkButton"  to={`/RickAndMorty/episodes`}>Назад</Link>
                </div>
            </div>
        </div>
    )
}