import { useEffect, useState } from "react";
import { fetchCharactersById } from "../DAL/character"
import { useParams } from "react-router";
import { CharactersType } from "../types/character";

export const useCharacter = () => {
  const { id } = useParams<string>();
    const [character, setCharacter] = useState<CharactersType|null>(null);

    useEffect(() => {
        if(!id) return
        fetchCharactersById(id)
        .then((data) => {
                setCharacter(data);
            })
        .catch((err: string) => {
                console.error(err);
            });
    }, [id]);
    return {character}
}