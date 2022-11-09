import { pokemonApi } from "../../api/pokemonApi";
import { cargandoPokemons, setPokemons } from "./pokemonSlice"

export const getPokemons = () => {
    return async (dispatch, getState) => {
        dispatch(cargandoPokemons());
        //fetch
        const resp = await pokemonApi.get();
        const {data} = resp.data;
        console.log(data);
        dispatch(setPokemons({ pokemons: data }));
        localStorage.setItem("pokemons", JSON.stringify(data));
    }
}