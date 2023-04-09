// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "../../../utils/axios";

// const initialState = {
//   comments: [],
//   loading: false,
// };

// export const createComment = createAsyncThunk(
//   "comment/createComment",
//   async ({ postId, comment }) => {
//     try {
//       const { data } = await axios.post(`/comments/${postId}`, {
//         postId,
//         comment,
//       });
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const getPostComments = createAsyncThunk(
//   "comment/getPostComments",
//   async (postId) => {
//     try {
//       const { data } = await axios.get(`/posts/comments/${postId}`);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const deletePostComment = createAsyncThunk(
//   "comment/deleteComment",
//   async ({ postId, commentId }) => {
//     try {
//       // const { data } = await axios.delete(`/comments/${postId}/${commentId}`);
//       const { data } = await axios.delete(
//         `/post/${postId}/comments/${commentId}`
//       );
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const commentSlice = createSlice({
//   name: "comment",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     // Создание поста
//     [createComment.pending]: (state) => {
//       state.loading = true;
//     },
//     [createComment.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.comments.push(action.payload);
//     },
//     [createComment.rejected]: (state) => {
//       state.loading = false;
//     },
//     // Получение комментов
//     [getPostComments.pending]: (state) => {
//       state.loading = true;
//     },
//     [getPostComments.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.comments = action.payload;
//     },
//     [getPostComments.rejected]: (state) => {
//       state.loading = false;
//     },

//     // Удаление комментов
//     [deletePostComment.pending]: (state) => {
//       state.loading = true;
//     },

//     // [deletePostComment.fulfilled]: (state, action) => {
//     //   state.loading = false;
//     //   state.comments = state.comments.filter(
//     //     (comment) => comment.id !== action.payload.commentId
//     //   );
//     // },

//     [deletePostComment.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.comments = state.comments.filter(
//         (comment) => comment.id !== action.payload
//       );
//     },

//     [deletePostComment.rejected]: (state) => {
//       state.loading = false;
//     },
//   },
// });

// export default commentSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";

const initialState = {
  comments: [],
  loading: false,
};

export const createComment = createAsyncThunk(
  "comment/createComment",
  async ({ postId, comment }) => {
    try {
      const { data } = await axios.post(`/comments/${postId}`, {
        postId,
        comment,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getPostComments = createAsyncThunk(
  "comment/getPostComments",
  async (postId) => {
    try {
      const { data } = await axios.get(`/posts/comments/${postId}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    // Создание поста
    [createComment.pending]: (state) => {
      state.loading = true;
    },
    [createComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.comments.push(action.payload);
    },
    [createComment.rejected]: (state) => {
      state.loading = false;
    },
    // Получение комментов
    [getPostComments.pending]: (state) => {
      state.loading = true;
    },
    [getPostComments.fulfilled]: (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    },
    [getPostComments.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default commentSlice.reducer;
