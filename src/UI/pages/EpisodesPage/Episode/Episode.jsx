import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import s from "./Episode.module.css"

export const Episode = () => {
    const [item, setItem] = useState()
    const { id } = useParams();
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/episode/${id}`).then((res) => setItem(res.data))
    }, [])

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