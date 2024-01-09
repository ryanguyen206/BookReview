import React from 'react'
import hero from '../../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='text-indigo-500 mt-28'>
        <h1 className='text-6xl leading-tight '>Discover, Review, Discuss  <br/> <span className='text-indigo-300'> Your Literary Haven</span> </h1>
        <h2></h2>
        <div className='mt-10'>   
           <img src={hero} className='h-64 w-full object-cover'/> 
        </div>
        <div className='mt-10 flex justify-between'>
            <div className='flex gap-10'>
                    <div className=''>
                        <p className='text-4xl font-semibold  mb-4'>300+</p>
                        <h2 className='text-xl '>Reviews Completed</h2>
                    </div>
                    <div>
                        <p className='text-4xl font-semibold mb-4'>200+</p>
                        <h2 className='text-xl '>Unique users</h2>
                    </div>
           
            </div>
            <div className='w-1/2 text-xl'>
                Embark on a literary journey. Engage in passionate book discussions, share reviews, and connect with readers!
            </div>
        </div>

    </div>
  )
}

export default Hero