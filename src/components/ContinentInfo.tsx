import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import { ContinentProps } from "../pages/continent/[slug]";

export function ContinentInfo({ continent }: ContinentProps) {
  return (
    <SimpleGrid
      maxW={"1160px"}
      mx="auto"
      columns={{ sm: 1, md: 2 }}
      spacing={10}
      px={4}
      mb="80px"
    >
      <Box>
        <Text maxW="600px">{continent.description}</Text>
      </Box>
      <Box>
        <SimpleGrid maxW="490px" mx="auto" columns={3} spacing={10}>
          <Box align="center">
            <Text fontWeight="600" color="highlight" fontSize="3xl">
              50
            </Text>
            <Text fontWeight="600" color="dark.200" fontSize="xl">
              países
            </Text>
          </Box>
          <Box align="center">
            <Text fontWeight="600" color="highlight" fontSize="3xl">
              60
            </Text>
            <Text fontWeight="600" color="dark.200" fontSize="xl">
              línguas
            </Text>
          </Box>
          <Box align="center">
            <Text fontWeight="600" color="highlight" fontSize="3xl">
              {continent.cities.length}
            </Text>
            <Text fontWeight="600" color="dark.200" fontSize="xl">
              cidades +100
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </SimpleGrid>
  );
}
