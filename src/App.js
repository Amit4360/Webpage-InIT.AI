import "./App.css";
import Blogpage from "./components/Blogs/Blogpage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Home/Landing";
import SingleBlog from "./components/Blogs/SingleBlog";
import ProjectsPage from "./components/Projects/ProjectsPage";
import Footer from "./components/Home/Footer";
import Beginner from "./components/Beginner'sGuide/Beginner";
import Data2Knowledge from "./components/datathon/Data2Knowledge";
import AboutUs from "./components/AboutUs/AboutUs";
import Main from "./components/Projects/Main";
import Achievements from "./components/Achievements/Achievements";
import PageNotFound from "./components/PageNotFound";
import Technical from "./components/Team/Technical";
import Creatives from "./components/Team/Creatives";
import Publicity from "./components/Team/Publicity";
import Logistics from "./components/Team/Logistics";
import Marketing from "./components/Team/Marketing";
import Layout from "./components/Team/Layout";
function App() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        {/* <div className="mt-[53px]"></div> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs/all" element={<Blogpage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path={`/blogs/:id`} element={<SingleBlog />} />
          <Route path="/ourteam/" element={<Layout />}>
            <Route path="" element={<Technical />} />
            <Route path="Technical" element={<Technical />} />
            <Route path="Creatives" element={<Creatives />} />
            <Route path="Publicity" element={<Publicity />} />
            <Route path="Logistics" element={<Logistics />} />
            <Route path="Marketing" element={<Marketing />} />
          </Route>
          <Route path="/beginner's-guide" element={<Beginner />}></Route>
          <Route
            path="/events/data-2-knowledge"
            element={<Data2Knowledge />}
          ></Route>
          <Route path="/single-project" element={<Main />}></Route>
          <Route path="/achievements" element={<Achievements />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
