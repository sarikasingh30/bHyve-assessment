import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import {createArticle, updateArticle } from '../redux/articlesSlice';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';


const ArticleForm = ({ article = {} }) => {
  const [productName, setproductName] = useState(article.productName|| '');
  const [description, setDescription] = useState(article.description || '');
  const [avatar, setAvatar] = useState(article.avatar || '');
  const [name, setName] = useState(article.name || '');
  const [productPrice, setProductPrice] = useState(article.productPrice || '');
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (article._id) {
        setproductName(article.productName)
        setAvatar(article.avatar)
        setDescription(article.description)
      setProductPrice(article.productPrice);
      setName(article.name);
    }
  }, [article]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(article._id){
        const newArticle = { _id: article._id, productName, description,avatar,name,productPrice};
        // let ids=article.id
        dispatch(updateArticle(newArticle));
    }else{
        const newArticle = { _id: uuidv4(), productName, description,avatar,name,productPrice};
        dispatch(createArticle(newArticle));
    }
    
    
    router.push('/');
  };

  return (
    <Box p={5} width='50%' margin="auto" mt={'5%'} shadow="md" borderWidth="1px">
      <form onSubmit={handleSubmit} >
        <FormControl id="productName" isRequired>
          <FormLabel>Product Name</FormLabel>
          <Input
            type="text"
            value={productName}
            onChange={(e) => setproductName(e.target.value)}
          />
        </FormControl>
        <FormControl id="description" mt={4} isRequired>
          <FormLabel>Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl id="name" mt={4} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="productPrice" mt={4} isRequired>
          <FormLabel>ProductPrice</FormLabel>
          <Input type='number'
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </FormControl>
        <FormControl id="avatar" mt={4} isRequired>
          <FormLabel>Avatar</FormLabel>
          <Textarea
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </FormControl>
        <Button mt={4} bg={'#776B5D'} color='white' type="submit">
          {article._id ? 'Update' : 'Create'} Article
        </Button>
      </form>
    </Box>
  );
};

export default ArticleForm;
