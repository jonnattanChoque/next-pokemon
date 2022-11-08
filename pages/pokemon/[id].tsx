import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Pokemon } from "../../interfaces";
import { Detail } from '../../components/UI/detail';
import getPokemonIngo from '../../utils/getPokemonInfo';

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
    fallback: false, //"blocking", //Blocking permite pasar parametros que no existen
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  return {
    props: {
      pokemon: await getPokemonIngo(id),
    },
  };
};

export default PokemonPage;
