import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../redux/post'
import '../styles/addPostPage.css'

export const AddPostPage = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = () => {
    try {
      const data = new FormData()
      data.append('title', title)
      data.append('text', text)
      data.append('image', image)
      dispatch(createPost(data)) // postSlice
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  const clearFormHandler = () => {
    setText('')
    setTitle('')
  }

  return (
    <div className="whole">
      <form 
      className='form'
      onSubmit={(e) => e.preventDefault()}>
        <label className="imagen">
          <input
            className="img"
            placeholder="Заголовок"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          Изображение
        </label>
        <div>
          {image && (
            <img
              className="post-image"
              src={URL.createObjectURL(image)}
              alt={image.name}
            />
          )}
        </div>

        <div className="head">
          <label
          className='header'>
            Заголовок поста:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Заголовок"
              className='header'
            />
          </label>

          <label>
            Текст поста:
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder="Текст поста"
              className='textPost'
            />
          </label>
        </div>

        <div className="buttonAddAll">
          <button className="buttonAddOne" onClick={submitHandler}>
            Добавить
          </button>

          <button className="buttonAddTwo" onClick={clearFormHandler}>
            Отменить
          </button>
        </div>

      </form>
    </div>
  )
}
