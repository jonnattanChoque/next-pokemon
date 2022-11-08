import { Grid, Card } from '@nextui-org/react';
import { useRouter } from "next/router";
import { FC } from 'react';

interface Props {
    favorites: number[]
}

export const Favorites: FC<Props> = ({ favorites }) => {
    const router = useRouter();

    const onClick = (id: number) => {
        router.push(`/pokemon/${id}`);
    };

    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                favorites.map((id) => (
                    <Grid key={id} xs={6} sm={3} md={2} xl={1} onClick={() => onClick(id)}>
                        <Card isHoverable isPressable css={{ padding: 10, ds: 'none' }}>
                            <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                                width={'100%'} height={140} />
                        </Card>
                    </Grid>
                ))
            }
        </Grid.Container>
    )
}
