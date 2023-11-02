import React from 'react'
import Login1 from './components/Login1'
import Blogs from './components/Blogs'
import SingleBlogs from './components/SingleBlogs'
import Addblogs from './components/Addblogs'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login1 />}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/addblogs' element={<Addblogs/>}></Route>
        <Route path='/blogs/:id' element={<SingleBlogs/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
