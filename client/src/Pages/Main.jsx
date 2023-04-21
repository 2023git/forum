import React from "react";

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostItem } from "../components/PostItem";
import { getAllPosts } from '../redux/post'
import { PopularPosts } from "../components/PopularPosts";

import '../styles/main.css'

export const Main = () => {

    const dispatch = useDispatch()
    const { posts, popularPosts } = useSelector((state) => state.post)

    useEffect(() => {
        dispatch(getAllPosts())
    }, [dispatch])

    if (!posts.length) {
        return (
            <div >
                Постов не существует.
            </div>
        )  
    }

  return (

<div >
    
    <div className="text-container" >

    Skyscrapers, neon lights, thumping music, street-hardened citizens and a host of socioeconomic 
           inequalities—this is Night City, home of the powerful mega corporations and the no-nonsense street gangs. 
           It’s also the setting of “Cyberpunk: Edgerunners,” an R-rated Netflix original anime that was released on Sept. 13.

           “Cyberpunk: Edgerunners” is a love letter to the source material, the 2020 video game “Cyberpunk 2077.”
        Studio Trigger, the animation studio, and CD Projekt Red, the game developer and publisher of the anime, worked in 
           tandem to perfectly replicate the environment, culture and feel of Night City. Locations featured in the anime can be found in the game, 
           as well as cybernetic upgrades, certain enemies, 
           songs and characters like Rogue and Wakako.
        </div>


        <div className=' popular-posts'>

                    <div className=' popular-posts-title'>
                        Популярное
                    </div>

         <div className="popular"> 

         {popularPosts?.map((post, idx) => (
                        <PopularPosts key={idx} postE={post} />
                        
                    )
                )}
         </div>
                
                </div>

                <div className="postHeader">
                All Posts
            </div>
            
        <div className="post-container">
                    {posts?.map((post, idx) => (
                        <PostItem key={idx} postW={post} />
                    ))}
                </div>

</div>
  );
};