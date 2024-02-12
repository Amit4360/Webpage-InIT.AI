import React from "react";
import RedVertical from "../../assets/RedVertical.svg";
import WhiteVertical from "../../assets/WhiteVertical.svg";
import PSCard from "./ProbStat";
import PS3 from '../../assets/ps1 wealthy.pdf';
import PS2 from '../../assets/ps3.pdf';
import PS1 from '../../assets/ps2 Text summarization.pdf';

const ProblemStatements = () => {
    return (
        <div className="bg-black py-20 font-['Montserrat']">
            <div className="row mb-3">
                <div className="row">
                    <img className="md:ml-auto md:mr-32 ml-auto md:h-full h-7" src={RedVertical} alt="" />
                </div>
                <div className="text-white text-center mb-2 md:mb-20 md:text-5xl text-2xl">Problem Statement</div>
                {/* <div style={{color: 'red', textAlign: 'center'}}>Will be released soon...</div> */}
                <div className="row flex justify-center">                
                    <div className="grid grid-cols-1 md:grid-cols-3 md:mx-40 md:gap-12 text-center">                        
                        <div className="col-span-1 my-2 rounded-lg mx-2">
                            <PSCard pdfObj={PS1} title="Text Summarization of research paper" content="How effectively can you summarize the contents of the research papers/articles submitted within healthcare domain?" img="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*WIU4_hSjsoQ7L8BTlIqxsA.jpeg"></PSCard>
                        </div>
                        <div className="col-span-1 my-2 rounded-lg mx-2">
                            <PSCard pdfObj={PS2} title="Motivate data science learners" content="Extract quotes and authors of the quotes every week for next few months. Also, generate data science problems." img="https://miro.medium.com/max/894/1*g_PeSLDdU_mRb5nWZFHp2A.jpeg"></PSCard>
                        </div>
                        <div className="col-span-1 my-2 rounded-lg mx-2">
                            <PSCard pdfObj={PS3} title="Can you make me wealthy?" content="You are wealthy capitalist in the year 2011, you have 100 Crores INR and you want to multiply it in next 10 years." img="https://themoneycog.com/wp-content/uploads/2022/02/coins-stack-leaf-with-line-graph-business-connect-white-background-saving-ideas-investment-budget-business-saving-money-concept-save-money-prepare-future.jpg"></PSCard>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row">
                <div className="row mt-8 md:mt-20">
                    <img className="mx-auto" src={WhiteVertical} alt="" />
                </div>
            </div>

        </div>
    );
};

export default ProblemStatements;
