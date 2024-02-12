import React from 'react'
import vision from '../../assets/vision.svg'

const OurVision = () => {
  return (
    <div className='overflow-hidden'>
      <div className="row grid grid-cols-10">
        <div className="lg:col-span-7 lg:px-16 lg:mt-20 mt-8 col-span-10">
            <p className='text-[#C71A03] font-["Montserrat"] sm:text-[40px] text-2xl font-bold lg:text-left text-center'>Our Vision</p>
            <p className='lg:mt-8 sm:text-2xl text-lg font-light text-justify lg:mx-0 mx-12'>Beyond our weekly lectures, we give people the resources to do research in various sub-fields of AI along with bringing in real-world industrial projects and internship opportunities for our team members. Our purpose is to facilitate discussion, learning, and interest in the field of artificial intelligence, as well as to serve as a breeding ground for ideas to solve real-world problems. </p>
        </div>
        <div className="lg:col-span-3 lg:visible invisible">
            <img src={vision} alt="" />
        </div>
      </div>
    </div>
  )
}

export default OurVision