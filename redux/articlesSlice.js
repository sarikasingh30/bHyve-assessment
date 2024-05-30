import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// url
let urlApi = new URL("https://665780c45c36170526450bc1.mockapi.io/blogs/v1/articles");


export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",async (page) => {
   
    const response = await axios.get(`${urlApi}?page=${page}&limit=10`);
    
    return response.data;
  }
);

export const createArticle = createAsyncThunk(
  "articles/createArticle",
  async (article) => {
    const response = await axios.post(urlApi, article);
    return response.data;
  }
);

export const updateArticle = createAsyncThunk(
  "articles/updateArticle",
  
  async (article) => {
    const { _id, ...data } = article;
    if (!_id) throw new Error('Article _id is required');
    const response = await axios.put(`${urlApi}/${_id}`, data);
    return response.data;
  }
);

export const deleteArticle = createAsyncThunk(
  "articles/deleteArticle",
  async (id) => {
    await axios.delete(`${urlApi}/${id}`);
    return id;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    items: [],
    loading: true,
    hasMore:true,
    error: false,
   searchQuery:"",
   filter:""
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.items = [...state.items, ...action.payload];
        if (action.payload.length === 0) {
          state.hasMore = false;
        }
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (article) => article._id === action.payload._id
        );
        state.items[index] = action.payload;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (article) => article._id !== action.payload
        );
      });
  },
});

export const { setSearchQuery, setFilter } = articlesSlice.actions;

export default articlesSlice.reducer;
