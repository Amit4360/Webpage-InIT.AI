import React, { useState, useEffect } from "react";
import Bottombar from "./Bottombar";
import Sidebar from "./Sidebar";
import Profile from "../../assets/Profile_Blog.svg";
import axios from "../../axios";
import Dots from "../../assets/Three_dots.svg";
import linkedin from '../../assets/LinkedIn_black.svg';
import insta from '../../assets/Insta_black.svg';
import globe from '../../assets/Globe_black.svg';
import Bookmark from '../../assets/Bookmark_black.svg';
import { useParams } from "react-router-dom";
import HtmlParser from 'html-react-parser';
import Html2ReactParser from "html-to-react/lib/parser";

const SingleBlog = (props) => {
  const [myData, setMyData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState({});
  const { id } = useParams(); //Id From Url

  const getApiData = async () => {
    try {
      const res = await axios.get(`/blog/?_id=${id}`);
      setMyData(res.data);
    } catch (error) {
      setIsError("error form content", error);
    }
  };


  let date = new Date(myData.dateOfPublish);
  let date1 = date.toDateString();
  let indexOfSpace = date1.indexOf(' ');
  let dateShow = date1.substring(indexOfSpace + 1);
  // let blogdata = HtmlParser(myData.content)
  useEffect(() => {
    setLoading(true);
    getApiData();
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="grid lg:grid-cols-12 grid-cols-1">
        <div className="bg-white lg:col-span-1 hidden lg:block">
          <Sidebar />
        </div>

        <div className="lg:col-span-11 col-span-1 px-16 py-10 bg-white">
          <div className="grid grid-cols-10 pb-8">
            <div className="col-span-1">
              <img src={Profile} alt="" />
            </div>
            <div className="col-span-1 flex flex-col">
              <p className="py-2 text-base font-bold">{myData?.authors}</p>
              <p className="mt-auto">{dateShow}</p>
            </div>
            <div className="col-span-1 flex">
              <img className="mt-auto" src={Dots} alt="" />
            </div>
            <div className="col-span-1 flex">
              <p className="mt-auto">{myData?.readTime}</p>
            </div>
            <div className="col-span-3"></div>
            <div className="col-span-3">
            <div className="row flex lg:justify-end justify-center pt-8">
                <div className="pr-3">
                  <a href="https://www.linkedin.com/company/init-ai/mycompany/" target="_blank"><img src={linkedin} alt="" /></a>
                </div>
                <div className="px-3">
                  <a href="https://www.instagram.com/djinit.ai/" target="_blank"><img src={insta} alt="" /></a> 
                </div>
                <div className="px-3">
                  <a href=""><img src={globe} alt="" /></a> 
                </div>
                <div className="px-3">
                  <a href=""><img src={Bookmark} alt="" /></a> 
                </div>
              </div>
            </div>

          </div>
          <div className="row">
            <p className="text-3xl font-bold">{myData.title}</p>
          </div>
          <div>
            <img className="mx-auto my-5 h-60 rounded-md shadow-md border-2 max-w-lg border-gray-800" src={myData.mainImage} alt="" />
          </div>
          <div dangerouslySetInnerHTML={{__html:myData.content}} className="text-justify">
          {/* {data} */}
        </div>

        <div className="lg:hidden">
          <Bottombar />
        </div>
      </div>
      </div>
    </div>
  );
};

export default SingleBlog;

// {myData.map((post) => {
//   const { _id,authors, title, content, mainImage, domains,dateOfPublish, readTime } = post;
//   let sents = content.split('.');
//   let bag = sents.slice(0,3);
//   let showContent = bag.join('.').concat('.');
//   let date = new Date(dateOfPublish);
//   let date1 = date.toDateString();
//   let indexOfSpace = date1.indexOf(' ');
//   let dateShow = date1.substring(indexOfSpace + 1);

//   return (
//     <div className="mb-4">
//       <img src={Profile} alt="" />
//       <p className="font-black text-lg py-2 px-2">{title.toUpperCase()}</p>
//       <div className="grid grid-cols-1 md:grid-cols-11">
//         <div className="col-span-8">
//           <p className="px-2 pb-2">{showContent}</p>
//         </div>
        
//       </div>
//     </div>
//   );
// })}