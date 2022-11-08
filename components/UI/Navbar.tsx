import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import NextLink from 'next/link';
import Image from "next/image";

export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray200.value
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
                alt="icono de la app" width={70} height={70} />
            <NextLink href="/" passHref>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okemon</Text>
                </div>
            </NextLink>
            <Spacer css={{ flex: 1 }} />
            <NextLink href="/favorites" passHref>
                <Text color='white'>Favoritos</Text>
            </NextLink>
        </div>
    )
}
