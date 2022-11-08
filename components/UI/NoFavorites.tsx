import { Container, Image, Text } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 100px)',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        }}>
            <Text>No hay Favorites</Text>
            <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
                alt='Sin favoritos' width={300} height={300} css={{ opacity: '0.5' }} />
        </Container>
    )
}
