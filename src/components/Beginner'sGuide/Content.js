import React from 'react'
import contentImg from "../../assets/BeginnersGuidecontent.svg"

function Content() {
    return (
        <div>

            <div className=' grid gird-cols-1 mb-14 md:grid md:grid-cols-2 md:mb-36 '>
                <div className='text-2xl md:text-4xl mx-2 md:m-auto font-bold'>
                    <div className='my-3'>
                        Introduction to
                    </div>
                    <div className='my-3'>
                        Artificial Intelligence
                    </div>
                    <div className='my-3'>
                        and
                    </div>
                    <div className='my-3'>
                        Machine Learning:
                    </div>
                </div>
                <div>
                    <img src={contentImg} alt="" />
                </div>
            </div>

            <div className="px-4 md:px-20 lg:px-52 text-lg md:text-2xl mb-16 text-justify">
                Artificial Intelligence (AI) refers to the ability of machines to perform tasks that would typically require human intelligence to complete, such as speech recognition, image  classification, and decision making. Machine learning (ML) is a subfield of AI that focuses on the development of algorithms and statistical models that enable computers to improve their performance on a task over time, without being explicitly programmed.
            </div>
        </div>
    )
}

export default Content
