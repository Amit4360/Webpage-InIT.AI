import React from 'react'
import rect from "../../assets/Rectangle 25.svg"
import vector from "../../assets/Arrow.svg"

const OurProjects = () => {
    return (

        <div className='bg-gradient-to-b from-[#cee3fc] to-[#edf5fe]'>
            <p className='text-[#C71A03] text-[40px] font-["Montserrat"] font-bold text-center'>Our Projects</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-3 justify-items-center mt-10'>
                <div className="py-10 w-72 ">
                    <div className="rounded-lg overflow-hidden shadow-lg shadow-gray-600 max-w-sm bg-white">
                        <img src={rect} alt="" className='w-full px-2' />
                        <div className="px-6 py-4">
                            <div className=''>
                                PROJECT_1
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur minus optio, eius officia mollitia quod eveniet at atque expedita!
                            </p>
                            <div className='pt-3 pb-3 flex'>
                                <span className='text-[#2566FF] p-2'>
                                    <a href='#'>Know More</a>
                                </span>
                                <img src={vector} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-10 w-72 ">
                    <div className="rounded-lg overflow-hidden shadow-lg shadow-gray-600 max-w-sm  bg-white">
                        <img src={rect} alt="" className='w-full px-2' />
                        <div className="px-6 py-4">
                            <div>
                                PROJECT_1
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur minus optio, eius officia mollitia quod eveniet at atque expedita!
                            </p>
                            <div className='pt-3 pb-3 flex'>
                                <span className='text-[#2566FF] p-2'>
                                    <a href='#'>Know More</a>
                                </span>
                                <img src={vector} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-10 w-72 ">
                    <div className="rounded-lg overflow-hidden shadow-lg shadow-gray-600 max-w-sm  bg-white">
                        <img src={rect} alt="" className='w-full px-2' />
                        <div className="px-6 py-4">
                            <div>
                                PROJECT_1
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur minus optio, eius officia mollitia quod eveniet at atque expedita!
                            </p>
                            <div className='pt-3 pb-3 flex'>
                                <span className='text-[#2566FF] p-2'>
                                    <a href='#'>Know More</a>
                                </span>
                                <img src={vector} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-10 w-72 ">
                    <div className="rounded-lg overflow-hidden shadow-lg shadow-gray-600 max-w-sm bg-white">
                        <img src={rect} alt="" className='w-full px-2' />
                        <div className="px-6 py-4">
                            <div>
                                PROJECT_1
                            </div>
                            <p >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur minus optio, eius officia mollitia quod eveniet at atque expedita!
                            </p>
                            <div className='pt-3 pb-3 flex'>
                                <span className='text-[#2566FF] p-2'>
                                    <a href='#'>Know More</a>
                                </span>
                                <img src={vector} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className='mt-5 pb-5'>
                <p className='text-[24px] text-[#7C7C7C] text-center '>
                    Authoritatively underwhelm excellent methodologies via premium expertise competitive<br /> than open-source imperatives disseminate.
                </p>
            </div>



        </div>




    )
}

export default OurProjects
