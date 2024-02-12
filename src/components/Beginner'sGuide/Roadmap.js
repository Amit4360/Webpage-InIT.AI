import React from 'react'
import BeginnerHead from '../../assets/BeginnersRoadmapHead.svg'
import box from "../../assets/BeginnerBox.svg";
import vertical from "../../assets/BeginnerVerticalLine.svg";


const Roadmap = () => {
    return (
        <div className=' pb-10 md:mb-40'>
            <div className='lg:grid lg:grid-cols-3 mb-28 ml-4 lg:ml-0'>
                <div className='col-span-2  text-2xl md:text-4xl m-auto font-bold'>
                    Here is a beginner's guide to AL and ML:
                </div>
                <div>
                    <img className='mx-auto pt-10 lg:mt-0' src={BeginnerHead} alt="" />
                </div>
            </div>

            <div>
                <div className='hidden md:grid grid-cols-3'>
                    <div className='md:ml-14 lg:ml-6 xl:ml-72'>
                        <div className='flex w-28 h-12 rounded-3xl bg-[#585BA8] text-white justify-center items-center '>Basics</div>
                        <div>
                            <img className='ml-14' src={vertical} alt="" />
                        </div>

                    </div>
                    <div className='md:ml-14 lg:ml-20 xl:ml-40'>
                        <div className='flex w-28 h-12 rounded-3xl bg-[#585BA8] text-white justify-center items-center '>DSA</div>
                        <img className="ml-14" src={vertical} alt="" />
                    </div>
                    <div className="md:ml-14 lg:ml-28 xl:ml-0">
                        <div className='flex w-28 h-12 rounded-3xl bg-[#585BA8] text-white justify-center items-center '>Practice</div>
                        <img className='ml-14' src={vertical} alt="" />
                    </div>
                </div>
                <img className="hidden md:block mx-auto" src={box} alt="" />
            </div>

            <div>
                <div className='hidden md:grid grid-cols-3'>
                    <div className='md:ml-4 lg:ml-44 xl:ml-96'>
                        <img className='ml-14' src={vertical} alt="" />
                        <div className='flex w-28 h-12 rounded-3xl bg-[#585BA8] text-white justify-center items-center '>Language</div>
                    </div>
                    <div className='md:ml-28 lg:ml-64'>

                        <img className='ml-14' src={vertical} alt="" />
                        <div className='flex w-28 h-12 rounded-3xl bg-[#585BA8] text-white justify-center items-center '>ML concepts</div>
                    </div>
                    <div className="md:ml-32 lg:ml-60 xl:ml-40">

                        <img className='ml-14' src={vertical} alt="" />
                        <div className='flex w-28 h-12 rounded-3xl bg-[#585BA8] text-white justify-center items-center '>Keep learning</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Roadmap
