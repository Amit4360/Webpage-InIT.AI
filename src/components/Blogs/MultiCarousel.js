import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Add from "../../assets/Plus.svg";
import Side_Arrow from "../../assets/Side_arrow.svg";

const MultiCarousel = ({ onSelectCategory }) => {
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={Side_Arrow} alt="" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src={Add} alt="" className="mr-4" />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="multiContainer mb-5 pt-6">
      <Slider {...settings}>
        <span
          className="font-semibold text-sm"
          onClick={() => onSelectCategory("Data Analytics")}
        >
          Data Analytics
        </span>
        <span
          className="font-semibold text-sm"
          onClick={() => onSelectCategory("Data Science")}
        >
          Data Science
        </span>
        <span
          className="font-semibold text-sm"
          onClick={() => onSelectCategory("Computer Vision")}
        >
          Computer Vision
        </span>
        <span
          className="font-semibold text-sm"
          onClick={() => onSelectCategory("Deep Learning")}
        >
          Deep Learning
        </span>
        <span
          className="font-semibold text-sm"
          onClick={() => onSelectCategory("Machine Learning")}
        >
          Machine Learning
        </span>
        <span className="font-semibold text-sm" onClick={() => onSelectCategory("Maths")}>
          Maths
        </span>
        <span
          className="font-semibold text-sm"
          onClick={() => onSelectCategory("Python")}
        >
          Python
        </span>
      </Slider>
    </div>
  );
};

export default MultiCarousel;






// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Add from "../../assets/Plus.svg";
// import Side_Arrow from "../../assets/Side_arrow.svg";

// const MultiCarousel = ({onSelectCategory}) => {
//   function NextArrow(props) {
//     const { className, onClick } = props;
//     return (
//       <div className={className} onClick={onClick}>
//         <img src={Side_Arrow} alt="" />
//       </div>
//     );
//   }

//   function PrevArrow(props) {
//     const { className, onClick } = props;
//     return (
//       <div className={className} onClick={onClick}>
//         <img src={Add} alt="" className="mr-4" />
//       </div>
//     );
//   }

//   var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,    
//     slidesToScroll: 1,
//     // autoplay: true,
//     // autoplaySpeed: 3000,
//     // nextArrow: <NextArrow />,
//     // prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 720,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 1,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="multiContainer mb-5  pt-6 ">
//       {/* <Slider {...settings}>
//         <span className=" font-semibold text-sm">Data Analytics</span>
//         <span className=" font-semibold text-sm">Data Science</span>
//         <span className=" font-semibold text-sm">Computer Vision</span>
//         <span className=" font-semibold text-sm">Artificial Intelligence</span>
//         <span className=" font-semibold text-sm">Machine Learning</span>
//       </Slider> */}
//        <Slider {...settings}>
//         <span className="font-semibold text-sm" onClick={() => onSelectCategory("data-analytics")}>
//           Data Analytics
//         </span>
//         <span className="font-semibold text-sm" onClick={() => onSelectCategory("data-science")}>
//           Data Science
//         </span>
//         <span className="font-semibold text-sm" onClick={() => onSelectCategory("computer-vision")}>
//           Computer Vision
//         </span>
//         <span className="font-semibold text-sm" onClick={() => onSelectCategory("Deep Learning")}>
//           Deep Learning
//         </span>
//         <span className="font-semibold text-sm" onClick={() => onSelectCategory("Machine Learning")}>
//           Machine Learning
//         </span>
//         <span className="font-semibold text-sm" onClick={() => onSelectCategory("Maths")}>
//           Maths
//         </span>
//         <span className="font-semibold text-sm" onClick={() => onSelectCategory("Python")}>
//           Python
//         </span>
//       </Slider>
//     </div>
//   );
// };

// export default MultiCarousel;
