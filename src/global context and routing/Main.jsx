import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Navigation from './Navigation'

const Main = () => {
  return (
    <div>
        <Router>
            <Navigation />
            <Routes>
                <Route exact path='/' element={<Home/>}  ></Route>
                <Route exact path='/about' element={<About/>}  ></Route>
                <Route exact path='/blog' element={<Blog/>}  ></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Main