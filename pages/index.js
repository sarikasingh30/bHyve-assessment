import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles,incrementPage } from '../redux/articlesSlice';
import { useEffect, useState} from 'react';
import {Text, Spinner, Box, Flex,Heading, Image } from '@chakra-ui/react';
import InfiniteScroll from "react-infinite-scroll-component"
import axios from 'axios';
import Link from 'next/link';

const Home = ({initialArticles}) => {
  const dispatch = useDispatch();
  const { items, loading,hasMore,error } = useSelector((state) => state.articles);
  const [page,setPage]=useState(1)
  console.log(items, loading,error)
 

  useEffect(() => {
    if (loading === true && initialArticles.length>0) {
        dispatch({ type: 'articles/fetchArticles/fulfilled', payload: initialArticles });
      } else if (loading==false) {
        dispatch(fetchArticles(page));
      }
      
  }, [loading, dispatch,page,initialArticles]);


  const fetchMoreData = () => {
    let nesP=((items.length/10) + 1)
    setPage(nesP)
    dispatch(fetchArticles(page + 1));
  };


  if (loading) {
    return <Flex alignItems='center' justifyContent="center">
      <Spinner mt="5"
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='blue.500'
    size='xl'
    
  />
    </Flex>;
  }

  return (
    <Box width="60%" margin="auto">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={<Text>No more articles</Text>}
      >
      {items?.map((article,index) => (
        <Link href={`/articles/${article._id}`}>
        <Flex key={`${article.id}-${index}`} p={5} borderWidth='4px' marginTop="8px" flexDirection='column' justifyContent='space-around' alignItems='center' bg="#B0A695">
          <Heading as='h3' size='lg'>{article.productName}</Heading>
          <Image src={`${article.avatar}`||`https://placehold.co/150`} marginTop="4"/>
          <Text mt={4}>Description: {article.description}</Text>
          <Text mt={4}>{article.name}</Text>
          <Text mt={4}>Price:  ₹ {article.productPrice}</Text>
        </Flex>
        </Link>
      ))}
      </InfiniteScroll>
    </Box>
  );

};

export const getServerSideProps = async () => {
  const response = await axios.get('https://665780c45c36170526450bc1.mockapi.io/blogs/v1/articles?page=1&limit=10');
  return {
    props: {
      initialArticles: response.data,
    },
  };
}
export default Home;
