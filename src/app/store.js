import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../Features/postSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
