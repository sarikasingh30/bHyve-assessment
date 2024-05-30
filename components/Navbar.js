import { Box, Flex,Button } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Box bg={`#776B5D`} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <NextLink href="/" passHref>
            <Box color="white" fontWeight="bold" fontSize="xl">
              App...
            </Box>
          </NextLink>
        </Box>
        <Flex alignItems="center">
          <NextLink href="/" passHref>
            <Button  variant="link" color="white" mr={4}>
              Home
            </Button>
          </NextLink>
          <NextLink href="/articles/search" passHref>
            <Button variant="link" color="white" mr={4}>
              Search
            </Button>
          </NextLink>
          <NextLink href="/articles/new" passHref>
            <Button  variant="link" color='white' mr={4}>
              Create Article
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
