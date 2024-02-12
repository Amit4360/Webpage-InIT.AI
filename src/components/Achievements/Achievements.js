import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Achievements.css"; // Import your CSS file for styling
import $ from "jquery";
import { jQuery } from "jquery";
import axios from "axios";

const Achievements = () => {
  const sliderRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [filterType, setFilterType] = useState("Core");
  const [achievements, setAchievements] = useState([]);
  const [displayedAchievement, setDisplayedAchievement] = useState("hello");

  const apiUrl =
    "https://init-ai-website-backend.onrender.com/api/achievements";

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setAchievements(response.data);
      // Set the first achievement of the selected type as the displayed achievement
      const filteredAchievements = response.data.filter(
        (achievement) => achievement.type === filterType
      );
      if (filteredAchievements.length > 0) {
        setDisplayedAchievement(filteredAchievements[0]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filterType]); // Fetch data when the filterType changes

  const handleNext = () => {
    // Find the next achievement of the selected type
    const filteredAchievements = achievements.filter(
      (achievement) => achievement.type === filterType
    );
    if (filteredAchievements.length > 0) {
      const currentIndex = filteredAchievements.indexOf(displayedAchievement);
      const nextIndex = (currentIndex + 1) % filteredAchievements.length;
      setDisplayedAchievement(filteredAchievements[nextIndex]);
    }
  };

  useEffect(() => {
    // Slider core functions
    const sliderNext = () => {
      const total = $(sliderRef.current).find(".intro-slide").length;
      $(sliderRef.current)
        .find("#intro-slider .intro-slide:first-child")
        .hide()
        .appendTo($(sliderRef.current).find("#intro-slider"))
        .fadeIn();
      $(sliderRef.current)
        .find(".intro-slide")
        .each(function (index, dp_item) {
          $(dp_item).attr("data-position", index + 1);
        });
      // Update the activeImageIndex
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % total);

      // Find the next achievement of the selected type
      const filteredAchievements = achievements.filter(
        (achievement) => achievement.type === filterType
      );
      if (filteredAchievements.length > 0) {
        const currentIndex = filteredAchievements.indexOf(displayedAchievement);
        const nextIndex = (currentIndex + 1) % filteredAchievements.length;
        setDisplayedAchievement(filteredAchievements[nextIndex]);
      }
    };

    const onIntroSlideClick = function () {
      const get_slide = $(this).attr("data-class");
      console.log(get_slide);
      $(sliderRef.current)
        .find('#intro-slider .intro-slide[data-class="' + get_slide + '"]')
        .hide()
        .prependTo($(sliderRef.current).find("#intro-slider"))
        .fadeIn();
      $(sliderRef.current)
        .find(".intro-slide")
        .each(function (index, dp_item) {
          $(dp_item).attr("data-position", index + 1);
        });
    };

    // Attach event handlers
    $(sliderRef.current).on("click", "#slider-next", sliderNext);
    $(sliderRef.current).on(
      "click",
      "#intro-slider .intro-slide:not(:first-child)",
      onIntroSlideClick
    );

    // Drag
    $.fn.swipe = function (callback) {
      // ... (your swipe function code)
    };

    // Disable image drag
    $(sliderRef.current)
      .find("#slider img")
      .on("dragstart", function (event) {
        event.preventDefault();
      });

    // Slider Methods
    // ... (your slider methods code)

    // Cleanup
    return () => {
      // Remove event handlers or any cleanup you may need
      $(sliderRef.current).off("click", "#slider-next", sliderNext);
      $(sliderRef.current).off(
        "click",
        "#intro-slider .intro-slide:not(:first-child)",
        onIntroSlideClick
      );
    };
  }, [achievements, filterType, displayedAchievement]);

  useEffect(() => {
    const apiUrl =
      "https://init-ai-website-backend.onrender.com/api/achievements";
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setAchievements(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="relative bg-black pt-20">
        <div className="flex items-center font-bold text-black mx-32 text-2xl h-16 rounded-3xl bg-white z-50 ">
          <div
            className={`flex items-center justify-center w-1/3  ${
              filterType === "Core" ? "text-[#B42B84]" : ""
            }`}
            onClick={() => setFilterType("Core")}
          >
            <h1 className="">CORE</h1>
          </div>
          <div
            className={`flex items-center justify-center w-1/3 ${
              filterType === "Head" ? "text-[#B42B84]" : ""
            }`}
            onClick={() => setFilterType("Head")}
          >
            <h1 className="">HEADS</h1>
          </div>
          <div
            className={`flex items-center justify-center w-1/3 ${
              filterType === "Co-comm" ? "text-[#B42B84]" : ""
            }`}
            onClick={() => setFilterType("Co-comm")}
          >
            <h1 className="">CO-COM</h1>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <section className="section-ach ml-32 mt-[-30px] ">
          <div id="slider" ref={sliderRef}>
              <div className="slider-wrap">
                <div id="intro-slider">
                  <div className="intro-slide" data-class="1" data-position="1">
                    <div className="slide-overlay"></div>
                    <div
                      className="poster-box"
                      style={{
                        background: `url(${displayedAchievement.url}) center center / cover no-repeat`,
                      }}
                    >
                      <img
                        // src={displayedAchievement.url}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="intro-slide" data-class="2" data-position="2">
                    <div className="slide-overlay"></div>
                    <div
                      className="poster-box bg-cover bg-no-repeat bg-center"
                      style={{
                        background: `url(${displayedAchievement.url}) center center / cover no-repeat`,
                      }}
                    >
                      <img
                        // src={displayedAchievement.url}
                        alt=" "
                      />
                    </div>
                  </div>
                  <div className="intro-slide" data-class="3" data-position="3">
                    <div className="slide-overlay"></div>
                    <div
                      className="poster-box"
                      style={{
                        background: `url(${displayedAchievement.url}) center center / cover no-repeat`,
                      }}
                    >
                      <img
                        // src={displayedAchievement.url}
                        alt=""
                      />
                    </div>
                  </div>

                  {/* Add more intro-slide elements here */}
                </div>
                <span id="slider-next">
                  <img
                    src="https://yudiz.com/codepen/stack-slider/arrow.png"
                    alt="arrow-image"
                  />
                </span>
              </div>
            </div>
          </section>
          <div className="flex items-center justify-start">
            <div className="text-white w-2/3 h-2/3  border-white border-8 rounded-xl bg-gradient-to-r from-[#B42B84]  to-[#6C1AA3] ... ">
              {displayedAchievement && (
                <>
                  <div key={displayedAchievement?._id} className="card">
                    <h2 className="text-center text-3xl mt-8">
                      {displayedAchievement?.competitionName}
                    </h2>
                    <p className="text-xl text-center mt-5">
                      <strong></strong>{" "}
                      {displayedAchievement?.names?.map((name) => name + ", ")}
                    </p>
                    <p className="text-center">
                      <strong></strong> {displayedAchievement?.position}
                    </p>

                    <p className="text-center m-5">
                      <strong></strong>{" "}
                      {displayedAchievement?.description?.slice(0, 150) + "..."}
                    </p>
                    <p className="text-center">
                      <strong>Organized By:</strong>{" "}
                      {displayedAchievement?.organizedBy}
                    </p>
                    <p className="text-center">
                      <strong>Year:</strong> {displayedAchievement?.year}
                    </p>
                    <p className="text-center">
                      <strong>Date:</strong>{" "}
                      {new Date(displayedAchievement.date).toLocaleDateString()}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;