import { useRouter } from 'next/router';
import { useDispatch} from 'react-redux';
import { Flex, Heading, Image, Text, Spinner, HStack, Button } from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link';
import { deleteArticle } from '../../redux/articlesSlice';

const Article = ({ article }) => {
  const router = useRouter();
  const dispatch=useDispatch()


  const handleDelete=(id)=>{
    dispatch(deleteArticle(id))
    router.push("/")
  }




  if (!article) {
    return <Flex alignItems='center' justifyContent="center">
    <Spinner mt="5"
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  
/>
  </Flex>;;
  }

  return (
    <Flex width="60%" margin={'auto'} p={5} borderWidth='4px' marginTop="8px" flexDirection='column' justifyContent='space-around' alignItems='center' bg="#B0A695">
          <Heading as='h3' size='lg'>{article.productName}</Heading>
          <Image src={`${article.avatar}`||`https://placehold.co/150`} marginTop="4"/>
          <Text mt={4}>Description: {article.description}</Text>
          <Text mt={4}>{article.name}</Text>
          <Text mt={4}>Price:  ₹ {article.productPrice}</Text>
          <HStack>
            <Link href={`/articles/${article._id}/edit`}><Button mt={4} bg={'#776B5D'} color='white'>Edit</Button></Link>
            <Button mt={4} bg={'#776B5D'} color='white' onClick={()=>handleDelete(article._id)}>Delete</Button>
          </HStack>
        </Flex>
  );
};

export const getServerSideProps = async (context) => {
  const {_id} = context.params;
  if (!_id) {
    return {
      props: {
        error: 'Invalid article ID',
      },
    };
  }
  try {
    const response = await axios.get(`https://665780c45c36170526450bc1.mockapi.io/blogs/v1/articles/${_id}`);
    return {
      props: {
        article: response.data,
      },
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    if (error.response && error.response.status === 404) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        error: 'Failed to fetch article',
      },
    };
  }
};

export default Article;
