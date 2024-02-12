import React from 'react'
import sponsor1 from "../../assets/Sponsor1.svg"
import sponsor2 from "../../assets/Sponsor2.svg"
import sponsor3 from "../../assets/Sponsor3.svg"
import sponsor4 from "../../assets/Sponsor4.svg"

function Sponsor() {
    return (

        <div className='bg-black mt-10 md:mt-20'>
            <div className='text-white text-center mb-10 md:mb-20 md:text-5xl text-2xl'>Sponsor</div>
            <div className='grid grid-cols-1 md:grid-cols-2 '>
                <div className='mx-auto'>
                    <div className='row mb-16'>
                        <img className='w-72 h-32 md:h-44 md:w-full' src={sponsor4} alt="" />
                        <div className='text-white text-xl text-center mt-5' >Interview Buddy</div>
                    </div>

                    <div className="row mb-16">
                        <img className='mx-auto h-32 md:h-44' src={sponsor2} alt="" />
                        <p className='text-white text-xl text-center mt-5'> Textify.ai</p>
                    </div>
                </div>

                <div className='mx-auto'>
                    <div className="row mb-16">
                        <img className="w-72 h-32 md:h-44 md:w-full" src={sponsor3} alt="" />
                        <p className='text-white text-xl text-center mt-5'>OGGN Tech</p>
                    </div>

                    <div className="row mb-20 md:mb-0 ">
                        <img className='md:w-96 w-72 mx-auto h-32 md:h-44' src={sponsor1} alt="" />
                        <p className='text-white text-xl text-center mt-5'>Data Science Wizards</p>
                    </div>
                </div>

            </div>



        </div>


    )
}

export default Sponsor