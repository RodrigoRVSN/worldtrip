import { Box, Image, Flex, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      bgImage="url('/banner.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      mb="114px"
      w="100%"
      px="3"
      py="3"
    >
      <Flex
        justifyContent={["center", "space-between"]}
        align={"center"}
        w="100%"
        px={["10", "20", "20", "20", "60"]}
      >
        <div>
          <Text color="light.100" fontSize="3xl">
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text mt="20px" color="light.300">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
        <Image
          transform="translateY(48px)"
          display={["none", "none", "block"]}
          src="/airplane.png"
        />
      </Flex>
    </Flex>
  );
}
