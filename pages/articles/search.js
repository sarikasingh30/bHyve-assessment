import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  Flex,
  Heading,
  Image,
  Text,
  Spinner,
  HStack,
  Button,
  Box,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { deleteArticle } from "../../redux/articlesSlice";
import { useState } from "react";
import SearchFilter from "../../components/SearchFilter";
import { ArticleCard } from "../../components/ArticleCard";

const Search = ({ articles }) => {
  const [data, setData] = useState(articles);
  const dispatch = useDispatch();
  const { searchQuery, filter } = useSelector((state) => state.articles);

  const filteredArticles = data.filter((article) => {
    return (
      (!searchQuery ||
        article.productName
          .toLowerCase()
          .includes(searchQuery.toLowerCase())) &&
      (!filter || article.category === filter)
    );
  });

  if (!data) {
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
    <Box width="90%" margin={"auto"} p={5}>
        <SearchFilter/>
      <Grid width="90%" margin="auto" templateColumns="repeat(3, 1fr)" gap={6} mt={"4%"}>
        {filteredArticles?.map((el) => {
          return (
            <Link
            href={`/articles/${el._id}`}
            key={el._id}
          >
            <ArticleCard article={el} key={el._id} />
          </Link>
        
          );
        })}
      </Grid>
    </Box>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      `https://665780c45c36170526450bc1.mockapi.io/blogs/v1/articles`
    );
    return {
      props: {
        articles: response.data,
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

export default Search;
