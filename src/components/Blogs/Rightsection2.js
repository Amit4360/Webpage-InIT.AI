import React from "react";
import Searchbar from "./Searchbar";
import Ellipse from "../../assets/Ellipse 412.svg"
import Profile from "../../assets/Profile.svg";

const Rightsection2 = () => {
  return (
    <div className="border-[1.5px] border-black h-full">
        <div className="ml-[24px]">
            <div className="mt-20">
                <img src={Ellipse} alt="" srcset="" />
            </div>

            <div className="font-bold text-[15px] mt-8">
                Machine Training / NLP
            </div>

            <div className="mt-4">
                <p className="text-[12px] font-bold">15 Articles</p>
                <p className="text-[12px] mt-2">BIO: lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <div className="mt-16">
                    <div className=""><Searchbar /></div>
                    <div className="text-[#029090] mt-16 font-bold">
                        More from the author
                    </div>
          
                    <div className="row flex mt-4">
                        <img src={Profile} alt="" />
                        <span className="pl-2 text-sm">Vraj Desai <span className="text-[#757575] ">in</span>  Tensorflow </span>
                    </div>
                    <p className="text-[15px] py-1">A proficient tester of ML models, checking for iverfitting and underfitting</p>
                </div>

                <div className="my-4">
                    <div className="row flex">
                        <img src={Profile} alt="" />
                        <span className="pl-2 text-sm">Vraj Desai <span className="text-[#757575] ">in</span>  Tensorflow </span>
                    </div>
                    <p className="text-[15px] py-1">A proficient tester of ML models, checking for iverfitting and underfitting</p>
                </div>

                <div className="my-4">
                    <div className="row flex">
                        <img src={Profile} alt="" />
                        <span className="pl-2 text-sm">Vraj Desai <span className="text-[#757575] ">in</span>  Tensorflow </span>
                    </div>
                    <p className="text-[15px] py-1">A proficient tester of ML models, checking for iverfitting and underfitting</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Rightsection2;