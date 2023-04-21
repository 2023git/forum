import React from 'react'
import { AiFillEye, AiOutlineMessage } from 'react-icons/ai'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import '../styles/postItem.css'

export const PostItem = ({ postW }) => {
    
    if (!postW) {
        return (
            <div>
                {/* Загрузка... */}
            </div>
        )
    }
    return (
        <div>
            <Link to={`/${postW._id}`}>
            
        
            <div className="post-item">

             <div className='divPost'>
             <div
                    className={
                        postW.imgUrl ? 'flex-sm80' : ' '
                    }
                >
                    {postW.imgUrl && (
                        <img
                            src={`http://localhost:4000/${postW.imgUrl}`}
                            alt='img'
                            className=' '
                        />
                    )}
                </div>
             </div>

                <div>
                    
                    <div className='name'>

                        {postW.email}
                    </div>

                    <div className='moment'>
                        <Moment 
                        date={postW.createdAt} format='D MMM YYYY' />   
                    </div>

                </div>
                
                <div className='titlePostItem'>{postW.title}</div>
                <p className='postTextItem'>  
                    {postW.text}
                </p> 

                <div className='buttonsPostItem'>
                    
                    <button className='buttonEye' > 
                        <AiFillEye /> <span>{postW.views}</span>
                    </button>

                    <button className='buttonMessage'>
                        <AiOutlineMessage />{' '}
                        <span>{postW.comments?.length || 0} </span>
                    </button>
                          
                </div>
                
            </div>
        </Link>
        </div>
    )
}