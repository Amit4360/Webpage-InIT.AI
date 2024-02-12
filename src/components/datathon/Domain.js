import React from "react";
import RedVertical from "../../assets/RedVertical.svg";
import WhiteVertical from "../../assets/WhiteVertical.svg";
import Domain1 from "../../assets/Domain1.svg";

const Domain = () => {
  return (
    <div className="bg-black py-20 font-['Montserrat']">
      <div className="row">
        <div className="row">
          <img className="md:ml-96 mx-auto" src={WhiteVertical} alt="" />
        </div>
        <div className="row">
          <img className="md:ml-auto md:mr-32 ml-auto md:h-full h-7" src={RedVertical} alt="" />
        </div>
        <div className="text-white text-center mb-2 md:mb-20 md:text-5xl text-2xl">Domain</div>
        <div className="row">
          <div className="grid grid-cols-1 md:grid-cols-4 md:mx-40 md:gap-12">
            <div className="col-span-1 my-2 rounded-lg bg-[#C5010A] mx-2">
              <img className="mx-auto mt-4 md:h-20 h-12" src={Domain1} alt="" />
              <p className="text-white text-center py-3 font-medium">
                AI/ML
              </p>
            </div>
            <div className="col-span-1 my-2 rounded-lg bg-[#C5010A] mx-2">
              <img className="mx-auto mt-4 md:h-20 h-12" src={Domain1} alt="" />
              <p className="text-white text-center py-3 font-medium">
                Data Science
              </p>
            </div>
            <div className="col-span-1 my-2 rounded-lg bg-[#C5010A] mx-2">
              <img className="mx-auto mt-4 md:h-20 h-12" src={Domain1} alt="" />
              <p className="text-white text-center py-3 font-medium">
                Data Analytics
              </p>
            </div>
            <div className="col-span-1 my-2 rounded-lg bg-[#C5010A] mx-2">
              <img className="mx-auto mt-4 md:h-20 h-12" src={Domain1} alt="" />
              <p className="text-white text-center py-3 font-medium">
                Business Insight
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domain;
