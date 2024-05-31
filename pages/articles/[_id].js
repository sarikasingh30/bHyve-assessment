import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Flex, Spinner, Box } from "@chakra-ui/react";
import axios from "axios";
import { deleteArticle } from "../../redux/articlesSlice";
import { ArticleUpdateCard } from "../../components/ArticleUpdateCard";
import Layout from "../../components/Layout";


const Article = ({ article }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteArticle(id));
    router.push("/");
  };

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

  return (
    <Layout ele={article}>
      <Box width="90%" margin="auto">
        <ArticleUpdateCard article={article} handleDelete={handleDelete} />
      </Box>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { _id } = context.params;
  if (!_id) {
    return {
      props: {
        error: "Invalid article ID",
      },
    };
  }
  try {
    const response = await axios.get(
      `https://665780c45c36170526450bc1.mockapi.io/blogs/v1/articles/${_id}`
    );
    return {
      props: {
        article: response.data,
      },
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    if (error.response && error.response.status === 404) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        error: "Failed to fetch article",
      },
    };
  }
};

export default Article;
