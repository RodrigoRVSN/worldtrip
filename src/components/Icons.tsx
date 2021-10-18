import { Flex, Image, SimpleGrid } from "@chakra-ui/react";

export function Icons() {
  return (
    <Flex w="100%" maxWidth="1160px" mx="auto" display="row">
      <SimpleGrid minChildWidth="40px" px="4" spacingX="40px">
        <Image w="80px" src="/icons/nightlife.png" />
        <Image w="80px" src="/icons/beach.png" />
        <Image w="80px" src="/icons/modern.png" />
        <Image w="80px" src="/icons/classic.png" />
        <Image w="80px" src="/icons/more.png" />
      </SimpleGrid>
    </Flex>
  );
}
