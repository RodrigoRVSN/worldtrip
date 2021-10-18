import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../components/Header";

import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import { BannerContinent } from "../../components/BannerContinent";
import { ContinentInfo } from "../../components/ContinentInfo";
import { CitiesInfo } from "../../components/CitiesInfo";

export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    subtitle: string;
    banner_continent: string;
    description: string;

    cities: {
      banner_url: string;
      flag_url: string;
      country_city: string;
      city_name: string;
    }[];
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Header />
      <BannerContinent
        banner={continent.banner_continent}
        title={continent.title}
      />
      <ContinentInfo continent={continent} />
      <CitiesInfo continent={continent} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();
  const response = await prismic.getByUID("continent", String(slug), {});

  const continent = {
    slug: response.uid,
    title: RichText.asText(response.data.title),
    subtitle: RichText.asText(response.data.subtitle),
    banner_continent: response.data.banner_continent.url,
    description: response.data.description,

    cities: response.data.cities.map((city) => {
      console.log("response.data");
      console.log(city);
      return {
        banner_url: city.city_image.url,
        flag_url: city.country_flag.url,
        country_city: city.country_city,
        city_name: city.city_name,
      };
    }),
  };

  return {
    props: { continent },
    revalidate: 60 * 60 * 24,
  };
};
