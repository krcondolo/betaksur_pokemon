import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { pokemonSlice } from '../Slices/pokemon/pokemonSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonSlice.reducer
  },
});
