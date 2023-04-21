import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import { Registration } from "./Pages/Registration";
import { Login } from "./Pages/Login";
import { Navbar } from "./components/Navbar";
import { Layout } from "./components/Layout";
import { Main } from "./Pages/Main";
import { MyPosts } from "./Pages/MyPosts";
import { PostsPage } from "./Pages/PostsPage";
import { PostPage } from "./Pages/PostPage";
import { AddPostPage } from "./Pages/AddPostPage";
import { getMe } from "./redux/auth";
import { EditPostPage } from "./Pages/EditPostPage";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="postspage" element={<MyPosts />} />
        <Route path=":id" element={<PostPage />} />
        <Route path=":id/edit" element={<EditPostPage />} />
        <Route path="registration" element={<Registration />} />
        <Route path="addpost" element={<AddPostPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="login" element={<Login />} />
        <Route path="navbar" element={<Navbar />} />
      </Routes>
    </Layout>
  );
}

export default App;
