import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { PostItem } from '../components/PostItem'
import axios from '../utils/axios'

import '../styles/postsPage.css'


export const PostsPage = () => {
    const [posts, setPosts] = useState([])

    const fetchMyPosts = async () => {
        try {
            const { data } = await axios.get('/posts/user/me')
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyPosts()
    }, [])

    return (
        
        <div className='post'>
            
            {posts?.map((post, idx) => (
                <PostItem postW={post} key={idx} />
            ))}
            
        </div>

    )
}
