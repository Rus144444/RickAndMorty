import { Link } from "react-router";
import { useLocation } from "../../../../BLL/useLocation";
import s from "./Location.module.css"

export const Location = () => {
    const { item } = useLocation()

    if(!item) return
    return (
        <div className={s.pageContainer}>
            <div className={s.container}>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.type}</li>
                    <li>{item.dimension}</li>
                    <li>{item.url}</li>
                    <li>{item.created}</li>
                    <ol>{item.residents.map((resident, index) => <li key={index}>{resident}</li>
                    )}</ol>
                </ul>       
                <div className="buttonContainer">
                    <Link className="linkButton"  to={`/RickAndMorty/locations`}>Назад</Link>
                </div>
            </div>
        </div>
    )
}