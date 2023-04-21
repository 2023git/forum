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
    <div
     className="wholeAddPostPage"
    >
      <form 
      className='formAddPostPage'
      onSubmit={(e) => e.preventDefault()}>
        
        <div className="wholeAddPostpage">
        <label className="imageHeaderAddPostPage">
          <input
            className="imageAddPost"
            placeholder="Заголовок"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          Изображение
        </label>

          {image && (
            <img
              className="imageAddPostPage"
              src={URL.createObjectURL(image)}
              alt={image.name}
            />
          )}

        <div className="headerAddPostPageMain">
          <label
            className='headerAddPostPage'>
            Заголовок поста:
            <input
              className='inputHeaderAddPost'
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Введите заголовок поста"
            />
          </label>

          <label
            className='headerAddPostPage'
            >
            Текст поста:
            <textarea
              type ='text'
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder="Введите текст поста"
              className='textAddPost'
            />
          </label>
        </div>

        <div className="buttonAddAll">
          <button className="buttonAddPostOne" onClick={submitHandler}>
            Добавить
          </button>

          <button className="buttonAddPostTwo" onClick={clearFormHandler}>
            Отменить
          </button>
        </div>


        </div>

      </form>
    </div>
  )
}
