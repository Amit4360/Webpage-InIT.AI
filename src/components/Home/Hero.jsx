import React from "react";
import { useNavigate } from "react-router-dom";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Hero = () => {
  const navigate = useNavigate();
  const [isSecondTypewriterStarted, setIsSecondTypewriterStarted] =
    React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSecondTypewriterStarted(true);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const aboutus = () => {
    navigate("/about");
  };

  const options = {
    particles: {
      number: {
        // value: 48,
        value: 60,
        density: {
          snable: false,
          // enable: true,
          // area: 800,
        },
      },
      color: {
        // value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
        value: "fff",
      },
      shape: {
        type: "circle",
      },
      // opacity: {
      //   value: 0.9,
      // },
      opacity: {
        value: 0.9,
        random: true, // Enable random opacity for twinkling effect
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 0.8, max: 2.5 },
      },
      blur: {
        value: 0,
      },
      links: {
        enable: false,
        distance: 125,
        // color:'808080',
        color: "#fff",
        opacity: 0.7,
        width: 1,
      },
      move: {
        enable: false,
        speed: 0.8,
        direction: "random",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
        onClick: {
          enable: false,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 500,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 5,
        },
        push: {
          quantity: 1,
          size: 1.5,
        },
      },
    },
  };
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <>
      <div className="hero flex flex-col justify-center h-center text-center items-center ">
      
        <Particles
          options={options}
          init={particlesInit}
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: "-100",
            // filter: "blur(2.5px)"
          }}
        />
        <h1 className=" tagline text-md font-semibold mb-5 mt-20 md:text-4xl">
          "Unleashing the Power of AI Together"
        </h1>

        <h1 className=" md:text-8xl text-6xl font-semibold gradient">We are DJ InIT.AI</h1>
        <h1 className="  md:text-md  text-sm font-bold subtext mt-10 md:mx-0 mx-5">
          The Official AI club of the IT Department of DJ Sanghvi College of
          Engineering. Founded with a mission to educate, inspire <br></br> and
          help students to explore the field of Artificial Intelligence.
        </h1>
        <br />
        <br />
        <button
          onClick={aboutus}
          className="btn btn-gradient-border btn-glow flex font-semibold align-content-center "
        >
         
         About Us <ArrowRightCircle className="icon1 " size={21} />
        </button>
        
      </div>
    </>
  );
};

export default Hero;

