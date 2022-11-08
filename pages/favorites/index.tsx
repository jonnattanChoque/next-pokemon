import { Grid, Card } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { Layout } from '../../components/layouts/Layout';
import { NoFavorites, Favorites } from '../../components/UI';
import { localFavorites } from '../../utils';
import { useRouter } from "next/router";

const FavoritesPage = () => {
    const router = useRouter();
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        setFavorites(localFavorites.allPokemons());
    }, [])

    const onClick = (id: number) => {
        router.push(`/pokemon/${id}`);
    };

    return (
        <Layout title='Pokemons - favoritos'>
            {!favorites && <NoFavorites />}
            {favorites &&
                <Favorites favorites={favorites} />
            }
        </Layout>
    )
}

export default FavoritesPage
