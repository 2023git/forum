import React from 'react'
import '../styles/comment.css'

export const Comment = ({ cmt }) => {
    const avatar = cmt.comment.trim().toUpperCase().split('').slice(0, 2)
    return (
        <div className='comment'>
            <div className=''>
                {avatar}
            </div>
            <div className=' '>{cmt.comment}</div>
        </div>
    )
}