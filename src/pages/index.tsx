import { Header } from "../components/Header";
import { Divider, Center, Heading, Box } from "@chakra-ui/react";
import { Swiper } from "../components/Swiper";
import { Banner } from "../components/Banner";
import { Icons } from "../components/Icons";
import { getPrismicClient } from "../services/prismic";
import { GetStaticProps } from "next";

import Prismic from "@prismicio/client";

export default function Home() {
  return (
    <>
      <Header isHome />
      <Banner />
      <Icons />
      <Center>
        <Divider w="90px" h="1px" mb="80px" mt="52px" bg="dark.300" />
      </Center>
      <Box maxW="840px" mx="auto" mb="52px" textAlign="center">
        <Heading fontWeight="500">Vamos nessa?</Heading>
        <Heading fontWeight="500">Então escolha seu continente</Heading>
      </Box>
      <Swiper />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const postsResponse = await prismic.query(
    [Prismic.predicates.at("document.type", "continent")],
    {
      pageSize: 10,
    }
  );

  // TODO: integrar api com a página
  console.log(postsResponse);

  return {
    props: {},
    revalidate: 60 * 60 * 24,
  };
};
