import {fetchDataId} from "../DAL/api"
import { useEffect, useState } from "react";
import { useParams } from "react-router";


export const useEpisode = () => {
    const [item, setItem] = useState()
    const { id } = useParams();
    useEffect(()=>{
        fetchDataId("https://rickandmortyapi.com/api/episode", id).then((res) => setItem(res.data))
    }, [])
    return { item }
}