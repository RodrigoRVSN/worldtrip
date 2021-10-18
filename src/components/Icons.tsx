import {
  Flex,
  Image,
  SimpleGrid,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";

export function Icons() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex w="100%" maxWidth="1160px" mx="auto" display="column">
      <SimpleGrid
        minChildWidth={["105px", "130px", "40px"]}
        px="4"
        spacingX="40px"
      >
        {isDesktop ? (
          <>
            <Image w="80px" src="/icons/nightlife.png" />
            <Image w="80px" src="/icons/beach.png" />
            <Image w="80px" src="/icons/modern.png" />
            <Image w="80px" src="/icons/classic.png" />
            <Image w="80px" src="/icons/more.png" />
          </>
        ) : (
          <>
            <Flex align="center">
              <Text fontSize="5xl" mb="1.5" color="highlight">
                •
              </Text>
              <Text fontSize="1xl">vida noturna</Text>
            </Flex>
            <Flex align="center">
              <Text fontSize="5xl" mb="1.5" color="highlight">
                •
              </Text>
              <Text fontSize="1xl">praia</Text>
            </Flex>
            <Flex align="center">
              <Text fontSize="5xl" mb="1.5" color="highlight">
                •
              </Text>
              <Text fontSize="1xl">moderno</Text>
            </Flex>
            <Flex align="center">
              <Text fontSize="5xl" mb="1.5" color="highlight">
                •
              </Text>
              <Text fontSize="1xl">clássico</Text>
            </Flex>
            <Flex align="center">
              <Text fontSize="5xl" mb="1.5" color="highlight">
                •
              </Text>
              <Text fontSize="1xl">e mais...</Text>
            </Flex>
          </>
        )}
      </SimpleGrid>
    </Flex>
  );
}
