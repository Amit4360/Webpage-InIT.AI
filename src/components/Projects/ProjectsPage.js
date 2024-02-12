import React from 'react'
import Bottombar from '../Blogs/Bottombar'
import Sidebar from '../Blogs/Sidebar'
import ListOfProjects from './ListOfProjects'

const ProjectsPage = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-12 grid-cols-1">
        <div className="bg-white lg:col-span-1 hidden lg:block">
          <Sidebar />
        </div>
        <div className="bg-white lg:col-span-11 col-span-1 px-10 pb-20">
          <ListOfProjects />
        </div>
        {/* <div className="bg-gradient-to-b from-[#FFFFFF] to-[#CCE2FC] hidden lg:block col-span-3">
          <Rightsection/>
        </div> */}
        <div className='lg:hidden'>
          <Bottombar/>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
