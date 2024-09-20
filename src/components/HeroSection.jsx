import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'



const HeroSection = () => {
  return (
    <>
        
    
    <div className="flex flex-col item-center mt-0 lg:m-16">
        <h1 className="text-4xl sm:5xl lg:text-6xl text-center tracking-wide">
        CodeMinds build tools <span className='bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text'>for developers</span>
        </h1>
        <p className='mt-10 text-md text-center items-center lg:ml-10 text-color-neutral-500 max-w-4xl'>
        CodeMinds is a web development company that specializes in building tools for developers.  Our team is dedicated to providing the best possible service to our clients.
        </p>
        <div className='flex justify-center mt-10'>
            <a href="#" className='bg-gradient-to-r mr-4 lg:ml-5   from-red-500 0 to-purple-500  py-2 px-3 border rounded-md'>Start for free</a>
            <a href="#" className='py-2 px-3 border rounded-md'>Documentation</a>

        </div>
        
        <div className='flex justify-center mt-10'>
        
            <video
            muted
            autoPlay
            loop
            className=' rounded-lg w-1/2 border border-red-500 shadow-purple-500 lg:mr-5' >
            <source src={video1} type="video/mp4" />

            </video> 
            <video
            muted
            autoPlay
            loop
            className='rounded-lg w-1/2 border border-red-500 shadow-purple-500' >
                <source src={video2} type="video/mp4" />

            </video>  
            
        </div>
        <div  className='flex justify-center mt-10'>
       
        </div>
    </div>
    </>
  )
}

export default HeroSection