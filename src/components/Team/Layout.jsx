import XarrowContext from "react-xarrows";
import Card from "./Card/Card";
import "./Layout.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  NavLink,
  useNavigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  faculty,
  prez1,
  prez2,
  vprez1,
  vprez2,
  secretary,
  juniorMentor,
  seniorMentor,
  seniorMentor2,
  techHeads,
  marketingHeads,
  pubsHeads,
  logiHeads,
  creativeHeads,
  tech,
  marketing,
  pubs,
  logi,
  creatives,
} from "./Card/initdata";

const XarrowFaculty = () => {
  return (
    <>
      <XarrowContext
        showTail={false}
        startAnchor={"bottom"}
        endAnchor={"left"}
        showHead={false}
        curveness={0}
        path="grid"
        animateDrawing={true}
        color="white"
        start="f1"
        end="point-1"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"right"}
        endAnchor={"bottom"}
        showHead={false}
        animateDrawing={true}
        color="white"
        curveness={0}
        start="point-1"
        end="f2"
      />
    </>
  );
};
const XarrowPresident = () => {
  return (
    <>
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"right"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        color="white"
        start="point-1"
        end="pres"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"left"}
        endAnchor={"right"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        color="white"
        start="pres"
        end="pres1"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"right"}
        endAnchor={"left"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        color="white"
        start="pres"
        end="pres2"
      />
    </>
  );
};
const XarrowVPresident = () => {
  return (
    <>
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        color="white"
        curveness={0}
        start="pres"
        end="vpres"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"left"}
        endAnchor={"right"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        color="white"
        start="vpres"
        end="vpres1"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"right"}
        color="white"
        endAnchor={"left"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        start="vpres"
        end="vpres2"
      />
    </>
  );
};
const XarrowMisc = () => {
  return (
    <>
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        color="white"
        showHead={false}
        animateDrawing={true}
        curveness={0}
        start="sm5"
        end="sm7"
      />
      {/* <XarrowContext
      showTail={false}
      path="grid"
      startAnchor={"bottom"}
      endAnchor={"top"}
      showHead={false}
      color="white"

      animateDrawing={true}
      curveness={0}
      start="sm6"
      end="sm7"
    />  */}
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        color="white"
        animateDrawing={true}
        curveness={0}
        start="sm7"
        end="point-3"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        color="white"
        curveness={0}
        start="point-3"
        end="point-4"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        color="white"
        animateDrawing={true}
        curveness={0}
        start="point-4"
        end="sec"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"left"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        color="white"
        start="point-4"
        end="mentors"
      />{" "}
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"right"}
        endAnchor={"top"}
        color="white"
        showHead={false}
        animateDrawing={true}
        curveness={0}
        start="point-4"
        end="event"
      />
    </>
  );
};

const XarrowSeniorMentor = () => {
  return (
    <>
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        color="white"
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        start="vpres"
        end="smentor"
      />

      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        color="white"
        animateDrawing={true}
        curveness={0}
        start="smentor"
        end="sm1"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        color="white"
        animateDrawing={true}
        curveness={0}
        start="smentor"
        end="sm2"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        color="white"
        curveness={0}
        start="smentor"
        end="sm3"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        color="white"
        curveness={0}
        start="sm1"
        end="sm4"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        color="white"
        animateDrawing={true}
        curveness={0}
        start="sm2"
        end="sm5"
      />
      <XarrowContext
        showTail={false}
        path="grid"
        color="white"
        startAnchor={"bottom"}
        endAnchor={"top"}
        showHead={false}
        animateDrawing={true}
        curveness={0}
        start="sm3"
        end="sm6"
      />
    </>
  );
};

export default function Layout() {
  let nav1 = useNavigate();

  let constN = () => {
    nav1("/Technical");
  };

  const [check, setCheck] = useState(true);

  useEffect(() => {
    let a = document.getElementById("mentors");
    let b = document.getElementById("sec");
    let c = document.getElementById("event");
    let d = document.getElementById("disJm");
    let e = document.getElementById("disSec");
    let f = document.getElementById("disEvent");
    a.addEventListener("click", () => {
      if (e.classList.contains("disApp")) {
        setCheck(!check);
        e.classList.remove("disApp");
        e.classList.add("disNone");
      }
      if (f.classList.contains("disApp")) {
        setCheck(!check);
        f.classList.remove("disApp");
        f.classList.add("disNone");
      }
      if (check === true) {
        d.classList.remove("disNone");
        d.classList.add("disApp");
        setCheck(!check);
      } else {
        d.classList.remove("disApp");
        d.classList.add("disNone");
        setCheck(!check);
      }
    });

    b.addEventListener("click", () => {
      if (d.classList.contains("disApp")) {
        setCheck(!check);
        d.classList.remove("disApp");
        d.classList.add("disNone");
      }
      if (f.classList.contains("disApp")) {
        setCheck(!check);
        f.classList.remove("disApp");
        f.classList.add("disNone");
      }
      if (check === true) {
        e.classList.remove("disNone");
        e.classList.add("disApp");
        setCheck(!check);
      } else {
        e.classList.remove("disApp");
        e.classList.add("disNone");
        setCheck(!check);
      }
    });

    c.addEventListener("click", () => {
      if (d.classList.contains("disApp")) {
        setCheck(!check);
        d.classList.remove("disApp");
        d.classList.add("disNone");
      }
      if (e.classList.contains("disApp")) {
        setCheck(!check);
        e.classList.remove("disApp");
        e.classList.add("disNone");
      }
      if (check === true) {
        f.classList.remove("disNone");
        f.classList.add("disApp");
        setCheck(!check);
      } else {
        f.classList.remove("disApp");
        f.classList.add("disNone");
        setCheck(!check);
      }
    });

    //remove the event listeners from useEffect
  }, [check]);

  console.log(Image);
  return (
    <div className="mainbody ">
      <div className=" flex flex-col  items-center justify-start max-w-full px-2 sm:px-2 lg:w-4/5  lg:mt-10  mx-auto ">
        <div className="lg:mt-[15vh] md:grid-cols-2 mt-6 grid gap-2 justify-items-center lg:flex lg:justify-between w-full">
          {faculty.map((data) => (
            <Card
              id={data.id}
              name={data.Name}
              image={data.Image}
              pos={data.Position}
              insta={data.Instagram}
              git={data.Github}
              lin={data.LinkedIn}
              email={data.Email}
            />
          ))}
        </div>
        <div className="lg:mt-[15vh] mt-6" id="point-1"></div>
        <p className="border-2  p-2  tab lg:hidden">President</p>
        <div className="lg:mt-[15vh] mt-6 md:grid-cols-2 grid gap-4 lg:flex justify-items-center lg:items-center lg:justify-between w-full">
          {prez1.map((data) => (
            <Card
              id={data.id}
              name={data.Name}
              image={data.Image}
              pos={data.Position}
              insta={data.Instagram}
              git={data.Github}
              lin={data.LinkedIn}
              email={data.Email}
            />
          ))}
          <p id="pres" className="border-2  p-2  tab hidden lg:block">
            President
          </p>
          {prez2.map((data) => (
            <Card
              id={data.id}
              name={data.Name}
              image={data.Image}
              pos={data.Position}
              insta={data.Instagram}
              git={data.Github}
              lin={data.LinkedIn}
              email={data.Email}
            />
          ))}
        </div>
        <p className="border-2 lg:mt-[15vh] mt-6 p-2 tab lg:hidden ">
          Vice President
        </p>
        <div className="lg:mt-[15vh] mt-6 md:grid-cols-2 grid gap-4 lg:flex lg:items-center justify-items-center lg:justify-between w-full">
          {vprez1.map((data) => (
            <Card
              id={data.id}
              name={data.Name}
              image={data.Image}
              pos={data.Position}
              insta={data.Instagram}
              git={data.Github}
              lin={data.LinkedIn}
              email={data.Email}
            />
          ))}
          <p
            id="vpres"
            className="border-2 text-center  p-2 tab hidden lg:block"
          >
            Vice President
          </p>
          {vprez2.map((data) => (
            <Card
              id={data.id}
              name={data.Name}
              image={data.Image}
              pos={data.Position}
              insta={data.Instagram}
              git={data.Github}
              lin={data.LinkedIn}
              email={data.Email}
            />
          ))}
        </div>

        <div className="flex flex-col lg:mt-[15vh] mt-6 w-full gap-12">
          <div className="flex items-center justify-center">
            <p id="smentor" className="border-2  p-2 tab">
              Senior Mentors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-5 lg:mt-[15vh] mt-6">
            {seniorMentor.map((data) => (
              <Card
                id={data.id}
                name={data.Name}
                image={data.Image}
                pos={data.Position}
                insta={data.Instagram}
                git={data.Github}
                lin={data.LinkedIn}
                email={data.Email}
              />
            ))}
          </div>
        </div>
        <div className="md:col-span-2 flex items-center justify-center lg:col-span-3">
          {seniorMentor2.map((data) => (
            <Card
              id={data.id}
              name={data.Name}
              image={data.Image}
              pos={data.Position}
              insta={data.Instagram}
              git={data.Github}
              lin={data.LinkedIn}
              email={data.Email}
            />
          ))}
        </div>
        <div className="mt-[15vh]" id="point-3" />

        <div className="" id="point-4" />
        <div className="divSize1">
          <div className=" grid grid-cols-3 gap-6 mt-12 mb-10 items-center justify-items-center w-full">
            <div>
              <p className="border-2 p-2 text-sm tab" id="mentors">
                Junior Mentors
              </p>
            </div>
            <div>
              <p className="border-2 p-2 tab text-sm" id="sec">
                Secretary
              </p>
            </div>
            <div>
              <p className="border-2 p-2 tab text-sm " id="event">
                Events
              </p>
            </div>
          </div>

          <div
            className="disNone grid py-10 mb-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-5 lg:mt-[15vh] mt-6"
            id="disJm"
          >
            {juniorMentor.map((data) => (
              <Card
                id={data.id}
                name={data.Name}
                image={data.Image}
                pos={data.Position}
                insta={data.Instagram}
                git={data.Github}
                lin={data.LinkedIn}
                email={data.Email}
              />
            ))}
          </div>
          <div
            className="disNone grid py-10 mb-10 md:grid-cols-1 lg:grid-cols-1 justify-items-center w-full gap-5 lg:mt-[15vh] mt-6"
            id="disSec"
          >
            {secretary.map((data) => (
              <Card
                id={data.id}
                name={data.Name}
                image={data.Image}
                pos={data.Position}
                insta={data.Instagram}
                git={data.Github}
                lin={data.LinkedIn}
                email={data.Email}
              />
            ))}
          </div>

          <div
            className=" disNone grid py-10 mb-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full gap-5 lg:mt-[15vh] mt-6"
            id="disEvent"
          >
            <nav id="nav">
              <NavLink to={"Technical"}>Technical</NavLink>
              <NavLink to={"Creatives"}>Creatives</NavLink>
              <NavLink to={"Publicity"}>Publicity</NavLink>
              <NavLink to={"Marketing"}>Marketing</NavLink>
              <NavLink to={"Logistics"}>Logistics</NavLink>
            </nav>

            <Outlet />
          </div>
        </div>

        <div className="hidden lg:block">
          <XarrowFaculty />
          <XarrowPresident />
          <XarrowVPresident />
          <XarrowSeniorMentor />
          <XarrowMisc />
        </div>
      </div>
    </div>
  );
}
