// Autor: Raul Condolo
// Fecha: 8 de noviembre 2022

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./Slices/pokemon/thunks";

export const Pokemon = () => {
    const dispatch = useDispatch();
    const { cargando, pokemons = [] } = useSelector(state => state.pokemons)

    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    return (
        <>
            <h1>Pokemon</h1>
            <hr />
            <span>Cargando pokemons... {cargando ? 'True' : 'False'} </span>
            <ul>
                {
                    pokemons.data.map(pokemon => (
                        <li> {pokemon.name} </li>
                    ))
                }

            </ul>
        </>
    )
}
