import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import postSlice from "./post";
import commentSlice from "./comment";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    post: postSlice,
    comment: commentSlice,
  },
});
