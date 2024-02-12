import React, { useState, useEffect } from "react";
import data from "./Team.json";
import LinkedIn from "../../assets/LinkedInTeams.svg";
import Github from "../../assets/GitHubTeams.svg";
import Profile1 from "../../assets/Profile1.png";
import Position from "../../assets/Positionblock.svg";
import { Link } from "react-router-dom";

const TeamInte = () => {
  const [myData, setMyData] = useState([]);

  const getApiData = async () => {
    try {
      // const res = await axios.get("/blog/all");
      setMyData(data);
    } catch (error) {
      // setIsError("error form content", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      <div className="text-center mb-10 text-3xl sm:text-4xl text-[#C71A03] font-bold">
        Our Team
      </div>

      <div className="mt-10">
        <div className="text-2xl sm:text-3xl text-[#263B72] font-bold ml-3 sm:ml-24">
          Sr. Mentor
        </div>

        {myData.map((post) => {
          const {
            _id,
            Name,
            role,
            AreaOfInterest,
            BriefIntro,
            linkedIn,
            github,
          } = post;
          if (role == "senior") {
            return (
              <div key={_id} className="mb-4 ">
                <div className=" flex flex-col-reverse sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 mb-8">
                  <div className=" mt-3 sm:col-start-3 sm:col-span-1 flex  ">
                    <Link to="ourteam">
                      <img
                        onClick={() => {
                          window.location.replace(`${linkedIn}`);
                        }}
                        className="w-10 h-10"
                        src={LinkedIn}
                        alt=""
                      />
                    </Link>
                    <Link to="ourteam">
                      <img
                        onClick={() => {
                          window.location.replace(`${github}`);
                        }}
                        className="w-10 h-10"
                        src={Github}
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="sm:col-span-5">
                    <div className="text-[#263B72] font-bold text-xl text-center sm:text-right ">
                      {Name}
                    </div>
                    <p className="font-bold text-lg text-center sm:text-right mb-4">
                      {AreaOfInterest}
                    </p>
                    <p className="ml-10 mr-10 sm:m-0">{BriefIntro}</p>
                  </div>

                  <div className="sm:col-span-3 ">
                    <img
                      src={Profile1}
                      alt=""
                      className="mx-auto sm:w-40 sm:ml-0 py-0"
                    />
                    <img
                      src={Position}
                      alt=""
                      className="mx-auto sm:w-40 sm:ml-0 "
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="mt-10">
        <div className="text-2xl sm:text-3xl text-[#263B72] font-bold ml-3 sm:ml-24">
          Jr. Mentor
        </div>

        {myData.map((post) => {
          const {
            _id,
            Name,
            role,
            AreaOfInterest,
            BriefIntro,
            linkedIn,
            github,
          } = post;
          if (role == "junior") {
            return (
              <div key={_id} className="mb-4 ">
                <div className=" flex flex-col-reverse sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 mb-8">
                  <div className=" mt-3 sm:col-start-3 sm:col-span-1 flex  ">
                  <Link to="ourteam">
                      <img
                        onClick={() => {
                          window.location.replace(`${linkedIn}`);
                        }}
                        className="w-10 h-10"
                        src={LinkedIn}
                        alt=""
                      />
                    </Link>
                    <Link to="ourteam">
                      <img
                        onClick={() => {
                          window.location.replace(`${github}`);
                        }}
                        className="w-10 h-10"
                        src={Github}
                        alt=""
                      />
                    </Link>
                  </div>

                  <div className="sm:col-span-5">
                    <div className=" text-[#263B72] font-bold text-xl text-center sm:text-right ">
                      {Name}
                    </div>
                    <p className="font-bold text-lg text-center sm:text-right mb-4">
                    {AreaOfInterest}
                    </p>
                    <p className="ml-10 mr-10 sm:m-0">
                      {BriefIntro}
                    </p>
                  </div>

                  <div className="sm:col-span-3">
                  <img
                      src={Profile1}
                      alt=""
                      className="mx-auto sm:w-40 sm:ml-0 py-0"
                    />
                    <img
                      src={Position}
                      alt=""
                      className="mx-auto sm:w-40 sm:ml-0 "
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TeamInte;
