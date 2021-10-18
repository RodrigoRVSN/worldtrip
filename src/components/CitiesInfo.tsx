import { SimpleGrid, Text, Image, Box, Flex } from "@chakra-ui/react";
import { ContinentProps } from "../pages/continent/[slug]";

export function CitiesInfo({ continent }: ContinentProps) {
  return (
    <Box maxW={"1160px"} mx="auto" px={3} mb={20}>
      <Text fontSize="2xl" fontWeight="bold" color="dark.200" mb="40px">
        Cidades +100
      </Text>
      <Box>
        <SimpleGrid
          w="100%"
          mx="auto"
          columns={{ sm: 1, md: 2, lg: 3 }}
          spacing="45px"
        >
          {continent.cities.map((city) => {
            return (
              <Box
                _hover={{ bg: "light.200", cursor: "pointer" }}
                w="100%"
                maxW="256px"
                borderColor="highlight"
                bg="light.100"
                borderWidth={1}
              >
                <Image src={city.banner_url} w="100%" />
                <Flex mx="24px" my="18px">
                  <Box>
                    <Text fontWeight="600" fontSize="2xl">
                      {city.city_name}
                    </Text>
                    <Text fontSize="xl">{city.country_city}</Text>
                  </Box>
                  <Image
                    my="auto"
                    ml="auto"
                    borderRadius="full"
                    w="30px"
                    h="30px"
                    src={city.flag_url}
                  />
                </Flex>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
