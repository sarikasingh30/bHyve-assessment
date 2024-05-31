// Article Card
import React from "react";
import { Text, Flex, Heading, Image, GridItem,Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const ArticleCard = ({ article }) => {
  const AnimatedBox = motion(GridItem);

  return (
    <AnimatedBox
    p={4}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Flex
        p={5}
        borderRadius="2xl"
        marginTop="8px"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        color="#776B5D"
        bg="#EBE3D5"
        _hover={{ bg: "#B0A695", color: "white", cursor: "pointer" }}
      >
        <Heading as="h3" size="lg">
          {article.title}
        </Heading>
        <Image src={article.avatar} marginTop="4"  alt="imgs"/>
        <Box mt={2}>
          <span>
            <Text as="b">Description: </Text>
          </span>
          <Box textAlign="center" dangerouslySetInnerHTML={{ __html: article.description }}/>
        </Box>
       
        <Text mt={2} fontSize="md">
          <span>
            <Text as="b">Category: </Text>
          </span>
          {article.category}
        </Text>
        <Text as="b" mt={2} fontSize="lg">
          Author: {article.name}
        </Text>
      </Flex>
    </AnimatedBox>
  );
};
