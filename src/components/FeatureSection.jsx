import React from 'react'
import { features } from "../constants"


const FeatureSection = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
        <div className='text-center'>
            <span className='bg-neutral-900   rounded-full h-6 text-2xl font-medium px-2 py-1 uppercase'>
                feature
            </span>
            <h1 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:m20 teacking-wide'>
                Easily build
                <span className='bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text'> your website</span>  
            </h1>

        </div>
        <div className='flex flex-wrap mt-10 mb-20 lg:mt-50'>
            {features.map((feature, index) => (
                <div key={index} className='w-full sm:w-1/2  lg:w-1/3 '>
                    <div className='flex'>
                        <div className="flex justify-end items-center rounded-full mx-6 h-10 w-10 p-2 bg-neutral-900 text-red-400">
                        {feature.icon}

                        </div>
                        <div>
                            <h5 className='mt-1 mb-6 text-xl'>
                               {feature.text}
                            </h5>
                            <p className='text-md p-2 mb-20 text-neutral-500'>
                                {feature.description}
                            </p>
                        </div>
                    </div>
                     
                </div>
            ))}
          
        </div>
    </div>
  )
}

export default FeatureSection