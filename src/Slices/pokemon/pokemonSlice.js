import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: [],
        cargando: false,
    },
    reducers: {
        cargandoPokemons: (state,) => {
            state.cargando = true;
        },
        setPokemons: (state, action) => {
            state.cargando = false;
            state.pokemons = action.payload.pokemons;   
        }
    }
});


// Action creators are generated for each case reducer function
export const { cargandoPokemons, setPokemons } = pokemonSlice.actions;