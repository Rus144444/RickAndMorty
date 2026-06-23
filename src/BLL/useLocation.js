import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

export const useLocation = () => {
    const [item, setItem] = useState()
    const { id } = useParams();
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${id}`).then((res) => setItem(res.data))
    }, [])

    return { item }
}