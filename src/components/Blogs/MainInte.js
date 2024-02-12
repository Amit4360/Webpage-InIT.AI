import React, { useState, useEffect } from "react";
import axios from "../../axios"
import MultiCarousel from "./MultiCarousel";
import Profile from "../../assets/Author_img.svg";
import Bookmark from "../../assets/Bookmark.svg";
import Round from "../../assets/Round.svg";
import Dots from "../../assets/Three_dots.svg";
import { Link, useNavigate , useParams } from 'react-router-dom';

const MainInte = () => {
  const parser = new DOMParser();
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState({});
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const getApiData = async () => {    
  //   try {
  //     const res = await axios.get("/blog/all");
  //     setMyData(res.data);
  //   } catch (error) {
  //     setIsError("error form content", error);
  //   }
  // };
  // useEffect(() => {
  //   getApiData();
  // }, []);
  const getApiData = async (category) => {
    try {
      let endpoint = "/blog/all";
      if (category) {
        endpoint = `/blog/category/${category}`;
      }
      const res = await axios.get(endpoint);
      setMyData(res.data);
    } catch (error) {
      setIsError("error form content", error);
    }
  };
  useEffect(() => {
    getApiData(selectedCategory);
  }, [selectedCategory]);

 

  return (
    <>
      <div className="sm:px-5 px-20 ">
        <MultiCarousel  onSelectCategory={setSelectedCategory} />
        <hr />
      </div>
      <h1 className="font-black text-4xl pt-4 py-7">Latest Blogs</h1>
      {myData.map((post) => {
        const { _id,authors, title, content, mainImage, domains,dateOfPublish, readTime } = post;
        let date = new Date(dateOfPublish);
        let date1 = date.toDateString();
        let indexOfSpace = date1.indexOf(' ');
        let dateShow = date1.substring(indexOfSpace + 1);

        // let date2 = new Date(dateOfPublish);
        // let options = { year: 'numeric', month: 'long', day: 'numeric' };
        // let formattedDate = date2.toLocaleDateString('en-US', options);
        
        const doc = parser.parseFromString(content, 'text/html');
        const elements = Array.from(doc.body.children).slice(0, 2);
        const firstThreeElements = elements.map(element => element.outerHTML).join('');

        const truncateText = (text, maxWords) => {
          const words = text.split(" ");
          if (words.length > maxWords) {
            return words.slice(0, maxWords).join(" ") + " ...";
          }
          return text;
        };
        const truncatedContent = truncateText(firstThreeElements, 60);

        return (
          <div key={_id} className="mb-4">
            <Link to={`/blogs/${_id}`}>
              <p className="font-black text-lg py-2">{title.toUpperCase()}</p>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              <div className="col-span-8 mb-2 text-sm">
                {/* <p className="px-2 pb-2">{showContent}</p> */}
                <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />
                {/* <div>{HTMLReactParser(content)}</div> */}
              </div>

              <div className="col-span-1"></div>
              <div className="mx-auto md:mx-0 col-span-3">
                <img
                  className="md:ml-auto h-40 w-full my-auto border-2 border-gray-800 rounded-lg shadow-xl"
                  src={mainImage}
                  alt=""
                />
              </div>
              {/* <div className="flex">
              <span>
                <img src={Profile} alt="" />
              </span>
              <span className="px-3 pb-2 text-lg">{authors}</span>
            </div> */}
            </div>

            {/* <div className="pb-5 px-2">
              <span className="pr-3 lg:pr-4 text-[#75758B] font-normal text-sm">{domains.toString().split(',').join(" , ")}</span>
              <span className="pr-3 lg:pr-4 text-[#75758B] font-normal text-sm">{readTime}</span>
              <span className="hidden lg:pr-4 md:block text-[#75758B] font-normal text-sm">
                {dateShow}
              </span>
              <div className="flex ml-auto">
                <img
                  className=" m-2 w-4 lg:pr-4 lg:w-8"
                  src={Bookmark}
                  alt=""
                />
                <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Round} alt="" />
                <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Dots} alt="" />
              </div>
            </div> */}
            {/* <div className=" grid grid-cols-4 md:grid-cols-6 pb-5 px-2"> */}
            {/* text-[#75758B] */}
            <div className=" flex pb-5 ">
              <span className="pr-3 lg:pr-10 text-[#9c9ca8] font-normal text-sm">
                {domains.toString().split(",").join(" , ")} 
              </span>

              <span className="pr-3 lg:pr-10 text-[#9c9ca8] font-normal text-sm">
                 {readTime}in read 
              </span>
              <span className="hidden lg:pr-10 md:block text-[#9c9ca8] font-normal text-sm">
                 {dateShow}
              </span>
              <span className="pb-2 text-[#9c9ca8] text-sm italic">
                - By {authors}
              </span>
              {/* <div className="flex ml-auto">
                <img
                  className=" m-2 w-4 lg:pr-4 lg:w-8"
                  src={Bookmark}
                  alt=""
                />
                <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Round} alt="" />
                <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Dots} alt="" />
              </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MainInte;
















// import React, { useState, useEffect } from "react";
// import axios from "../../axios"
// import MultiCarousel from "./MultiCarousel";
// import Profile from "../../assets/Author_img.svg";
// import Bookmark from "../../assets/Bookmark.svg";
// import Round from "../../assets/Round.svg";
// import Dots from "../../assets/Three_dots.svg";
// import { Link, useNavigate , useParams } from 'react-router-dom';

// const MainInte = () => {
//   const parser = new DOMParser();
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState({});
//   const navigate = useNavigate();

//   const getApiData = async () => {    
//     try {
//       const res = await axios.get("/blog/all");
//       setMyData(res.data);
//     } catch (error) {
//       setIsError("error form content", error);
//     }
//   };

//   useEffect(() => {
//     getApiData();
//   }, []);

//   return (
//     <>
//       <div className="sm:px-5 px-20 ">
//         <MultiCarousel/>
//         <hr />
//       </div>
//       <h1 className="font-black text-2xl pt-4 px-2 py-7">Latest Blogs</h1>
//       {myData.map((post) => {
//         const { _id,authors, title, content, mainImage, domains,dateOfPublish, readTime } = post;
//         let date = new Date(dateOfPublish);
//         let date1 = date.toDateString();
//         let indexOfSpace = date1.indexOf(' ');
//         let dateShow = date1.substring(indexOfSpace + 1);

//         // let date2 = new Date(dateOfPublish);
//         // let options = { year: 'numeric', month: 'long', day: 'numeric' };
//         // let formattedDate = date2.toLocaleDateString('en-US', options);
        
//         const doc = parser.parseFromString(content, 'text/html');
//         const elements = Array.from(doc.body.children).slice(0, 2);
//         const firstThreeElements = elements.map(element => element.outerHTML).join('');

//         return (
//           <div key={_id} className="mb-4">
//             <Link to= {`/blogs/${_id}`} >
//             <div className="flex">
//               <span>
//                 <img src={Profile} alt="" />
//               </span>
//               <span className="px-3 pb-2 text-lg">{authors}</span>
//             </div></Link>
//             <p className="font-black text-lg py-2 px-2">{title.toUpperCase()}</p>
//             <div className="grid grid-cols-1 md:grid-cols-11">
//               <div className="col-span-8 mb-2">
//                 {/* <p className="px-2 pb-2">{showContent}</p> */}
//                 <div dangerouslySetInnerHTML={{__html:firstThreeElements}} />
//                 {/* <div>{HTMLReactParser(content)}</div> */}
//               </div>
//               <div className="mx-auto md:mx-0 col-span-3">
//                 <img
//                   className="md:ml-auto h-40 w-full my-auto border-2 border-gray-800 rounded-lg shadow-xl"
//                   src={mainImage}
//                   alt=""
//                 />
//               </div>
//             </div>

//             <div className=" grid grid-cols-4 md:grid-cols-6 pb-5 px-2">
//               <span className="pr-3 lg:pr-4 text-[#75758B] font-normal text-sm">{domains.toString().split(',').join(" , ")}</span>
//               <span className="pr-3 lg:pr-4 text-[#75758B] font-normal text-sm">{readTime}</span>
//               <span className="hidden lg:pr-4 md:block text-[#75758B] font-normal text-sm">
//                 {dateShow}
//               </span>
//               <div className="flex ml-auto">
//                 <img
//                   className=" m-2 w-4 lg:pr-4 lg:w-8"
//                   src={Bookmark}
//                   alt=""
//                 />
//                 <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Round} alt="" />
//                 <img className=" m-2 w-4 lg:pr-4 lg:w-8" src={Dots} alt="" />
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default MainInte;
