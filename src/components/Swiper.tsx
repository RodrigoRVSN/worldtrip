import { Flex, Text, Box } from "@chakra-ui/react";
import Link from "next/link";

import { IContinent } from "../pages";

import { Swiper as Slider, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

SwiperCore.use([Pagination, Navigation, A11y, Autoplay]);

interface SwiperProps {
  continents: IContinent[];
}

export function Swiper({ continents }: SwiperProps) {
  return (
    <Flex w="100%" maxW="1240px" h="450px" mx="auto" mb="10">
      <Slider
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
      >
        {continents.map((item) => (
          <SwiperSlide>
            <Flex
              bgImage={`${item.data.banner_continent}`}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              mb="114px"
              w="100%"
              h="100%"
              px="3"
              py="3"
              align="center"
              justify="center"
              textAlign="center"
            >
              <Link href={`/continent/${item.slug}`}>
                <a>
                  <Box color="light.100">
                    <Text fontWeight="700" fontSize={["4xl", "5xl"]}>
                      {item.data.title}
                    </Text>
                    <Text fontSize={["3xl", "4xl"]} maxW={["200", "100%"]}>
                      {item.data.subtitle}
                    </Text>
                  </Box>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}
      </Slider>
    </Flex>
  );
}
