import { Flex, Image, Grid } from "@chakra-ui/react";
import Link from "next/link";

interface HeaderProps {
  isHome?: boolean;
}

export function Header({ isHome = false }: HeaderProps) {
  return (
    <Flex as="header" justify="center" my="28px">
      <Grid
        templateColumns="repeat(3, 1fr)"
        alignItems="center"
        gap={4}
        maxW="1180px"
        width="100%"
        px="2"
      >
        {!isHome && (
          <Link href="/">
            <a>
              <Image src="/arrowBack.png" />
            </a>
          </Link>
        )}
        <Image src="/logo.png" justifySelf="center" gridColumn="2" />
      </Grid>
    </Flex>
  );
}
