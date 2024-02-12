import React from 'react'

const GuideCard = (props) => {
  return (
    <div>
        <div className="mx-8 md:mx-24 h-full bg-gradient-to-r from-[#34BDF3] to-[#34BDF3] p-1">
            <div className="bg-black h-full p-3 md:p-4">
            <div className="row mb-1 text-right text-transparent font-bold text-base md:text-4xl bg-clip-text bg-gradient-to-r from-[#34BDF3] to-[#34BDF3]">
                {props.number}
            </div>
            <div className="row text-left text-white text-base md:text-2xl">
                {props.content}
            </div>
            </div>
           
        </div>
      
    </div>
  )
}

export default GuideCard
