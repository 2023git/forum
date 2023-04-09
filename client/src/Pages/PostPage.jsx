import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import {AiFillEye,AiOutlineMessage,AiTwotoneEdit,AiFillDelete,} from 'react-icons/ai'
import Moment from 'react-moment'
import { toast } from 'react-toastify'

import axios from '../utils/axios'
import '../styles/postPage.css'

import { checkIsAuth } from '../redux/auth'


import { removePost } from '../redux/post'
import { createComment,getPostComments } from '../redux/comment'
import { Comment} from '../components/Comment'


export const PostPage = () => {

    const [post, setPost] = useState(null)
    const [comment, setComment] = useState('')

    const { user } = useSelector((state) => state.auth)
    const { comments } = useSelector((state) => state.comment)
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()

    const isAuth = useSelector(checkIsAuth)


    const removePostHandler = () => {
        try {
            dispatch(removePost(params.id))
            toast('Пост был удален')
            navigate('/posts')
        } catch (error) {
            console.log(error)
        }
    } 


    const handleSubmit = () => {
        try {
            const postId = params.id
            dispatch(createComment({ postId, comment }))
            setComment('')
        } catch (error) {
            console.log(error)
        }
    }
          


    const fetchComments = useCallback(async () => {
        try {
            dispatch(getPostComments(params.id))
        } catch (error) {
            console.log(error)
        }
    }, [params.id, dispatch])

        useEffect(() => {
        fetchComments()
    }, [fetchComments])

    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/posts/${params.id}`)  
        setPost(data)
    }, [params.id])

    useEffect(() => { 
        fetchPost() 
    }, [fetchPost])



    if (!post) {
        return (
            // <div className=' button.back-button '>
            <div >
                Загрузка...
            </div>
        )
    }
    return (
        <div className=' '> 

            <button className='labelBack'>
                <Link className='back' to={'/'}>
                    Назад
                </Link>
            </button>

            <div className=' '>
                <div className=' '>
                    <div className='postImage'>
                        <div
                           className={
                            post?.imgUrl
                                ? 'flex rouded-sm h-80'
                                : 'flex rounded-sm'
                        }
                        >
                             {post?.imgUrl && (
                                <img
                                    className='img'
                                    src={`http://localhost:4000/${post.imgUrl}`}
                                    alt='img'
                                    
                                /> 
                            )} 
                        </div>
                    </div>

                    <div className=' '>



            <div className='container'>
                <div className='username'>
                    {post.email}
                    </div>
                <div className='date'>
                    <Moment date={post.createdAt} format='D MMM YYYY' />
                </div>
                
                </div>
                <div className='title'>{post.title}</div>
                <p className='text'>
                    {post.text}
                    </p>

                <div className='buttons'>
                <div className='buttons-wrapper'>
                    <button className='button'>
                    <AiFillEye /> <span>{post.views}</span>
                    </button>
                    <button className='button'>
                    <AiOutlineMessage />{' '}
                    <span>{post.comments?.length || 0} </span>
                    </button>
                </div>  
                {user?._id === post.author && (
                    <div className='buttons-wrapper'>
                    <button className='button'>
                        <Link to={`/${params.id}/edit`}>
                        <AiTwotoneEdit />
                        </Link>
                    </button>
                    <button onClick={removePostHandler} className='button'>
                        <AiFillDelete />
                    </button>
                    </div>
                )}
                </div>

                        </div>

                </div>

            </div>
       
            <form
            className=' '
            onSubmit={(e) => e.preventDefault()}
        >

        </form>
        <div className='textHolder'>
                    <form
                        className=' '
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type='text'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder='Comment 1'
                            className='textComment'
                        />
                         { isAuth && (<button
                            type='submit'
                            onClick={handleSubmit}
                            className=' '
                        >
                            Добавить
                        </button>
                        )}
                    </form>

                    {comments?.map((cmt) => (
                        <Comment key={cmt._id} cmt={cmt} />
                    ))} 
                </div> 
               
        </div>
    )
}