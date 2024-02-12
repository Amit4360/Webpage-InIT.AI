import React from 'react'
import MultiCarousel from '../Blogs/MultiCarousel'
import ProjectCard from './ProjectCard'

const ListOfProjects = () => {
  return (
    <div>
      <div className="px-20">
        <MultiCarousel/>
        <hr />
      </div>
        <h1 className="font-bold text-2xl pt-4 px-2 pb-3">Latest Projects</h1>
        <div className="row flex py-2 overflow-scroll lg:overflow-hidden">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
        <h1 className="font-bold text-2xl pt-5 px-2 pb-3">Older Projects</h1>
        <div className="row flex py-2 overflow-scroll lg:overflow-hidden">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
  )
}

export default ListOfProjects;
