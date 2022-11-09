import axios from "axios"

export const pokemonList = async () => {
    const myHeadersT = {
        'Content-Type': 'application/json'
    };
    const url = `https://consultasecuador.com/api/pokemon`
    const raw = {
    }
    const config = {
        method: 'POST',
        url: url,
        headers: myHeadersT,
        data: raw,
        timeout: 8000,
    }

    try {
        const resp = await axios(config);
        const { data } = resp.data;
        localStorage.setItem("pokemonsApi", JSON.stringify(data));
        return data

    } catch (error) {
        console.log(error);
    }
}
