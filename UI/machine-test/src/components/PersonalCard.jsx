import React from 'react'
import Profile from "../../../Assets/media.png" 
import Facebook from "../../../Assets/facebook.png" 
import Instagram from "../../../Assets/instagram.png" 
import Twitter from "../../../Assets/twitter.png" 

const PersonalCard = () => {
    const social=[Facebook,Instagram,Twitter]
  return (
    <div className="flex-1 overflow-hidden shadow-lg bg-white rounded-xl h-auto" >
          <img src={Profile} alt="profilePic" className='w-full object-fill' />
          <div className='px-5 py-3 text-center flex flex-col gap-1 items-center'>
            <h4 className='text-lg font-[600]'>John Doe</h4>
            <p className='text-gray-400 mb-2'>CEO</p>
            <div className='flex gap-5 items-center justify-center mb-2'>
                {
                    social.map((item,ind)=>(
                        <img src={item} key={ind} alt="social media" />
                    ))
                }
            </div>
          </div>
    </div>
  )
}

export default PersonalCard
