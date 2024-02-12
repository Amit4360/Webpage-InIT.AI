import React from 'react'
import Sidebar from '../Blogs/Sidebar'
import main from "../../assets/SingleProjectMainimg.svg"
import insta from "../../assets/Insta.svg"
import linkedIn from "../../assets/LinkedIn.svg"
import globe from "../../assets/Globe.svg"
import funnybunny from "../../assets/FunnyBunny.svg"
const Main = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-12 grid-cols-1">
                <div className="bg-white lg:col-span-1 hidden lg:block">
                    <Sidebar />
                </div>

                <div className='col-span-8'>
                    <div className='row'>
                        <img className='mx-auto mb-10 mt-10' src={main} alt="" />
                    </div>
                    <div className='row'>

                        <div className='grid md:grid-cols-8 grid-cols-1 mb-10'>
                            <div className='col-span-4 mx-auto lg:px-24 px-4'>
                                <div className='text-[#37489B] my-4 font-bold text-xl text-center'>Description</div>
                                <div className='mx-auto text-justify'>
                                    lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ips lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem</div>
                            </div>
                            <div className='col-span-4 mx-auto lg:px-24 px-4'>
                                <div className='text-[#37489B] my-4 font-bold text-xl text-center'>Challengs/Process</div>
                                <div className='mx-auto text-justify'>
                                    lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem ipsum lorem ipsum lorem ips lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum  lorem ipsum  lorem ipsum  lorem</div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='col-span-3'>
                    <div className="row">
                        <div className=' bg-gradient-to-r from-[#CCE2FC] to-[#CCE2FC] mt-10 h-72 rounded-xl lg:mr-5 mx-3'>
                            <div className='border-[#37489B] border-4 text-[#37489B] text-center text-xl p-2 font-bold mb-5 mx-2 rounded-xl '>
                                Tech Stack
                            </div>
                            <div className='p-5 '>
                                <div className='mb-3 font-normal '>
                                    HTML
                                </div>
                                <hr className="" style={{ border: "1px solid black" }} />
                                <div className='mb-3 font-normal'>
                                    CSS
                                </div>
                                <hr className="" style={{ border: "1px solid black" }} />
                                <div className='mb-3 font-normal'>
                                    React
                                </div>
                                <hr className="" style={{ border: "1px solid black" }} />
                                <div className='mb-3 font-normal'>
                                    Tensorflow
                                </div>
                                <hr className="" style={{ border: "1px solid black" }} />
                                <div className='mb-3 font-normal'>
                                    Streamlitt
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className='mt-5'>
                            <div className='text-center text-xl p-2 font-bold mb-5 text-[#37489B]'>
                                Share this project
                            </div>
                            <div className='flex '>
                                <div className='grid grid-cols-3 m-auto h-14 '>
                                    {/* <div>
                                        <img className='w-20' src={github} alt="" />
                                    </div> */}
                                    <div className=''>
                                        <img className='w-10 mx-5' src={insta} alt="" />
                                    </div>
                                    <div>
                                        <img className='w-10 mx-5' src={linkedIn} alt="" />
                                    </div>
                                    <div>
                                        <img className='w-10 mx-5' src={globe} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="row mb-10">
                        <div className=' bg-gradient-to-r from-[#CCE2FC] to-[#CCE2FC] mt-10  rounded-xl lg:mr-5 mx-3'>
                            <div className='text-xl p-2 font-bold mb-5 '>
                                Contributors:
                            </div>
                            <div className='p-5 '>
                                <div className='mb-3 font-normal flex'>
                                    <img src={funnybunny} alt="" />
                                    <span className='my-auto pl-5 text-xl font-bold'>Name1</span>
                                </div>
                                <hr className="" style={{ border: "1px solid black" }} />
                                <div className='my-3 font-normal flex'>
                                    <img src={funnybunny} alt="" />
                                    <span className='my-auto pl-5 text-xl font-bold'>Name1</span>
                                </div>
                                <hr className="" style={{ border: "1px solid black" }} />
                                <div className='my-3 font-normal flex'>
                                    <img src={funnybunny} alt="" />
                                    <span className='my-auto pl-5 text-xl font-bold'>Name1</span>
                                </div>
                                <hr className="" style={{ border: "1px solid black" }} />
                                <div className='my-3 font-normal flex'>
                                    <img src={funnybunny} alt="" />
                                    <span className='my-auto pl-5 text-xl font-bold'>Name1</span>
                                </div>
                                <hr className="" style={{ border: "1px solid black" }} />


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Main
