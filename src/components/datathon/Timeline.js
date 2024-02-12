import React from "react";
import Redcircle from "../../assets/Redcircle.svg";
import WhiteVertical from "../../assets/WhiteVertical.svg";
import Hyphen from "../../assets/Hyphen.svg";

const Timeline = () => {
  return (
    <div className=" font-['Montserrat']">
        <div className="text-white font-['Montserrat'] text-center mb-2 md:mb-20 md:text-5xl text-2xl">Timeline</div>
      <div className="row">
        <div className="grid grid-cols-7 md:grid-cols-3">
            <div className="col-span-1 ml-auto">
              <div className="relative">
                <img className="md:h-full h-8 md:my-0 my-2" src={Redcircle} alt="" />
                <h2 className="absolute top-1 md:top-2 left-3 md:left-5 text-base md:text-2xl font-semibold md:font-bold text-white">1</h2>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 mx-2 md:mx-24 my-2">
                <div className="flex justify-between md:mx-0 mx-4">
                    <p className="text-white text-lg font-light md:text-2xl md:font-normal">4th Feb</p>
                    <img src={Hyphen} alt="" />
                </div>
            </div>
            <div className="col-span-3 md:col-span-1 my-2 mb-12">
                    <p className="text-white text-lg font-light md:text-2xl md:font-normal">Registration Begins</p>
            </div>

            <div className="col-span-1 ml-auto">
              <div className="relative">
                <img className="md:h-full h-8 md:my-0 my-2" src={Redcircle} alt="" />
                <h2 className="absolute top-1 md:top-2 left-3 md:left-5 text-base md:text-2xl font-semibold md:font-bold text-white">2</h2>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 mx-2 md:mx-24 my-2">
                <div className="flex justify-between md:mx-0 mx-4">
                    <p className="text-white text-lg font-light md:text-2xl md:font-normal">14th Feb</p>
                    <img src={Hyphen} alt="" />
                </div>
            </div>
            <div className="col-span-3 md:col-span-1 my-2 mb-12">
                    <p className="text-white text-lg font-light md:text-2xl md:font-normal">Registration Ends</p>
            </div>
            <div className="col-span-1 ml-auto">
              <div className="relative">
                <img className="md:h-full h-8 md:my-0 my-2" src={Redcircle} alt="" />
                <h2 className="absolute top-1 md:top-2 left-3 md:left-5 text-base md:text-2xl font-semibold md:font-bold text-white">3</h2>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 mx-2 md:mx-24 my-2">
                <div className="flex justify-between md:mx-0 mx-4">
                    <p className="text-white text-lg font-light md:text-2xl md:font-normal">15th Feb</p>
                    <img src={Hyphen} alt="" />
                </div>
            </div>
            <div className="col-span-3 md:col-span-1 my-2 mb-12">
                    <p className="text-white text-lg font-light md:text-2xl md:font-normal">Shortlisted Teams Out</p>
            </div>
            <div className="col-span-1 ml-auto">
              <div className="relative">
                <img className="md:h-full h-8 md:my-0 my-2" src={Redcircle} alt="" />
                <h2 className="absolute top-1 md:top-2 left-3 md:left-5 text-base md:text-2xl font-semibold md:font-bold text-white">4</h2>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 mx-2 md:mx-24 my-2">
                <div className="flex justify-between md:mx-0 mx-4">
                    <p className="text-white text-lg font-light md:text-2xl md:font-normal">16th Feb</p>
                    <img src={Hyphen} alt="" />
                </div>
            </div>
            <div className="col-span-3 md:col-span-1 my-2 mb-12">
                    <p className="text-white text-lg font-light md:text-2xl md:font-normal">Heist Day</p>
            </div>
            <div className="col-span-1 ml-auto">
              <div className="relative">
                <img className="md:h-full h-8 md:my-0 my-2" src={Redcircle} alt="" />
                <h2 className="absolute top-1 md:top-2 left-3 md:left-5 text-base md:text-2xl font-semibold md:font-bold text-white">5</h2>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 mx-2 md:mx-24 my-2">
                <div className="flex justify-between md:mx-0 mx-4">
                    <p className="text-white text-lg font-light md:text-2xl md:font-normal">16th Feb</p>
                    <img src={Hyphen} alt="" />
                </div>
            </div>
            <div className="col-span-3 md:col-span-1 my-2 mb-12">
                    <p className="text-white text-lg font-light md:text-2xl md:font-normal">Prize Distribution</p>
            </div>

        </div>


        <div className="row">
        <div className="row mt-20">
          <img className="mx-auto" src={WhiteVertical} alt="" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
