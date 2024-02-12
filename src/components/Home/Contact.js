import React from 'react'
import mark from '../../assets/LocationMark.svg'
import vector from '../../assets/Vector.svg'
import linkedin from '../../assets/LinkedIn.svg'
import insta from '../../assets/Insta.svg'
import globe from '../../assets/Globe.svg'
import LiveWave from './LiveWave'
import { Link } from 'react-router-dom';

const Contact = () => {
  const mailto="djsceinit.ai17@gmail.com";
  return (
    <div className='bg-gradient-to-b from-[#cee3fc] to-[#edf5fe] pb-8'>
      <div className="mb-4">
        <LiveWave title={"CONTACT"} position={"left-12"} />
      </div>

      <div className="row grid grid-cols-12">
        <div className="col-span-12 lg:col-span-7">
        <div className="mapouter"><div className="gmap_canvas"><iframe className="lg:w-[550px] lg:h-[300px] gmap_iframe max-w-screen-lg mx-auto pb-10" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=550&amp;height=300&amp;hl=en&amp;q=Dwarkadas J Sanghvi co&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><Link to="https://formatjson.org/"></Link></div></div>

          <div className="row grid grid-cols-12 mt-2">
            <div className="col-span-3"></div>
            <div className="col-span-1">
              <img src={mark} alt="" />
            </div>
            <div className="col-span-5">
            <p className='text-sm font-["Montserrat"] '>No. U, 15, Bhaktivedanta Swami Rd, opp. Cooper Hospital, Navpada, JVPD Scheme, Vile Parle, Mumbai, Maharashtra 400056</p>
            </div>
            <div className="col-span-3"></div>

          </div>

          
        </div>

        <div className="col-span-12 font-['Montserrat'] lg:col-span-5 lg:mt-0 mt-8">
            <div className="row text-center lg:text-left">
              <p className='text-3xl text-[#029090] mb-3'>For Companies</p>
              <p className='text-base text-black my-3 mx-3'>Interested in being part of Init. AI ? Join us</p>
              <div className="mx-auto flex lg:justify-start justify-center">
                  <button className="bg-[#4051A3] w-[184px] flex text-white font-normal text-xl py-2 mt-5 mb-4 px-5 rounded">
                    Join Us
                    <img src={vector} className="align-middle pl-5 my-auto" alt="" />
                  </button>
              </div>
              

              <p className='text-3xl text-[#029090] py-3'>Contact Us</p>
              <p className='text-lg text-black py-1 '>djsceinit.ai17@gmail.com</p>

              <div className="row flex lg:justify-start justify-center pt-8">
                <div className="pr-4">
                  <Link to="https://www.linkedin.com/company/init-ai/mycompany/" target="_blank"><img src={linkedin} alt="" /></Link>
                </div>
                <div className="px-4">
                  <Link to="https://www.instagram.com/djinit.ai/" target="_blank"><img src={insta} alt="" /></Link> 
                </div>
                {/* <div className="px-4">
                  <Link to=""><img src={globe} alt="" /></Link> 
                </div> */}

              </div>
            </div>

        </div>
        
      </div>
    </div>
  )
}


export default Contact

{/* <div className="row grid grid-cols-5 md:grid-cols-7 lg:grid-cols-12 pt-8">
<div className="col-span-1 lg:col-span-0"></div>
<div className="col-span-1">
  <Link to="https://www.linkedin.com/company/init-ai/mycompany/" target="_blank"><img src={linkedin} alt="" /></Link>
</div>
<div className="col-span-1">
  <Link to="https://www.instagram.com/djinit.ai/" target="_blank"><img src={insta} alt="" /></Link> 
</div>
<div className="col-span-1">
  <Link to=""><img src={globe} alt="" /></Link> 
</div>

</div> */}