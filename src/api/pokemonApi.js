import axios from "axios";

export const pokemonApi = axios.create({
    baseURL:'https://consultasecuador.com/api/pokemon'
})
