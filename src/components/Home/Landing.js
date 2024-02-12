import React from "react";
import Hero from "./Hero";
import Innovation from "./innovation";
import "./Home.css";
import Component3 from "./Component3";
import Navbar from "../Navbar";
import Card from "./ScrollCard/Card";

const Landing = () => {
  return (
    <>
     <div className="landing">
      <Hero />
      <Innovation />
      <Component3 />
      <Card/>
      </div>
    </>
  );
};

export default Landing;

// import React from "react";
// import Blogs from "./Blogs";
// import Contact from "./Contact";
// import Content from "./Content";
// import Footer from "./Footer";
// import OurMission from "./OurMission";
// import OurProjects from "./OurProjects";
// import OurVision from "./OurVision";
// import Roadmap from "./Roadmap";

// const Landing = () => {
//   return (
//     <div>
//       <div className="">
//         <div className="bg-gradient-to-b font-['Montserrat'] from-[#edf5fe] to-[#cee3fc]">
//           <Content />
//           <OurMission />
//           <OurVision />
//         </div>
//         <OurProjects />
//         <Blogs />
//         <Roadmap />
//         <Contact />
//       </div>
//     </div>
//   );
// };

// export default Landing;
