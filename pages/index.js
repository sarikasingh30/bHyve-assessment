import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, incrementPage } from "../redux/articlesSlice";
import { useEffect, useState } from "react";
import { Spinner, Box, Flex, Heading, Grid } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Link from "next/link";
import { ArticleCard } from "../components/ArticleCard";

const Home = ({ initialArticles }) => {
  const dispatch = useDispatch();
  const { items, loading, hasMore, error } = useSelector(
    (state) => state.articles
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (loading === true && initialArticles.length > 0) {
      dispatch({
        type: "articles/fetchArticles/fulfilled",
        payload: initialArticles,
      });
    } else if (loading == false) {
      dispatch(fetchArticles(page));
    }
  }, [loading, dispatch, page, initialArticles]);

  const fetchMoreData = () => {
    let nesP = items.length / 10 + 1;
    setPage(nesP);
    dispatch(fetchArticles(page + 1));
  };

  return (
    <Box width="95%" margin="auto" marginTop={"5%"}>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={
          <Box
            mt={4}
            bg={"#776B5D"}
            color="white"
            width="30%"
            margin="auto"
            borderRadius="xl"
          >
            <Heading as="h6" textAlign="center">
              No more articles
            </Heading>
          </Box>
        }
      >
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          width={"80%"}
          margin={"auto"}
          pt={4}
        >
          {items?.map((article, index) => (
            <Link
              href={`/articles/${article._id}`}
              key={`${article.id}-${index}`}
            >
              <ArticleCard article={article} key={`${article.id}-${index}`} />
            </Link>
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export const getServerSideProps = async () => {
  const response = await axios.get(
    "https://665780c45c36170526450bc1.mockapi.io/blogs/v1/articles?page=1&limit=10"
  );
  return {
    props: {
      initialArticles: response.data,
    },
  };
};
export default Home;
