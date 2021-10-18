import { Header } from "../components/Header";
import { Divider, Center, Heading, Box } from "@chakra-ui/react";
import { Swiper } from "../components/Swiper";
import { Banner } from "../components/Banner";
import { Icons } from "../components/Icons";
import { getPrismicClient } from "../services/prismic";
import { GetStaticProps } from "next";

import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

export interface IContinent {
  slug: string;
  data: {
    title: string;
    subtitle: string;
    banner_continent: string;
  };
}

interface HomeProps {
  continents: IContinent[];
}

export default function Home({ continents }: HomeProps) {
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
      <Swiper continents={continents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const continentsResponse = await prismic.query(
    [Prismic.predicates.at("document.type", "continent")],
    {
      pageSize: 10,
    }
  );

  const continents = continentsResponse.results.map((continent) => {
    return {
      slug: continent.uid,
      data: {
        title: RichText.asText(continent.data.title),
        subtitle: RichText.asText(continent.data.subtitle),
        banner_continent: continent.data.banner_continent.url,
      },
    };
  });

  return {
    props: { continents },
    revalidate: 60 * 60 * 24,
  };
};
