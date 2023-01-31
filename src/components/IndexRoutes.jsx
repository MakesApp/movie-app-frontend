import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from '../routes/Homepage'
function Indexroutes() {
  return (
    <div className='Routes'>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Indexroutes