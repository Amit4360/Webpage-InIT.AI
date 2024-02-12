import React, { useState, useEffect } from "react";
import rect from "../../assets/Rectangle_blogs_bigger.svg";
import LiveWave from "./LiveWave";
import axios from "../../axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Blogs = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState({});
  const navigate = useNavigate();
  const getApiData = async () => {
    try {
      const res = await axios.get("/blog/all");
      setMyData(res.data);
    } catch (error) {
      setIsError("error form content", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="bg-gradient-to-b from-[#cee3fc] to-[#edf5fe] ">
      <span className='text-[#C71A03] text-[40px] font-[" Montserrat"] font-bold '>
        <LiveWave position={"left-12"} title={"BLOGS"} />
      </span>
      <p className="sm:block hidden text-justify text-lg sm:mx-12 mx-2 mt-2">Our blogs focus on discussing and sharing information related to artificial intelligence (AI) and its various applications. This can include topics such as machine learning, deep learning, natural language processing, computer vision, and more. The blogs are created and maintained by junior mentors under the guidance of senior mentors with expertise in that domain. They can feature articles, tutorials, opinion pieces, and other content related to the field. They may also include interviews with experts in the field, information on new research and developments, and discussion of the ethical and societal implications of AI. AI blogs can be a valuable resource for those interested in staying up-to-date on the latest advances in the field and learning more about how AI is being used in different industries.

    </p>
      <div className="grid grid-cols-1 px-4 lg:grid-cols-1 xl:grid-cols-3 justify-items-center mt-5 ml-1 mr-1">
        {myData.map((post) => {
          const {_id,authors,title,content,mainImage,dateOfPublish} = post;
          let sents = content.split('.');
            let bag = sents.slice(0,1);
            let showContent = bag.join('.').concat('.');
            let date = new Date(dateOfPublish);
            let date1 = date.toDateString();
            let indexOfSpace = date1.indexOf(' ');
            let dateShow = date1.substring(indexOfSpace + 1);

          return (
            <>
              <div className="pt-5 w-88 font-['Montserrat]" key={_id}>
                <div className="rounded-lg overflow-hidden shadow-lg max-w-sm">
                  <img src={mainImage} alt="" className="w-full h-48" />
                  <div className="px-6 py-4">
                    <div className="text-xl font-bold">{title.toUpperCase()}</div>
                    {/* <div className="font-bold">{tagline}</div> */}
                    <div className="my-1 text-lg font-medium">{authors}</div>
                    <p>{showContent}</p>
                    <p className="mt-2">{dateShow}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* <div className='grid grid-cols-1 px-4 lg:grid-cols-1 xl:grid-cols-3 justify-items-center mt-10 ml-1 mr-1 '>
                <div className="py-10 w-88 ">
                    <div className="rounded-lg overflow-hidden shadow-lg  max-w-sm  ">
                        <img src={rect} alt="" className='w-full ' />
                        <div className="px-6 py-4">
                            <div className=''>
                                Article_Heading
                            </div>
                            <div className="font-bold">
                                MAIN TAGLINE OF THE ARTICLE
                            </div>
                            <div>
                                Author_name
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />

                            </p>
                        </div>
                    </div>
                    <div className="py-10 w-88 ">
                        <div className="rounded-lg overflow-hidden shadow-lg max-w-sm  ">
                            <img src={rect} alt="" className='w-full ' />
                            <div className="px-6 py-4">
                                <div className=''>
                                    Article_Heading
                                </div>
                                <div className="font-bold">
                                    MAIN TAGLINE OF THE ARTICLE
                                </div>
                                <div>
                                    Author_name
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="py-10 w-auto flex items-center" >
                    <div className="rounded-lg overflow-hidden shadow-lg  max-w-xl  ">
                        <img src={rect} className='' />
                        <div className="px-6 py-4">
                            <div className=''>
                                Article_Heading
                            </div>
                            <div className="font-bold">
                                MAIN HEADLINE OF THE ARTICLE WILL GO HERE
                            </div>
                            <p>
                                SHORT SUMMARY OF THE ARTICLE Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-10 w-88 ">
                    <div className="rounded-lg overflow-hidden shadow-lg max-w-sm  ">
                        <img src={rect} alt="" className='w-full ' />
                        <div className="px-6 py-4">
                            <div className=''>
                                Article_Heading
                            </div>
                            <div className="font-bold">
                                MAIN TAGLINE OF THE ARTICLE
                            </div>
                            <div>
                                Author_name
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor sit amet consectetur <br />

                            </p>
                        </div>
                    </div>
                    <div className="py-10 w-88 ">
                        <div className="rounded-lg overflow-hidden shadow-lg max-w-sm  ">
                            <img src={rect} alt="" className='w-full' />
                            <div className="px-6 py-4">
                                <div className=''>
                                    Article_Heading
                                </div>
                                <div className="font-bold">
                                    MAIN TAGLINE OF THE ARTICLE
                                </div>
                                <div>
                                    Author_name
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                    Lorem ipsum dolor sit amet consectetur <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default Blogs;
