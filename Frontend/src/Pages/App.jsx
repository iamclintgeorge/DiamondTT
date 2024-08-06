import { useState } from 'react'
import Homehero from '../Sections/Homehero.jsx'
import MostVisitedPlaces from '../Sections/MostVisitedPlaces.jsx'
import Currentoffer from '../Sections/Currentoffer.jsx'
import Testimonials from '../Sections/Testimonials.jsx'
import Getintouch from '../Sections/Getintouch.jsx'
import Loginpage from './Loginpage.jsx'
import './App.css'

function App() {

  return (
    <>
    <Homehero />
    <Loginpage />
    <MostVisitedPlaces />
    <Currentoffer />
    <Testimonials />
    <Getintouch />
    </>
  )
}

export default App
