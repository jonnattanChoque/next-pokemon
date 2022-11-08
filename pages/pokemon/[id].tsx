import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Pokemon } from "../../interfaces";
import { Detail } from '../../components/UI/detail';
import getPokemonIngo from '../../utils/getPokemonInfo';
import { redirect } from "next/dist/server/api-utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  return (
    <Detail pokemon={pokemon} />
  );
};

export const getStaticPaths: GetStaticPaths = (ctx) => {
  const allPokemons = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: allPokemons.map((id) => ({
      params: { id },
    })),
    fallback: "blocking", //Blocking permite pasar parametros que no existen
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };
  const pokemon = await getPokemonIngo(id);

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

export default PokemonPage;
