import React, { useState, useEffect } from "react";


import { Link } from "react-router-dom";
import logo from "../../assets/InitLogo.svg";
import whitelinkedin from "../../assets/LinkedInWhite.svg";
import whiteinsta from "../../assets/InstaWhite.svg";
import { EnvelopeAtFill, Linkedin, Instagram } from "react-bootstrap-icons";
import whiteglobe from "../../assets/GlobeWhite.svg";
import sublist from "../../assets/sublist.svg";
import line from "../../assets/Line.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const emailclick = () => {
    window.location.href = "mailto:djsceinit.ai17@gmail.com";
  };

  const instaclick = () => {
    window.location.href = "https://www.instagram.com/djinit.ai";
  };

  const linkedinclick = () => {
    window.location.href =
      "https://www.linkedin.com/company/init-ai/mycompany/";
  };

  return (
    <footer className="footer text-white h-screen w-screen flex flex-wrap  justify-center md:justify-evenly items-center ">
      {/* <div className="items-start"></div> */}
      
      <div className="md:h-[40%]">
        <div className="text-white text-center  mb-5 md:mb-10  text-md md:text-2xl font-semibold">
          About Us
        </div>

        <div className="">
          <img
            src={logo}
            className="mx-auto h-[100px] w-[100px] md:h-[150px] md:w-[150px]"
            alt="Company Logo"
          />
        </div>
      </div>

      <div className="md:h-[40%] ">
        <div className="text-white text-center mb-5 md:mb-10 text-md md:text-2xl font-semibold">
          Location
        </div>

        <div className=" w-[400px] text-center text-sm md:text-lg px-10 md:px-0">
          Dwarkadas J. Sanghvi College of Engineering No. U, 15, Bhaktivedanta
          Swami Rd, opp. Cooper Hospital, Navpada, JVPD Scheme, Vile Parle,
          Mumbai, Maharashtra 400056
        </div>
      </div>

      <div className="md:h-[40%]">
        <div className="text-white text-center mb-5 md:mb-10 text-md md:text-2xl font-semibold">
          Get In Touch
        </div>

        <div className=" flex flex-col md:gap-5 gap-3 items-center">
          <div className="">
            <EnvelopeAtFill
              className="h-[25px] w-[25px] md:h-[35px] md:w-[35px]"
              onClick={emailclick}
            />
          </div>
          <div className="">
            <Linkedin
              className="h-[25px] w-[25px] md:h-[35px] md:w-[35px]"
              onClick={linkedinclick}
            />
          </div>
          <div className="">
            <Instagram
              className="h-[25px] w-[25px] md:h-[35px] md:w-[35px]"
              onClick={instaclick}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
