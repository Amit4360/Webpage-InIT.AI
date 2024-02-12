import React from "react";
import Faqicon from "../../assets/Faqicon.svg";
import RedVertical from "../../assets/RedVertical.svg";
import WhiteVertical from "../../assets/WhiteVertical.svg";

const FAQs = () => {
  return (
    <div className="mx-auto bg-black font-['Montserrat'] md:mt-20 mt-10">
      <div className="row">
        <img className="md:ml-auto md:mr-32 ml-auto md:h-full h-7" src={RedVertical} alt="" />
      </div>
      <div className="text-white text-center mb-2 md:mb-20 md:text-5xl text-2xl">
        Frequently asked Questions
      </div>
      <div className="text-white text-center mb-2 md:mb-20 md:text-2xl text-base">
        Can't find the answers to what you are looking for?{" "}
        <span className="text-[#FF8A50] ">Reach out to our Team</span>
      </div>

      <div class="row md:mx-auto px-2 md:px-32">
        <div class="p-8 rounded overflow-hidden">
          <hr className="my-3" />
          <div class="group outline-none accordion-section" tabindex="1">
            <div class="group bg-black flex justify-between px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-white md:text-xl text-base transition ease duration-500">
                What is a Hackathon?
              </div>
              <div class="h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <img src={Faqicon} alt="" />
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2 text-[#ffffff99] text-justify md:text-lg text-base">
                A hackathon is an event where people engage in rapid and
                collaborative engineering over a relatively short period of time
                such as 24 or 48 hours.
              </p>
            </div>
          </div>
          <hr className="my-3" />
          <div class="group outline-none accordion-section" tabindex="2">
            <div class="group bg-black flex justify-between px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-white md:text-xl text-base transition ease duration-500">
                What should be my preparation for a hackathon?
              </div>
              <div class="h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <img src={Faqicon} alt="" />
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2 text-[#ffffff99] text-justify md:text-lg text-base">
                Familiarize yourself with the theme or problem statement of the
                hackathon and any rules or guidelines provided by the
                organizers. Form a team or find potential teammates to work
                with. 
              </p>
            </div>
          </div>
          <hr className="my-3" />
          <div class="group outline-none accordion-section" tabindex="3">
            <div class="group bg-black flex justify-between px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-white md:text-xl text-base transition ease duration-500">
                What will be provided during the hackathon?
              </div>
              <div class="h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <img src={Faqicon} alt="" />
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2 text-[#ffffff99] text-justify md:text-lg text-base">
                A workspace: This could be a physical location or a virtual
                platform where you can work on your project. Internet access:
                You'll need internet access to research, collaborate, and
                potentially showcase your project.
              </p>
            </div>
          </div>
          <hr className="my-3" />
          <div class="group outline-none accordion-section" tabindex="4">
            <div class="group bg-black flex justify-between px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-white md:text-xl text-base transition ease duration-500">
                How do I form a team?
              </div>
              <div class="h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <img src={Faqicon} alt="" />
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2 text-[#ffffff99] text-justify md:text-lg text-base">
                Each team would comprise of 2-4 members including the team
                leader. All team members should be from same college; no
                inter-college teams are allowed. However, members from different
                branches of the same college/ institute can form a team.
              </p>
            </div>
          </div>
          <hr className="my-3" />
          <div class="group outline-none accordion-section" tabindex="5">
            <div class="group bg-black flex justify-between px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
              <div class="group-focus:text-white md:text-xl text-base transition ease duration-500">
                What should I bring?
              </div>
              <div class="h-8 w-8 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                <img src={Faqicon} alt="" />
              </div>
            </div>
            <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
              <p class="p-2 text-[#ffffff99] text-justify md:text-lg text-base">
                Your laptop: Make sure your laptop is fully charged and that you
                bring the charger. Any necessary peripherals: This could include
                a mouse, keyboard, or other accessories that you prefer to use
                while coding. Any necessary software: Make sure you have any
                necessary software installed before the hackathon.
              </p>
            </div>
          </div>
          <hr className="my-3" />
        </div>
      </div>

      <div className="row">
        <img className="md:mr-96 mx-auto" src={WhiteVertical} alt="" />
      </div>
      <div className="row">
          <img className="md:ml-10 mt-2 md:mt-12 md:h-full h-7" src={RedVertical} alt="" />
        </div>


    </div>
  );
};

export default FAQs;
