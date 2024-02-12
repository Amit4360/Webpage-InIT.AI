import React from "react";
import circle from "../../assets/Circle.svg";
import greenline from "../../assets/greenLine.svg";
import short_horizontal from "../../assets/short_horizontal.svg";
import small_circle from "../../assets/small_circle.svg";
import long_horizontal from "../../assets/long_horizontal.svg";
import LiveWave from "./LiveWave";

const Roadmap = () => {
  return (
    <div className="bg-gradient-to-b from-[#cee3fc] to-[#edf5fe]">
      <div>
        <LiveWave title={"LECTURE SERIES"} position={"right-12"} />
      </div>

      <div className="row grid lg:grid-cols-11">
        <div className="lg:col-span-5">
          
        </div>
        <div className="lg:col-span-1 lg:block hidden">
          <div className="row mt-8">
            <img src={circle} className="absolute" alt="" />
          </div>
          <div className="row">
            <img src={greenline} className="pl-5" alt="" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="row">
            <div className="lg:pl-0 pl-4">
            {/* <p className="text-3xl">13TH OCT</p> */}
            <p className="text-[#029090] mt-5 text-3xl">MOTIVATION</p>
            <p className="pe-2 mr-4 text-justify text-base mt-2 ">
            First, it allows the club to share its knowledge and passion for AI with the next generation of students. By introducing junior students to the field early on, the club hopes to inspire and encourage them to pursue their interests in AI and technology.
            </p>
            <p className="pe-2 mr-4 text-justify text-base mt-2 ">
            Second, the lectures provide an opportunity for junior students to learn about the latest developments and advancements in AI. This knowledge will be valuable for them as they begin to study the subject in more depth in their later years.
            </p>
            </div>
            <div className="lg:grid lg:grid-cols-3 hidden mt-8">
              <div className="col-span-2"></div>
              <div className="col-span-1 flex">
                <img src={short_horizontal} className="mt-2 object-right" alt="" />
                <img className="absolute" src={small_circle} alt="" />
                <img className="absolute ml-28" src={small_circle} alt="" />
                <img className="xl:absolute hidden ml-48" src={small_circle} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row grid lg:grid-cols-11 lg:mt-0 mt-8">
        <div className="col-span-5">
          <div className="row">
            {/* <p className="text-3xl text-right lg:pr-20 mr-4"></p> */}
            <p className="text-[#029090] mt-5 text-4xl text-right lg:pr-20 mr-4">INSPIRATION</p>
            <p className="pl-2 ml-4 text-justify text-base mt-4 lg:pr-20 mr-4">
            Third, the lectures also provide an opportunity for the junior students to network and connect with upperclassmen and industry professionals who are involved in the field of AI.This can help them gain valuable insights and advice as they continue to pursue their interests in the field.

            </p>
            <p className="pl-2 ml-4 text-justify text-base mt-4 lg:pr-20 mr-4">
            Fourth, the lectures help junior students to develop their problem-solving skills, creativity and critical thinking by providing them with hands-on experience and exposure to real-world AI projects.
            </p>
            <div className="lg:grid lg:grid-cols-2 hidden mt-8">
              <div className="col-span-1 flex">
                <img src={short_horizontal} className="mt-2" alt="" />
                <img className="absolute ml-28" src={small_circle} alt="" />
                <img className="absolute ml-60" src={small_circle} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 lg:block hidden">
          <div className="row">
            <img src={circle} className="absolute" alt="" />
          </div>
          <div className="row">
            <img src={greenline} className="pl-5 mt-9" alt="" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="col-span-2"></div>
          <div className="lg:col-span-3 hidden lg:flex object-right">
            <img src={long_horizontal} className="mt-2 ml-[210px]" alt="" />
            <img className="absolute ml-48" src={small_circle} alt="" />
            <img className="absolute ml-80" src={small_circle} alt="" />
            <img className="absolute ml-[420px]" src={small_circle} alt="" />
            <img className="xl:absolute hidden ml-48 xl:ml-[590px]" src={small_circle} alt="" />
          </div>
        </div>
      </div>

      <div className="row grid lg:grid-cols-11 lg:mt-0 mt-8">
        <div className="col-span-5">
        <div className="grid grid-cols-3 mt-16">
              <div className="col-span-2 lg:flex hidden">
                <img src={long_horizontal} className="mt-2 mr-12" alt="" />
                <img className="absolute " src={small_circle} alt="" />
                <img className="absolute ml-32" src={small_circle} alt="" />
                <img className="absolute ml-72" src={small_circle} alt="" />
                <img className="absolute ml-[450px]" src={small_circle} alt="" />
              </div>
            </div>
        </div>
        <div className="lg:col-span-1 lg:block hidden">
          <div className="row">
            <img src={circle} className="absolute" alt="" />
          </div>
          <div className="row">
            <img src={greenline} className="pl-5" alt="" />
          </div>
        </div>
        <div className="col-span-5">
          <div className="row">
            <div className="lg:pl-0 pl-4">
            <p className="text-3xl">INTRODUCTION TO PYTHON</p>
            <p className="text-[#029090] mt-5 text-4xl">INTRO,OPPS AND PYTHON LIBRARIES</p>
            <p className="pe-2 mr-4 text-sm text-justify mt-2">
            Python is a popular programming language that supports object-oriented programming (OOP) paradigm. OOP is a programming approach that emphasizes the use of objects, which are instances of classes that encapsulate data and behaviors. Libraries such as NumPy, Pandas, Matplotlib and Seaborn.
            </p>
            </div>
            
            <div className="lg:grid hidden lg:grid-cols-3 mt-8">
              <div className="col-span-2"></div>
              <div className="col-span-1 flex">
                <img src={short_horizontal} className="mt-2 object-right" alt="" />
                <img className="absolute" src={small_circle} alt="" />
                <img className="absolute ml-28" src={small_circle} alt="" />
                <img className="xl:absolute hidden ml-48" src={small_circle} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row grid lg:grid-cols-11 lg:mt-0 mt-8 lg:pb-0 pb-8">
      <div className="col-span-5">
          <div className="row">
            <p className="text-3xl text-right lg:pr-20 mr-4">DATA ANALYSIS I & II </p>
            <p className="text-[#029090] mt-5 text-4xl text-right lg:pr-20 mr-4">Excel and Tableau</p>
            <p className="pl-2 ml-4 text-justify text-base mt-4 lg:pr-20 mr-4">
            Data analysis is the process of examining and interpreting data to extract insights and draw conclusions. It involves collecting, cleaning, organizing, and transforming data to make it useful for decision-making.
            <p className=" text-justify text-base mt-4 ">Excel and Tableau are software tools that can be used for data analysis. Excel is a spreadsheet program that allows users to manipulate and analyze data using formulas and functions. It is widely used for financial analysis, budgeting, and forecasting. </p>
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 lg:block hidden">
          <div className="row">
            <img src={circle} className="absolute" alt="" />
          </div>
          <div className="row">
            <img src={greenline} className="pl-5" alt="" />
          </div>
        </div>
        <div className="col-span-5">
          <div className="col-span-2"></div>
          <div className="col-span-3 mt-24 lg:flex hidden object-right">
            <img src={long_horizontal} className="mt-2 ml-[210px]" alt="" />
            <img className="absolute ml-48" src={small_circle} alt="" />
            <img className="absolute ml-80" src={small_circle} alt="" />
            <img className="absolute ml-[400px]" src={small_circle} alt="" />
            <img className="xl:absolute hidden ml-48 xl:ml-[590px]" src={small_circle} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Roadmap;
