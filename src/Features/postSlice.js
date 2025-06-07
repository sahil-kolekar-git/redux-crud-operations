import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "react-router-dom";

export const fetchPost = createAsyncThunk("fetchPost", async (data) => {
  let res = await fetch(
    "https://6842e16fe1347494c31e4e85.mockapi.io/post/posts"
  );
  return res.json();
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
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPost.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPost.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default postSlice.reducer;
