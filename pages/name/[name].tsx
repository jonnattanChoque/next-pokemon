import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React from 'react'
import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';
import { PokemonListResponse } from '../../interfaces/pokemon-list';
import { Detail } from '../../components/UI/detail';
import getPokemonIngo from '../../utils/getPokemonInfo';

interface Props {
    pokemon: Pokemon;
}

const PokemonByName: NextPage<Props> = ({ pokemon }) => {
    return (
        <Detail pokemon={pokemon} />
    );
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const names: string[] = data.results.map((pokemon) => pokemon.name);

    return {
        paths: names.map((name) => ({
            params: { name },
        })),
        fallback: 'blocking',
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { name } = ctx.params as { name: string };
    const pokemon = await getPokemonIngo(name);

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        },
        // revalidate: 20
    };
};


export default PokemonByName;