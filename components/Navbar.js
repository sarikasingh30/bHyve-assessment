import { Box, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box bg={`#776B5D`} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link href="/">
            <Box color="white" fontWeight="bold" fontSize="xl">
              App...
            </Box>
          </Link>
        </Box>
        <Flex alignItems="center">
          <Link href="/">
            <Button variant="link" color="white" mr={4}>
              Home
            </Button>
          </Link>
          <Link href="/articles/search">
            <Button variant="link" color="white" mr={4}>
              Search
            </Button>
          </Link>
          <Link href="/articles/new">
            <Button variant="link" color="white" mr={4}>
              Create New
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
