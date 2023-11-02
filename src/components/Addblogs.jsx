import React, { useState } from 'react'
import Navbar from './Navbar'
import { db } from "../Firebase";
import { addDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Addblogs = () => {

  const auth = getAuth()
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    shortDesc: '',
    fullDesc: '',
    img: '',
    authorName: auth.currentUser.displayName,
    authorImg: auth.currentUser.photoURL
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] })
  }

  const fromRef = collection(db, 'blog');


  const submitHandler = async (e) => {
    e.preventDefault();

    await addDoc(fromRef, formData);

    console.log("Data Submitted");

    
    toast.success('Your blog submitted!', {
      position: "top-right",
      autoClose: 20,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

    setTimeout(() => {

      navigate('/blogs')

    }, 3000)

    setFormData({
      title: '',
      shortDesc: '',
      fullDesc: '',
      img: '',
    })

  }


  return (
    <>
    <ToastContainer
position="top-right"
autoClose={20}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <Navbar />

      <div className="container my-3" style={{ width: '60%', lineHeight: '1rem' }}>
        <form onSubmit={submitHandler}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input value={formData.title}
              name='title'
              onChange={handleChange}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp" />
            <div
              id="emailHelp"
              class="form-text">
              We'll never share your email with anyone else.</div>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Short Description</label>
            <input value={formData.shortDesc}
              name='shortDesc'
              onChange={handleChange}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Full Description</label>
            <textarea value={formData.fullDesc}
              name='fullDesc'
              onChange={handleChange}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"></textarea>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Image Url</label>
            <input value={formData.img}
              name='img'
              onChange={handleChange}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone
              else.</div>
          </div>

          <button type="submit" class="btn btn-primary">Add Blogs</button>
        </form>
      </div>
    </>
  )
}

export default Addblogs
