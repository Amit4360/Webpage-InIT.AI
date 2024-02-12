import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./Home.css";

const Component3 = () => {
  const [ref1, inView1] = useInView();
  const fadeInLeft = {
    hidden: { opacity: 0, x: -90 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const animationControls1 = useAnimation();
  useEffect(() => {
    if (inView1) {
      animationControls1.start("visible");
    }
  }, [inView1]);

  return (
    <div className="component3 flex flex-col items-center justify-center h-screen">
      <svg className="svg-container">
        <text className="svg-text" x="50%" y="50%">
          Our Mission
        </text>
      </svg>
      <motion.div
        className="text-white text-sm md:text-lg lg:text-lg  font-bold subtext  text-center mx-3 lg:w-[1150px] ptext m-auto"
        initial="hidden"
        animate={animationControls1}
        variants={fadeInLeft}
        ref={ref1}
      >
        The mission of our esteemed college's AI club is to cultivate a
        comprehensive understanding of Artificial Intelligence (AI) and Machine
        Learning (ML) among our student body. Through a multifaceted approach,
        we aim to empower our members with the tools and knowledge necessary to
        not only comprehend these cutting-edge technologies but also to harness
        their potential in addressing real-world challenges. By offering
        workshops, seminars, and collaborative projects, we aspire to instill a
        deep-seated passion for AI and ML, equipping our students with the skill
        set and mindset crucial for their future endeavors in this rapidly
        evolving technological landscape.
      </motion.div>
    </div>
  );
};

export default Component3;
