import { Image, Flex, Text } from "@chakra-ui/react";

interface BannerContinentProps {
  banner: string;
  title: string;
}

export function BannerContinent({ banner, title }: BannerContinentProps) {
  return (
    <Flex
      bgImage={banner}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      mb="80px"
      w="100%"
      px="3"
      py="3"
      h="500px"
    >
      <Flex
        justifyContent={["center", "space-between"]}
        align={"center"}
        w="100%"
        px={["10", "20", "20", "20", "60"]}
      >
        <Text
          fontWeight="600"
          color="light.100"
          fontSize="3xl"
          transform="translateY(140px)"
        >
          {title}
        </Text>
      </Flex>
    </Flex>
  );
}
