import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./styles.css";
import  {useHoverStore}  from "./store";
import achievements from "./achievements.jpg";
import blogs from "./blogs.jpg";
import projects from "./projects.jpg";

function Card() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-200vw",
          ease: "none",
          duration: 0.5,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=4000 top",
            scrub: 0.6,
            pin: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const { setHover } = useHoverStore();
  const handleMouseEnter = () => {
    setHover("medium");
  };
  const handleMouseLeave = () => {
    setHover("small");
  };

  return (
    <div>
      <section ref={triggerRef} className="scroll-container-outer">
        <div id="box" ref={containerRef} className="scroll-container">
         
          <div
            id="box1"
            className="scroll-section-1 scroll-section landing text-white "
          >
            <div className="box-image-cnt  ">
              <Link
                onClick={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                to="/achievements"
              >
                
                <img
                  src={achievements}
                  className="flex-center"
                  height="563"
                  width="337"
                  alt="achievements"
                />
              </Link>
            </div>
            <div className="box-informations-cnt">
              <div className="box__width">
                <span className="small-font box-subtitle">
                  01 / Work
                  <br />
                </span>
                <Link
                  className="medium-font box-title  font-bold text-xl"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/achievements"
                  passHref
                >
                   ACHIEVEMENTS
                </Link>
                <ul>
                  <li>
                    Discover the exceptional achievements of the members of our
                    esteemed club, showcasing excellence in various domains.
                  </li>

                </ul>
                <div className="box-link-cnt">
                  <Link
                    className="btn-small box-link"
                    to="/achievements"
                    passHref
                  >
                    <span>Find out</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            id="box2"
            className="scroll-section-2 scroll-section landing text-white"
          >
            <div className="box-image-cnt">
              <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

                to="/blogs/all"
              >
                <img
                  src={blogs}
                  className="flex-center"
                  height="563"
                  width="337"
                  alt="projects"
                />
              </Link>
            </div>
            <div className="box-informations-cnt">
              <div className="box__width">
                <span className="small-font box-subtitle">
                  02 / Work
                  <br />
                </span>
                <Link
                  className="medium-font box-title text-xl font-bold"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}

                  to="/blogs/all"
                  passHref
                >
                  BLOGS
                </Link>
                <ul>
                  <li>
                    Embark on a journey through the insightful blogs created by
                    our esteemed club members, highlighting their expertise.
                  </li>
                  {/* <li>Main technologies: Adobe XD, CSS, jQuery, WordPress</li>
                  <li>2020 / 2022</li> */}
                </ul>
                <div className="box-link-cnt ">
                  <Link
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="btn-small box-link"
                    to="/blogs/all"
                    passHref
                  >
                    Find out
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            id="box3"
            className="scroll-section-3 scroll-section landing text-white"
          >
            <div className="box-image-cnt">
              <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                to="/projects"
              >
                <img
                  src={projects}
                  className="flex-center"
                  height="563"
                  width="337"
                  alt="projects"
                />
              </Link>
            </div>
            <div className="box-informations-cnt">
              <div className="box__width">
                <span className="small-font box-subtitle">
                  03 / Work
                  <br />
                </span>
                <Link
                  className="medium-font box-title font-bold text-xl"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/projects"
                  passHref
                >
                  PROJECTS
                </Link>
                <ul>
                  <li>
                    Our club actively engages in a spectrum of projects centered
                    around cutting-edge Machine Learning initiatives, fostering
                    innovation and advancement within the field.
                  </li>

                </ul>
                <div className="box-link-cnt ">
                  <Link
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="btn-small box-link"
                    // href="/stuff/ideology"
                    to="/projects"
                    passHref
                  >
                    Find out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;



// import React from "react";
// import "./styles.css";
// import { Link, useNavigate } from "react-router-dom";
// import achievements from "./achievements.jpg";
// import blogs from "./blogs.jpg";
// import projects from "./projects.jpg";
// import { Navigate } from "react-router-dom";

// const Card = () => {
//   const navigate = useNavigate();

//   const blogslink = () => {
//     navigate("/blogslink");
//   };

//   const achievementslink = () => {
//     navigate("/achievementslink");
//   };

//   return (
//     <div className="h-screen w-screen landing text-white flex flex-col  " >
//       <div className="text-white md:text-4xl text-xl pl-10 mb-17 ">
//         Explore Our Club's Activities
//       </div>

//       <div className="flex flex-shrink-0 flex-nowrap overflow-x-auto overflow-hidden space-x-4 p-10 cards gap-5">
//         <div className="bg-black text-white h-[350px] w-[700px] flex p-10 mt-100 ">
//           <div className="w-[400px] ">
//             <img
//               src={achievements}
//               alt="Image description"
//               className="w-full h-full object-cover"
//             ></img>
//           </div>
//           <div className="flex flex-col justify-end items-end  w-[300px] ">
//             <div className="mb-7 text-xl text-right font-semibold text-[#e4e7f5]">
//               Our Achievements
//             </div>
//             <div className="text-md text-[#adb2c9] mb-10 ml-10 text-right ">
//               Discover the exceptional achievements of the members of our
//               esteemed club, showcasing excellence in various domains.
//             </div>

//             <button className="animated-button text-center justify-center  ">
//               <span className="text-center">Find out</span>
//               <span></span>
//             </button>
//           </div>
//         </div>

//         {/* another card */}

//         <div className="bg-black text-white h-[350px] w-[700px] flex p-10 mt-100 ">
//           <div className="w-[400px] ">
//             <img
//               src={blogs}
//               alt="Image description"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="flex flex-col justify-end items-end  w-[300px] ">
//             <div className="mb-7 text-xl text-right  font-semibold text-[#e4e7f5] ">
//               Blogs
//             </div>
//             <div className="text-md text-[#adb2c9] mb-10 ml-10 text-right ">
//               Embark on a journey through the insightful blogs created by our
//               esteemed club members, highlighting their expertise .
//             </div>

//             <button className="animated-button text-center justify-center ">
//               <span className="text-center">Find out</span>
//               <span></span>
//             </button>
//           </div>
//         </div>

//         {/* another card */}

//         <div className="bg-black text-white h-[350px] w-[700px] flex p-10 mt-100 ">
//           <div className="w-[400px] ">
//             <img
//               src={projects}
//               alt="Image description"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="flex flex-col justify-end items-end  w-[300px] ">
//             <div className="mb-7 text-xl text-right text-[#e4e7f5] font-semibold ">
//               Projects
//             </div>
//             <div className="text-md text-[#adb2c9] mb-10 ml-10 text-right ">
//               Our club actively engages in a spectrum of projects centered
//               around ML initiatives, fostering innovation within the field.
//             </div>
//             <button className="animated-button text-center ">
//               <span className="text-center">Find out</span>
//               <span></span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

