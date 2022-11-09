import { pokemonApi } from "../../api/pokemonApi";
import { cargandoPokemons, setPokemons } from "./pokemonSlice"

export const getPokemons = () => {
    return async (dispatch, getState) => {
        dispatch(cargandoPokemons());
        //fetch
        const resp = await pokemonApi.get();
        console.log(resp.data);
        dispatch(setPokemons({ pokemons: resp.data }));
    }
}