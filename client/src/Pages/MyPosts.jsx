import React from "react";
import '../styles/myPosts.css'
import { PostsPage } from "./PostsPage";

export const MyPosts= () => {
  return (
  <div className="main">

    
    <div className="text-conta">
      
        <div className="text-cont">
            Alice, a young girl, protest against the construction of a nuclear plant 
            created by her father, a deputy. 
            It is then that a strange visitor take them in 2555, a future devastated 
            by the explosion of the central.
        </div>

        </div>


        <div className="parent-container">
        <div className="myPosts"> <PostsPage/> </div>
        </div>


 </div>
  );
};