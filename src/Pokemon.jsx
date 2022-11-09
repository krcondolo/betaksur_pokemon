// Autor: Raul Condolo
// Fecha: 8 de noviembre 2022

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./Slices/pokemon/thunks";
import './Pokemon.css'
import logopoke from './images/pokeball.svg'
import { pokemonList } from "./api/pokemonList";
export const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const getPokemons = async () => {
        const res = await pokemonList();
        setPokemons(res);
    }
    useEffect(() => {
        getPokemons();
    }, [])
    const add_pokemon = () => {
        window.location.replace('/addpokemon')
    }
    return (
        <>
            <img alt="" className="poke_logo" src={logopoke} />
            <h1 className="text_pokedex">Pokédex</h1>
            <div className="btn_add">
                <i className="fa-solid fa-plus" onClick={add_pokemon}></i>
            </div>
            <br />
            <input type="search" className="busca_pok" placeholder="Buscar..." id="Buscador" />
            <br />
            <br />
            <div className="container_poke">

                {
                    pokemons.map(pokemon => (
                        <>
                            <div className="cards" style={{ borderColor: `${pokemon.color}` }}>
                                <h5 style={{ color: `${pokemon.color}` }}>#00{pokemon.id}</h5>
                                <img className="card-img-top" key={pokemon.id} src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/00${pokemon.id}.png`} alt="Card image cap" />
                                <h5 className="card_body" key={pokemon.id} style={{ backgroundColor: `${pokemon.color}`, color: "white" }}>{pokemon.name}</h5>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}
