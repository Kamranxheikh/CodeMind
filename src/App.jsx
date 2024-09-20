
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
// import { Workflow } from 'lucide-react'

function App() { 

  return (

    <>
      <Navbar/>
      <div className='max-w-6xl mx-auto pt-7 px-2'>
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>




      </div>
    </>
  )
}

export default App
