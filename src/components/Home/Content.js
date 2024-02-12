import React from 'react'
import weAreINIT from '../../assets/weAreInit.svg'

const Content = () => {
  return (
    <div className='overflow-hidden'>
      <div className="row grid lg:grid-cols-10 object-center">
        <div className="lg:col-span-6 lg:mt-28 lg:px-16 m-8 p-2 font-['Montserrat'] ">
            <p className='sm:text-[46px] text-2xl font-light lg:text-left text-center'>We Are</p>
            <p className='text-[#C71A03] sm:text-5xl text-2xl font-bold lg:text-left text-center'>DJ InIT<span className='text-[#4051A3] font-bold'>.AI</span></p>
            <p className='lg:mt-12 sm:text-2xl text-lg font-light mt-2 text-justify'>InIT.AI is the AI club of the Information Technology Department at Dwarkakdas J Sanghvi College of Engineering. It was founded in  2017 with a mission to educate, inspire and help the students to explore the field of Artificial Intelligence. This club aims to educate group members about the terms and concepts related to various sub-fields of AI with the purpose of increasing awareness about past, current and potential future research directions. </p>
        </div>
        <div className="col-span-4 mx-auto">
           <img src={weAreINIT} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Content