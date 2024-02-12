import React from 'react'

function Cards() {
    return (
        <div>
            <div className="row">
                <div className=' grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 mb-20'>
                    <div className='w-72 h-96 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-lg bg-[#ED1B24] mx-auto mb-6 '>
                        <div className=''>
                            <div className='text-[#FFFFFF] mb-8 mt-12 ml-16 text-xl md:text-2xl font-bold'>
                                <div className="">
                                    Start with the
                                </div>
                                <div className='ml-12'>
                                    basics:
                                </div>
                            </div>
                            <div className='text-[#FFFFFF] text-lg md:text-xl ml-12 mr-8 mb-8'>
                                Brush up on your mathematics skills, especially linear algebra and calculus, as they are fundamental to understanding AI and ML.
                            </div>
                        </div>
                    </div>

                    <div className='w-72 h-96 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-lg bg-[#FEB415] mx-auto mb-6'>
                        <div className='my-4'>
                            <div className='text-[#FFFFFF] mb-8 mt-12 ml-16 text-xl md:text-2xl font-bold'>
                                <div className="md:ml-12">
                                    Choose a
                                </div>
                                <div className='md:ml-6'>
                                    programming
                                </div>
                                <div className='md:ml-12'>
                                    language:
                                </div>
                            </div>
                            <div className='text-[#FFFFFF] text-lg md:text-xl ml-12 mr-8 mb-8'>

                                Python is one of the most popular programming languages used in the field of AI and ML, due to its simplicity and ease of use.
                            </div>
                        </div>
                    </div>
                    <div className='w-72 h-96 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-lg bg-[#6ABE45] mx-auto mb-6'>
                        <div className='my-4'>
                            <div className='text-[#FFFFFF] mb-8 mt-12 ml-16 text-xl md:text-2xl font-bold'>
                                <div className="">
                                    Learn about data
                                </div>
                                <div className='ml-2'>
                                    structures and
                                </div>
                                <div className='ml-4'>
                                    algorithms:
                                </div>
                            </div>
                            <div className='text-[#FFFFFF] text-lg md:text-xl ml-12 mr-8 mb-8'>

                                Familiarize yourself with basic data structures, such as arrays, lists, and trees, and algorithms, such as sorting and  searching algorithms.
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 mb-20'>
                    <div className='w-72 h-96 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-lg bg-[#663090] mx-auto mb-6'>
                        <div className='my-4'>
                            <div className='text-[#FFFFFF] mb-8 mt-12 ml-16 text-xl md:text-2xl font-bold'>
                                <div className="">
                                    Keep learning:
                                </div>
                            </div>
                            <div className='text-[#FFFFFF] text-lg md:text-xl ml-12 mr-8 mb-8'>

                                Stay up to date with the latest developments in the field of AI and ML by reading research papers and participating in online forums and communities..
                            </div>
                        </div>
                    </div>

                    <div className='w-72 h-96 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-lg bg-[#0873BB] mx-auto mb-6'>
                        <div className='my-4'>
                            <div className='text-[#FFFFFF] mb-8 mt-12 ml-16 text-xl md:text-2xl font-bold'>
                                <div className="ml-6">
                                    Practice on
                                </div>
                                <div className='ml-6'>
                                    real-world
                                </div>
                                <div className='ml-6'>
                                    problems:
                                </div>
                            </div>
                            <div className='text-[#FFFFFF] text-lg md:text-xl ml-12 mr-8 '>
                                Apply the concepts and techniques you have learned by working on real-world ML problems, such as image classification, natural language processing.
                            </div>
                        </div>
                    </div>
                    <div className='w-72 h-96 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-lg bg-[#00ADF1] mx-auto mb-6'>
                        <div className='my-4'>
                            <div className='text-[#FFFFFF] mb-8 mt-12 ml-16 text-xl md:text-2xl font-bold'>
                                <div className="ml-6">
                                    Get familiar
                                </div>
                                <div className='ml-8'>
                                    with ML
                                </div>
                                <div className='ml-6'>
                                    concepts:
                                </div>
                            </div>
                            <div className='text-[#FFFFFF] text-lg md:text-xl ml-12 mr-8 mb-8'>

                                Learn about different ML algorithms, including supervised and unsupervised learning, and understand the differences between regression and classification problems.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 md:px-20 lg:px-52 text-lg md:text-2xl pb-24">
                AI and ML are rapidly evolving fields, and there is a wealth of resources available online to help you learn and improve your skills. With dedication and hard work, you can become a proficient AI and ML developer and contribute to the advancement of these technologies.

            </div>
        </div>
    )
}

export default Cards
