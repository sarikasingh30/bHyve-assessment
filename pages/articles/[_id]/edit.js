import ArticleForm from "../../../components/ArticleForm";
import axios from "axios";
import { Flex, Spinner } from "@chakra-ui/react";

const EditArticle = ({ article }) => {
  if (!article) {
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner
          mt="5"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }

  return <ArticleForm article={article} />;
};

export const getServerSideProps = async (context) => {
  const { _id } = context.params;
  const response = await axios.get(
    `https://665780c45c36170526450bc1.mockapi.io/blogs/v1/articles/${_id}`
  );
  let x = response.data;
  return {
    props: {
      article: x,
    },
  };
};

export default EditArticle;
