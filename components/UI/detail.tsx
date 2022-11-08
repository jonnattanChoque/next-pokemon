import React, { FC, useEffect, useState } from 'react'
import { Pokemon } from '../../interfaces';
import { Layout } from '../layouts';
import { localFavorites } from "../../utils";
import confetti from 'canvas-confetti';
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";

interface Props {
    pokemon: Pokemon;
}

export const Detail: FC<Props> = ({ pokemon }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        setIsFavorite(localFavorites.existFavorites(pokemon.id));
    }, [pokemon.id]);

    const onToggleFavorite = () => {
        localFavorites.toggleFavorites(pokemon.id);
        setIsFavorite(!isFavorite);

        if (!isFavorite) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 70,
                angle: -100,
                origin: { x: 1, y: 0 }
            })
        }
    }

    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: "5px" }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card.Body>
                        <Card.Image
                            src={
                                pokemon.sprites.other?.dream_world.front_default ||
                                "/no-image.png"
                            }
                            alt={pokemon.name}
                            width="100%"
                            height={200}
                        />
                    </Card.Body>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card css={{ ds: 'none' }}>
                        <Card.Header
                            css={{ display: "flex", justifyContent: "space-between" }}
                        >
                            <Text h1 transform="capitalize">
                                #{pokemon.id} {pokemon.name}
                            </Text>
                            <Button color="gradient" ghost={!isFavorite} onClick={onToggleFavorite}>
                                {isFavorite ? "Remove" : "Add"} to favorites
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container direction="row" display="flex">
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}
