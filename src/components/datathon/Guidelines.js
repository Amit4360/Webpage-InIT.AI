import React from 'react'
import GuideCard from './GuideCard'
import RedVertical from '../../assets/RedVertical.svg'

const Guidelines = () => {
  return (
    <div className=" font-['Montserrat']">
        <div className="row">
          <img className="md:ml-10 mt-2 md:mt-12 md:h-full h-7" src={RedVertical} alt="" />
        </div>
        <div className="text-white text-center mb-2 md:mb-20 md:text-5xl text-2xl">Guidelines</div>
        <div className="grid col-span-1 md:grid-cols-3 gap-8">
            <GuideCard number="01" content="The complete team should be present at the event venue by 7:30 am." />
            <GuideCard number="02" content="Each participant must bring a valid government-issued card and/or college ID." />
            <GuideCard number="03" content="Conducting oneself in a responsible manner is paramount. Participants will have to pay for any damage to belongings within the college campus." />
            <GuideCard number="04" content="Problem statements and Datasets will be provided at the time of Datathon." />
            <GuideCard number="05" content="No plagiarism/copy-paste will be entertained; if found, it will lead to direct disqualification from the Datathon." />
            <GuideCard number="06" content="Teams can be disqualified from the competition at the organizers' discretion. Reasons might include but are not limited to breaking the Competition Rules, the Code of Conduct, or other unsporting behaviour." />
            <GuideCard number="07" content="Be Respectful towards fellow participants and ensure that you maintain a safe and inclusive environment for everyone." />
            <GuideCard number="08" content="Participants are to carry their own laptop devices and chargers along with any extension cables if required ." />
            <GuideCard number="09" content="Participants will be provided with light snacks but not lunch, hence we recommended carrying your own lunch." />
        </div>
      
    </div>
  )
}

export default Guidelines
