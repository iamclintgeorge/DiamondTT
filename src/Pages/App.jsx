import { useState } from 'react'
import Homehero from '../Sections/Homehero.jsx'
import MostVisitedPlaces from '../Sections/MostVisitedPlaces.jsx'
import Currentoffer from '../Sections/Currentoffer.jsx'
import Testimonials from '../Sections/Testimonials.jsx'
import Getintouch from '../Sections/Getintouch.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homehero />
    <MostVisitedPlaces />
    <Currentoffer />
    <Testimonials />
    <Getintouch />
    </>
  )
}

export default App
