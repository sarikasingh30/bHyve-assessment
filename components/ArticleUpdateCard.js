import React from "react";
import { Flex, Heading, Image, Text, HStack, Button } from "@chakra-ui/react";
import Link from "next/link";



export const ArticleUpdateCard = ({ article, handleDelete }) => {



  return (
    <Flex
      width="50%"
      margin="auto"
      p={5}
      borderWidth="4px"
      marginTop="4%"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      bg="#B0A695"
      color="white"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      borderRadius={"7%"}
      _hover={{ bg: "#F3EEEA", color: "#776B5D", cursor: "pointer" }}
    >
      <Heading as="h3" size="lg">
        {article.productName}
      </Heading>
      <Image
        boxSize="300px"
        borderRadius="full"
        src={article.avatar}
        marginTop="2"
      />
      <Text mt={2} fontSize="lg">
        <span>
          <Text as="b">Description: </Text>
        </span>{" "}
        {article.description}
      </Text>
      <Text mt={2} fontSize="lg">
        <span>
          <Text as="b">Tags: </Text>
        </span>
        {article.tags}
      </Text>
      <Text mt={2} fontSize="lg">
        <span>
          <Text as="b">Category: </Text>
        </span>
        {article.category}
      </Text>
      <Text mt={2} fontSize="xl">
        <span>
          <Text as="b">Price: </Text>
        </span>{" "}
        ₹ {article.productPrice}
      </Text>
      <HStack>
        <Link href={`/articles/${article._id}/edit`}>
          <Button
            mt={2}
            bg={"#EBE3D5"}
            color="#776B5D"
            _hover={{ bg: "#776B5D", color: "white", cursor: "pointer" }}
          >
            Edit
          </Button>
        </Link>
        <Button
          mt={2}
          bg={"#EBE3D5"}
          color="#776B5D"
          _hover={{ bg: "#776B5D", color: "white", cursor: "pointer" }}
          onClick={() => handleDelete(article._id)}
        >
          Delete
        </Button>
      </HStack>
    </Flex>
  );
};
