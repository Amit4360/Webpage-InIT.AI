import React from "react";
import Searchbar from "./Searchbar";
import Profile from "../../assets/Profile.svg";

const Rightsection = () => {
  return (
    <div>
      <div className="flex mt-6 mb-9 justify-center">
        <Searchbar />
      </div>

      <div className="text-[#029090] my-4 text-center text-base font-bold">
        2022 Calendar Recap
      </div>

      <div className="pl-10">
        <p className="text-base font-bold">NOVEMBER</p>
        <div className="my-4">
          <div className="row flex">
            <img src={Profile} alt="" />
            <span className="pl-4 text-sm">Vraj Desai <span className="text-[#757575] ">in</span>  Tensorflow </span>
          </div>
          <p className="text-[15px] py-1">A proficient tester of ML models, checking for iverfitting and underfitting</p>
        </div>

        <div className="my-4">
          <div className="row flex">
            <img src={Profile} alt="" />
            <span className="pl-4 text-sm">Vraj Desai <span className="text-[#757575] ">in</span>  Tensorflow </span>
          </div>
          <p className="text-[15px] py-1">A proficient tester of ML models, checking for iverfitting and underfitting</p>
        </div>

        <div className="my-4">
          <div className="row flex">
            <img src={Profile} alt="" />
            <span className="pl-4 text-sm">Vraj Desai <span className="text-[#757575] ">in</span>  Tensorflow </span>
          </div>
          <p className="text-[15px] py-1">A proficient tester of ML models, checking for iverfitting and underfitting</p>
        </div>

        <p className="text-base font-bold">OCTOBER</p>
        <div className="my-4">
          <div className="row flex">
            <img src={Profile} alt="" />
            <span className="pl-4 text-sm">Vraj Desai <span className="text-[#757575] ">in</span>  Tensorflow </span>
          </div>
          <p className="text-[15px] py-1">A proficient tester of ML models, checking for iverfitting and underfitting</p>
        </div>

        <div className="my-4">
          <div className="row flex">
            <img src={Profile} alt="" />
            <span className="pl-4 text-sm">Vraj Desai <span className="text-[#757575] ">in</span>  Tensorflow </span>
          </div>
          <p className="text-[15px] py-1">A proficient tester of ML models, checking for iverfitting and underfitting</p>
        </div>

        <div className="my-4">
          <div className="row flex">
            <img src={Profile} alt="" />
            <span className="pl-4 text-sm">Vraj Desai <span className="text-[#757575] ">in</span>  Tensorflow </span>
          </div>
          <p className="text-[15px] py-1">A proficient tester of ML models, checking for iverfitting and underfitting</p>
        </div>

      </div>
    </div>
  );
};

export default Rightsection;
