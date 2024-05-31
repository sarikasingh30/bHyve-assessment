"use client"
import React from "react";
import { Spinner } from "@chakra-ui/react";

export const loading = () => {
  return (
    <>
      <Spinner
        margin="auto"
        mt="5"
        thickness="8px"
        speed="0.70s"
        emptyColor="blue.200"
        color="blue.500"
        size="2xl"
      />
    </>
  );
};
