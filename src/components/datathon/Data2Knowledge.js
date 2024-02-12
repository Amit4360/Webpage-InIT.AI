import React from 'react'
import Domain from './Domain'
import FAQs from './FAQs'
import Guidelines from './Guidelines'
import Landing from './Landing'
import Sponsor from './Sponsor'
import Timeline from './Timeline'
import ProblemStatements from './ProblemStatements'


const Data2Knowledge = () => {
  return (
    <div className='bg-black text-["Montserrat"] md:pb-10'>
        <Landing/>
        <Domain/>
        <ProblemStatements/>
        <Timeline />
        <Guidelines/>
        <Sponsor/>
        <FAQs/>
      
    </div>
  )
}

export default Data2Knowledge
