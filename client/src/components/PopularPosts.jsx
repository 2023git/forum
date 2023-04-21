import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/PopularPosts.css'

export const PopularPosts = ({ postE }) => {
    return (
        <div className='popularposts'>
            <Link
                to={`${postE._id}`}
            >
                {postE.title}
            </Link>
        </div>
    )
}