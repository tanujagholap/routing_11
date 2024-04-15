import React from 'react'
import Navbar from './compo/Layout/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './compo/Pages/Add'
import Show from './compo/Pages/Show'
import Update from './compo/Pages/Update'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Delete from './compo/Pages/Delete'

function App() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/add' element={<Add/>}></Route>
          <Route path='/show' element={<Show/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
          <Route path='/delete/:id' element={<Delete/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }


export default App
