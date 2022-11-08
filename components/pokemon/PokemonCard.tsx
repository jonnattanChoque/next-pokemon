import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = (props) => {
  const router = useRouter();
  const {
    pokemon: { id, name, url },
  } = props;

  const onClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <>
      <Grid xs={6} sm={3} md={2} xl={1} key={name}>
        <Card css={{ ds: 'none' }} isHoverable={true} isPressable={true} onClick={onClick}>
          <Card.Body css={{ p: 1 }}>
            <Card.Image src={url} alt={name} width="100%" height={140} />
          </Card.Body>
          <Card.Footer>
            <Row justify="space-between">
              <Text transform="capitalize">{name}</Text>
              <Text># {id}</Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  );
};
