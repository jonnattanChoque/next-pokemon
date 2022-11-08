import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

const getPokemonIngo = async(nameOrId: string ) => {
    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
        };
    } catch (error) {
        return null;
    }
}

export default getPokemonIngo;