import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Nav from './components/Navbar/Nav'
import Sidebar from './components/Sidebar/Sidebar'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'

const App = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='projects' element={<ProjectPage></ProjectPage>}></Route>z
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App