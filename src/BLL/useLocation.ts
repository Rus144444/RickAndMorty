import { fetchLocatinById } from "../DAL/location"
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { LocationType } from "../types/location";

export const useLocation = () => {
    const [item, setItem] = useState<LocationType|null>(null)
    const { id } = useParams<{id: string}>();
    useEffect(()=>{
        if(!id) return
        fetchLocatinById(id)
        .then((data) => setItem(data))
        .catch((err) => console.error(err));
    }, [id])

    return { item }
}