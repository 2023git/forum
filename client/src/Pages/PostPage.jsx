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
            <div >
                Загрузка...
            </div>
        )
    }
    return (
        <div > 

                <Link className='backPostPages' to={'/'}>
                    Назад
                </Link>
           
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



            <div className='containerPostPage'>
                <div className='username'>
                    {post.email}
                    </div>
                <div className='date'>
                    <Moment date={post.createdAt} format='D MMM YYYY' />
                </div>
                
                </div>


<div className='allPostPage'>

                <div className='titlePostPage'>{post.title}</div>
                
                <div className='postPageContainer'>

                    <p className='textPostPage'>
                        {post.text}
                        </p>
                </div>

</div>
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
                        <button onClick={removePostHandler} 
                                className='button'>
                            <Link>
                            <AiFillDelete />
                            </Link>
                        </button>
                        </div>
                    )}
                            </div>
                    </div>
                </div>
       
    
               <div className='textHolderPostPage'>
                    <form
                        className='inputTextPostpage'
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <textarea
                            type='text'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder='Comment'
                            className='textCommentPostPage'
                        />
                        
                         { isAuth && (<button
                            type='submit'
                            onClick={handleSubmit}
                            className='buttonCommentPostPage'
                        >
                            Добавить
                        </button>
                        )}

                    </form>

                  <div className='commentLayout'>
                  {comments?.map((cmt) => (
                        <Comment key={cmt._id} cmt={cmt} />
                    ))} 
                  </div>

                </div> 
               
     </div>
    )
}