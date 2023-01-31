import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "../routes/Home"

function Indexroutes() {
  return (
    <div className='Routes'>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Indexroutes