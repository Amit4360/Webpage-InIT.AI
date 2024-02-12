import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import robot_head from "../../assets/head_robot_img.png";
import robot_arm from "../../assets/robot_arm-removebg-preview.png";
import handshake_laptop from "../../assets/handshake_laptop-transformed.png";
import robot_brain from "../../assets/robot_brain.png";
import "./AboutUs.css"
const AboutUs = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  const animationControls1 = useAnimation();
  const animationControls2 = useAnimation();
  const animationControls3 = useAnimation();
  const animationControls4 = useAnimation();

  useEffect(() => {
    if (inView1) {
      animationControls1.start("visible");
    }
    if (inView2) {
      animationControls2.start("visible");
    }
    if (inView3) {
      animationControls3.start("visible");
    }
    if (inView4) {
      animationControls4.start("visible");
    }
  }, [inView1, inView2, inView3, inView4]);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -90},
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 90 },
    visible: { opacity: 1, x: 0,transition: { duration: 1 } },
  };

  return (
    <div className="scroll-container-about">
      {/* 1st PART */}
      {/* <div className="part flex flex-col-reverse lg:flex-row bg-gradient-to-r from-blue-200 to-violet-200 font-roboto"> */}
      <div className="part flex flex-col-reverse lg:flex-row font-roboto ">
        <motion.div
          className="lg:w-1/2 p-4 content1"
          initial="hidden"
          animate={animationControls1}
          variants={fadeInLeft}
          ref={ref1}
        >
          <h2 className="mx-5 text-2xl font-bold xl:mt-10 text-stone-200">ABOUT US</h2>
          <p className="mx-5 text-lg text-black-600 text-justify mt-4 text-stone-200">
            DJ InIT.AI is the Artificial Intelligence club of the Information
            Technology Department at Dwarkadas J Sanghvi College of Engineering.
            It was founded in 2017 with a mission to educate, inspire and help
            students to explore the field of Artificial Intelligence. We aim to
            educate group members about the terms and concepts related to
            various sub-fields of AI to increase awareness about past, current,
            and potential future research directions.
          </p>
        </motion.div>

        <div className="lg:w-1/2 hidden lg:block image ">
          <img src={robot_head} className="w-full h-auto" alt="Robot Head" />
        </div>

        <div className="lg:hidden image">
          <img src={robot_head} className="w-full h-25 mr-2" alt="Robot Head" />
        </div>
      </div>

      {/* 2nd PART */}
      {/* <div className="part flex flex-col-reverse lg:flex-row bg-gradient-to-r from-indigo-500 to-violet-900 font-roboto"> */}
      <div className="part flex flex-col-reverse lg:flex-row font-roboto">
        

        <div className="lg:w-1/2 hidden lg:block image2">
          <img src={robot_arm} className="w-full h-auto" alt="Robot Arm" />
        </div>

        <div className="lg:hidden image2">
          <img src={robot_arm} className="w-full h-auto" alt="Robot Arm" />
        </div>

        <motion.div
          className="lg:w-1/2 p-4 content2"
          initial="hidden"
          animate={animationControls2}
          variants={fadeInRight}
          ref={ref2}
        >
          <h2 className="mx-6 text-2xl text-stone-200 font-bold xl:mt-20">
            OUR GOALS
          </h2>
          <p className="mx-6 text-lg text-stone-200 text-justify mt-4">
            Educating students on the concepts of Artificial Intelligence,
            Machine Learning and Data Science amongst others. Providing students
            with hands-on experience in these fields. Participating in
            competitions, hackathons and challenges to showcase the club's
            skills and foster healthy competition among members. Promoting
            research activities among club members by initiating research
            projects in AI and machine learning.
          </p>
        </motion.div>
      </div>

      {/* 3rd PART */}
      {/* <div className="part flex flex-col-reverse lg:flex-row bg-gradient-to-r from-blue-200 to-violet-200 font-roboto"> */}
      <div className="part flex flex-col-reverse lg:flex-row  font-roboto">
        <div className="lg:hidden image3">
          <img src={robot_brain} className="w-full h-25 mr-2" alt="Robot Brain" />
        </div>

        <motion.div
          className="lg:w-1/2 p-4 content3"
          initial="hidden"
          animate={animationControls3}
          variants={fadeInLeft}
          ref={ref3}
        >
          <h2 className="mx-5 text-2xl font-bold xl:mt-10 text-stone-200">PAST WORK</h2>
          <p className="mx-5 text-lg text-black-600 text-justify mt-4 text-stone-200">
            Facilitated and implemented cutting-edge research projects.
            <br />            
            Published influential research papers in top scientific
            journals.
            <br />
            Conducted hands-on lectures and seminars for students on
            the topics of AI and Data Science.
            <br />
            Conducted 'Data to Knowledge' (D2K), a first-of-its-kind 6-hour datathon in our college for which 300+ students registered and 100 students were shortlisted, the winners bagging internships with our partner companies.
          </p>
        </motion.div>

        <div className="lg:w-1/2 hidden lg:block image3">
          <img src={robot_brain} className="w-full h-auto" alt="Robot Brain" />
        </div>
      </div>

      {/* 4th PART */}
      {/* <div className="part flex flex-col-reverse lg:flex-row bg-gradient-to-r from-indigo-500 to-violet-900 font-roboto"> */}
      <div className="part flex flex-col-reverse lg:flex-row font-roboto">
        <div className="lg:w-1/2 hidden lg:block image4">
          <img src={handshake_laptop} className="w-full h-auto" alt="Handshake Laptop" />
        </div>

        <div className="lg:hidden image4">
          <img src={handshake_laptop} className="w-full h-auto" alt="Handshake Laptop" />
        </div>

        <motion.div
          className="lg:w-1/2 p-4 content4"
          initial="hidden"
          animate={animationControls4}
          variants={fadeInRight}
          ref={ref4}
        >
          <h2 className="mx-6 text-2xl text-stone-200 font-bold xl:mt-20 md:mt-2 mb-2 sm:mb-2">
            COLLABORATE WITH US 
          </h2>
          <h3 className="mx-6 text-xl text-stone-200 font-bold xl:mt-5">Internship Opportunities: </h3>
          <p className="mx-6 text-lg text-stone-200 text-justify mt-1">
            Providing our junior mentors with a platform to gain valuable industry experience by offering internships with an official offer letter and a completion letter upon successful completion of the project 
          </p>
          <h3 className="mx-6 text-xl text-stone-200 font-bold xl:mt-5 md:mt-3 sm:mt-3">Monetary Support: </h3>
          <p className="mx-6 text-lg text-stone-200 text-justify mt-1 mb-8">
            Offering a stipend to support the completion of the project work. This
            support will not only help us recognise and reward the dedication of
            our members.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;








// import React from "react";
// import robot_head from "../../assets/head_robot_img.png";
// import robot_arm from "../../assets/robot_arm-removebg-preview.png";
// import handshake_laptop from "../../assets/handshake_laptop-transformed.png"
// import robot_brain from "../../assets/robot_brain.png"
// import { motion } from "framer-motion";
// // import Fade from "react-reveal/Fade";

// const AboutUs = () => {
//   const fadeInLeft = {
//     hidden: { opacity: 0, x: -50 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const fadeInRight = {
//     hidden: { opacity: 0, x: 50 },
//     visible: { opacity: 1, x: 0 },
//   };


//   return (
//     <div className="scroll-container">
//       <div className="part flex flex-col-reverse lg:flex-row bg-gradient-to-r from-blue-200 to-violet-200 font-roboto">
//         {/* Content for all screen sizes */}
//         {/* <div className="lg:w-1/2 p-4 content1"> */}
//         <motion.div
//         className="lg:w-1/2 p-4 content1"
//         initial="hidden"
//         animate="visible"
//         variants={fadeInLeft}
//       >
//           <h2 className="mx-5 text-2xl font-bold xl:mt-10">ABOUT US</h2>
//           <p className="mx-5 text-lg text-black-600 text-justify mt-4">
//             DJ InIT.AI is the Artificial Intelligence club of the Information
//             Technology Department at Dwarkadas J Sanghvi College of Engineering.
//             It was founded in 2017 with a mission to educate, inspire and help
//             students to explore the field of Artificial Intelligence. We aim to
//             educate group members about the terms and concepts related to
//             various sub-fields of AI to increase awareness about past, current,
//             and potential future research directions.
//           </p>
//           </motion.div>
//         {/* </div> */}
//         {/* Image for laptops */}
//         <div className="lg:w-1/2 hidden lg:block image">
//           <img src={robot_head} className="w-full h-auto" alt="Robot Head" />
//         </div>

//         {/* Image for small devices  */}
//         <div className="lg:hidden image">
//           <img src={robot_head} className="w-full h-25 mr-2" alt="Robot Head" />
//         </div>
//       </div>

//       {/* 2nd PART */}
//       <div className="part flex flex-col-reverse lg:flex-row bg-gradient-to-r from-indigo-500 to-violet-900 font-roboto">
//         {/* Image for laptops */}
//         <div className="lg:w-1/2 hidden lg:block image2">
//           <img src={robot_arm} className="w-full h-auto" alt="Robot Head" />
//         </div>

//         {/* Image for small devices */}
//         <div className="lg:hidden image2">
//           <img src={robot_arm} className="w-full h-auto" alt="Robot Head" />
//         </div>

//         {/* Content for all screen sizes */}
//         {/* <div className="lg:w-1/2 p-4 content2"> */}
//         <motion.div
//         className="lg:w-1/2 p-4 content2"
//         initial="hidden"
//         animate="visible"
//         variants={fadeInRight}
//       >
//           <h2 className="mx-6 text-2xl text-stone-200 font-bold xl:mt-20">
//             OUR GOALS
//           </h2>
//           <p className="mx-6 text-lg text-stone-200 text-justify mt-4">
//             Educating students on the concepts of Artificial Intelligence,
//             Machine Learning and Data Science amongst others. Providing students
//             with hands-on experience in these fields. Participating in
//             competitions, hackathons and challenges to showcase the club's
//             skills and foster healthy competition among members. Promoting
//             research activities among club members by initiating research
//             projects in AI and machine learning.
//           </p>

//         {/* </div> */}
//         </motion.div>
//       </div>

//       {/* 3rd PART */}
//       <div className="part flex flex-col-reverse lg:flex-row bg-gradient-to-r from-blue-200 to-violet-200 font-roboto">
//          {/* Image for small devices  */}
//          <div className="lg:hidden image3">
//           <img src={robot_brain} className="w-full h-25 mr-2" alt="Robot Head" />
//         </div>
//         {/* Content for all screen sizes */}
//         {/* <div className="lg:w-1/2 p-4 content3"> */}
//         <motion.div
//         className="lg:w-1/2 p-4 content3"
//         initial="hidden"
//         animate="visible"
//         variants={fadeInLeft}
//       >
//           <h2 className="mx-5 text-2xl font-bold xl:mt-10">PAST WORK</h2>
//           <p className="mx-5 text-lg text-black-600 text-justify mt-4">
//             Facilitated and implemented cutting-edge research projects.
//             <br />            
//             Published influential research papers in top scientific
//             journals.
//             <br />
//             Conducted hands-on lectures and seminars for students on
//             the topics of AI and Data Science.
//             <br />
//             Conducted 'Data to Knowledge' (D2K), a first-of-its-kind 6-hour datathon in our college for which 300+ students registered and 100 students were shortlisted, the winners bagging internships with our partner companies.
//           </p>
//           </motion.div>
//         {/* </div> */}

//         {/* Image for laptops */}
//         <div className="lg:w-1/2 hidden lg:block image3">
//           <img src={robot_brain} className="w-full h-auto" alt="Robot Head" />
//         </div>

       
//       </div>

//       {/* 4th PART */}
//       <div className="part flex flex-col-reverse lg:flex-row bg-gradient-to-r from-indigo-500 to-violet-900 font-roboto">
//         {/* Image for laptops */}
//         <div className="lg:w-1/2 hidden lg:block">
//           <img src={handshake_laptop} className="w-full h-auto" alt="Robot Head" />
//         </div>

//         {/* Image for small devices */}
//         <div className="lg:hidden">
//           <img src={handshake_laptop} className="w-full h-auto" alt="Robot Head" />
//         </div>

//         {/* Content for all screen sizes */}
//         {/* <div className="lg:w-1/2 p-4 content4"> */}
//         <motion.div
//         className="lg:w-1/2 p-4 content4"
//         initial="hidden"
//         animate="visible"
//         variants={fadeInRight}
//       >
//           <h2 className="mx-6 text-2xl text-stone-200 font-bold xl:mt-20 md:mt-2 mb-2 sm:mb-2">
//           COLLABORATE WITH US 
//           </h2>
//             <h3 className="mx-6 text-xl text-stone-200 font-bold xl:mt-5">Internship Opportunities: </h3>
//           <p className="mx-6 text-lg text-stone-200 text-justify mt-1">
//             Providing our junior mentors with a platform to gain valuable industry experience by offering internships with an official offer letter and a completion letter upon successful completion of the project 
//           </p>
//           <h3 className="mx-6 text-xl text-stone-200 font-bold xl:mt-5 md:mt-3 sm:mt-3">Monetary Support: </h3>
//           <p className="mx-6 text-lg text-stone-200 text-justify mt-1 mb-8">
//             Offering a stipend to support the completion of the project work. This
//             support will not only help us recognise and reward the dedication of
//             our members.
//             </p>
//             </motion.div>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;












// CODE OF OLD SITE

// import React from "react";
// import About from "../../assets/About.svg";

// const AboutUs = () => {
//   return (
//     <div className="bg-gradient-to-b font-['Montserrat'] from-[#edf5fe] to-[#cee3fc]">
//       <div className="relative">
//         <img className="w-screen h-full" src={About} alt="" />
//       </div>
//       <div className="">
//         <div className="flex flex-col items-center justify-center pb-7">
//             <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-[#4051A3] ">
//               <div className="flex flex-col justify-between p-4 leading-normal my-2">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Who we are?
//                 </h5>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 InIT.AI is the AI club of the Information Technology Department at Dwarkakdas J Sanghvi College of Engineering. It was founded in 2017 with a mission to educate, inspire and help the students to explore the field of Artificial Intelligence. This club aims to educate group members about the terms and concepts related to various sub-fields of AI with the purpose of increasing awareness about past, current and potential future research directions.
//                 </p>
//               </div>
//             </div>

//           <div className="">
//             <div
//               to="/"
//               className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-[#4051A3] my-4"
//             ><div className="flex flex-col justify-between p-4 leading-normal my-2">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Why AI?
//                 </h5>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   ‘Big Data is the new natural resource’ – IBM. ‘AI is the new
//                   electricity’ - Andrew Ng, Chief Scientist of Baidu, Co-Founder
//                   of Coursera, Professor at Stanford University. It’s pretty
//                   evident from the two quotes that Data and AI are going to
//                   shape the future of the world. We believe that with the
//                   increasing advances in making machines smarter and amount of
//                   data growing day by day, the AI era has begun and it is going
//                   to revolutionize all spheres of life be it commuting to your
//                   office in a driverless car or getting interviewed by a
//                   chatbot. Sounds fun? This is exactly what attracted and pulled
//                   us towards AI. No wonder the job profile “Data Scientist” has
//                   been quoted as the sexiest job of 21st century. Because AI is
//                   making heads turn; and it most certainly has our undivided
//                   attention.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="">
//             <div
//               className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-[#4051A3]"
//             ><div className="flex flex-col justify-between p-4 leading-normal my-2">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   The Team
//                 </h5>
//                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                   Essentially, we are just like you. We check all the boxes for
//                   a typical CS engineer stereotype. Not happy with the
//                   curriculum, check. Feel like our potential is being
//                   squandered, check. But, there is a teensy bit more to us than
//                   just the aforementioned stereotypes. Individually, all of us
//                   have been through the exact same journey wherein we first
//                   toyed with Web development, then we moved onto Android app-dev
//                   because it was “the rage” and if you did not know app-dev then
//                   you’d be considered a dummy. We couldn’t really find our
//                   footing in these domains and they just did not have that
//                   X-factor for us. But, we are a pack of inquisitive, intrusive,
//                   impatient minds. Our stubbornness made us look further and
//                   after flirting with a few other domains, we finally found our
//                   sweet spot. Artificial Intelligence is where it’s at for us.
//                   We were fascinated by the AI dream and that is what brought us
//                   together as we attempt to transform it into a reality. Don’t
//                   get me wrong, we ourselves are no Andrew Ng’s yet but having
//                   said that, we are constantly striving to get there. This
//                   initiative is to ensure that you guys do not have to struggle
//                   or toil the way we have had to, to really grasp the
//                   fundamentals of AI and its sub-domains. For us, heaven is that
//                   point where we will have reached a peak understanding of AI
//                   and for everyone out there who wishes to be a part of this
//                   journey, our motive is to create a stairway to that heaven.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
