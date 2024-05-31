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
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('./RichTextEditor'), { ssr: false });





const ArticleForm = ({ article = {} }) => {
  const [title, setTitle] = useState(article.title || "");
  const [description, setDescription] = useState(article.description || "");
  const [avatar, setAvatar] = useState(article.avatar || "");
  const [name, setname] = useState(article.name || "");
  const [category, setCategory] = useState(article.category || "");

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (article._id) {
      setTitle(article.title);
      setAvatar(article.avatar);
      setDescription(article.description);
      setname(article.name);
      setCategory(article.category);
    }
  }, [article]);

  // Form Submission Functionality 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (article._id) {
      const newArticle = {
        _id: article._id,
        title,
        description,
        category,
        avatar,
        name
      };
      dispatch(updateArticle(newArticle));
    } else {
      const newArticle = {
        _id: uuidv4(),
        title,
        description,
        category,
        avatar,
        name
      };
      dispatch(createArticle(newArticle));
    }

    router.push("/");
  };

  return (
    <Box p={5} width="50%" margin="auto" mt="5%" shadow="md" borderWidth="1px">

      <Heading as="h4" textAlign="center" color="#776B5D">
        {article._id ? "Update The" : "Create An"} Article
      </Heading>
      {/* Article Form */}
      <form onSubmit={handleSubmit}>

        <FormControl id="title" isRequired pt="5px">
          <FormLabel color="#776B5D">Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        {/* <FormControl id="description" mt={4} isRequired>
          <FormLabel color="#776B5D">Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl> */}

        <FormControl id="name" mt={4} isRequired>
          <FormLabel color="#776B5D">Name</FormLabel>
          <Input value={name} onChange={(e) => setname(e.target.value)} />
        </FormControl>


        <FormControl id="category" mt={4} isRequired>
          <FormLabel color="#776B5D">Category</FormLabel>
          <Input
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
        <FormControl id="description" mt={4} isRequired>
        <FormLabel color="#776B5D">Description</FormLabel>
        <RichTextEditor value={description} onChange={setDescription} />
        </FormControl>
        <Button
          mt={4}
          bg="#776B5D"
          color="white"
          _hover={{ bg: "#EBE3D5", color: "#776B5D", cursor: "pointer" }}
          type="submit"
          width="100%"
        >
          {article._id ? "Update" : "Create"} Article
        </Button>

      </form>
      
    </Box>
  );
};

export default ArticleForm;

