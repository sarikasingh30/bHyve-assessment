import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { createArticle, updateArticle } from "../redux/articlesSlice";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const ArticleForm = ({ article = {} }) => {
  const [productName, setproductName] = useState(article.productName || "");
  const [description, setDescription] = useState(article.description || "");
  const [avatar, setAvatar] = useState(article.avatar || "");
  const [tags, setTags] = useState(article.tags || "");
  const [productPrice, setProductPrice] = useState(article.productPrice || "");
  const [category, setCategory] = useState(article.category || "");
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (article._id) {
      setproductName(article.productName);
      setAvatar(article.avatar);
      setDescription(article.description);
      setProductPrice(article.productPrice);
      setTags(article.tags);
      setCategory(article.category);
    }
  }, [article]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (article._id) {
      const newArticle = {
        _id: article._id,
        productName,
        description,
        avatar,
        tags,
        productPrice,
      };
      // let ids=article.id
      dispatch(updateArticle(newArticle));
    } else {
      const newArticle = {
        _id: uuidv4(),
        productName,
        description,
        avatar,
        tags,
        productPrice,
      };
      dispatch(createArticle(newArticle));
    }

    router.push("/");
  };

  return (
    <Box p={5} width="50%" margin="auto" mt="5%" shadow="md" borderWidth="1px">
      <Heading as="h4" textAlign="center" color="#776B5D">
        {article._id ? "Update" : "Create"} the Article
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="productName" isRequired pt="5px">
          <FormLabel color="#776B5D">Product Name</FormLabel>
          <Input
            type="text"
            value={productName}
            onChange={(e) => setproductName(e.target.value)}
          />
        </FormControl>
        <FormControl id="description" mt={4} isRequired>
          <FormLabel color="#776B5D">Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl id="tags" mt={4} isRequired>
          <FormLabel color="#776B5D">Tags</FormLabel>
          <Input value={tags} onChange={(e) => setTags(e.target.value)} />
        </FormControl>
        <FormControl id="productPrice" mt={4} isRequired>
          <FormLabel color="#776B5D">ProductPrice</FormLabel>
          <Input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </FormControl>
        <FormControl id="category" mt={4} isRequired>
          <FormLabel color="#776B5D">Category</FormLabel>
          <Textarea
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FormControl>
        <FormControl id="avatar" mt={4} isRequired>
          <FormLabel color="#776B5D">Avatar</FormLabel>
          <Textarea
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </FormControl>
        <Button mt={4} bg={"#776B5D"} color="white" type="submit" width="100%">
          {article._id ? "Update" : "Create"} Article
        </Button>
      </form>
    </Box>
  );
};

export default ArticleForm;
