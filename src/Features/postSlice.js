import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "react-router-dom";

export const fetchPost = createAsyncThunk(
  "fetchPost",
  async (data, { rejectWithValue }) => {
    // let res = await fetch(
    //   "https://6842e16fe1347494c31e4e85.mockapi.io/post/posts"
    // );
    // return res.json();
    try {
      let res = await axios.get(
        "https://6842e16fe1347494c31e4e85.mockapi.io/post/posts"
      );
      return res.data;
    } catch (error) {
      return error(rejectWithValue);
    }
  }
);

export const savePost = createAsyncThunk("savePost", async (data) => {
  // let res = await fetch(
  //   "https://6842e16fe1347494c31e4e85.mockapi.io/post/posts",
  //   {
  //     method: "POST",
  //     body: data,
  //   }
  // );
  let res = await axios.post(
    "https://6842e16fe1347494c31e4e85.mockapi.io/post/posts",
    data
  );

  return res.data;
});

export const deletePost = createAsyncThunk("deletePost", async (data) => {
  let res = await axios.delete(
    `https://6842e16fe1347494c31e4e85.mockapi.io/post/posts/${data}`
  );
  return res.data;
});

export const updatePost = createAsyncThunk("updatePost", async (data) => {
  try {
    let res = await axios.put(
      `https://6842e16fe1347494c31e4e85.mockapi.io/post/posts/${data.id}`,
      data
    );
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    isError: false,
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.isError = true;
    });
    builder.addCase(savePost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(savePost.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.data.push(action.payload);
    });
    builder.addCase(savePost.rejected, (state, action) => {
      state.isError = true;
    });
    builder.addCase(deletePost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((post) => post.id !== action.payload.id);
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.isError = true;
    });
    builder.addCase(updatePost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });
    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default postSlice.reducer;
