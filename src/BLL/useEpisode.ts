import {fetchEpisodeById} from "../DAL/episode"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { EpisodeType } from "../types/episode";


export const useEpisode = () => {
    const [item, setItem] = useState<EpisodeType| null>(null)
    const { id } = useParams<{id: string}>();
    useEffect(()=>{
         if(!id) return
        fetchEpisodeById(id)
        .then((data) => setItem(data))
        .catch((err) => console.error(err));
    }, [])
    return { item }
}