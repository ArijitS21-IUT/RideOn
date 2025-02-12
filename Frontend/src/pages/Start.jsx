import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-bottom bg-top bg-[url(/home/arijit/Desktop/RideOn/Frontend/src/assets/Home.png)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className='w-16 ml-8' src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png" alt="" />
        <div className='bg-white pb-6 py-4 px-4'>
          <h2 className='text-2xl font-bold'>Get Started with RideOn</h2>
          <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
