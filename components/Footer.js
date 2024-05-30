
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as='footer' bg={`#776B5D`} py={4} mt={8}>
      <Text color='white' textAlign='center'>
        &copy; {new Date().getFullYear()} App. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
