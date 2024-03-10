import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Vacation from './pages/Vacation'
import Places from './pages/Places'
import Home from './pages/Home'
import Food from './pages/Food'

function SiteRoutes() {
  return (
    <>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/vacation" element={<Vacation />} />
        <Route path="/places" element={<Places />} />
        <Route path="/food" element={<Food />} /> 
    </Routes>
    
    </>
  )
}

export default SiteRoutes

