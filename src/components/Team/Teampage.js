import React from 'react'
import LinkedIn from "../../assets/LinkedInTeams.svg"
import Github from "../../assets/GitHubTeams.svg"
import Profile from "../../assets/ProfileTeams.svg"
import Position from "../../assets/Positionblock.svg"

const Teampage = () => {
  return (
    <div className='bg-gradient-to-b from-[#CCE2FC] to-[#FFFFFF]'>
      <div className='bg-white sm:mx-44'>

        <div className='text-center mb-10 text-3xl sm:text-4xl text-[#C71A03] font-bold'>
          Our Team
        </div>

        <div className='mt-10'>
          <div className='text-2xl sm:text-3xl text-[#263B72] font-bold ml-3 sm:ml-24'>
            Sr. Mentor
          </div>

          <div className=' flex flex-col-reverse sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 mb-8'>

            <div className=' mt-3 sm:col-start-3 sm:col-span-1 flex  '>
              <img className=" w-10 h-10" src={LinkedIn} alt="" />
              <img className=" w-10 h-10" src={Github} alt="" />
            </div>

            <div className='sm:col-span-5'>
              <div className=' text-[#263B72] font-bold text-xl text-center sm:text-right '>Name</div>
              <p className='font-bold text-lg text-center sm:text-right mb-4  '>Interesets</p>
              <p className='ml-10 mr-10 sm:m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt similique, dolorem pariatur distinctio magnam consectetur omnis. Repellendus dolorem aliquid minima eos saepe est labore tempora voluptates sunt, veniam architecto?</p>
            </div>

            <div className='sm:col-span-3 '>
              <img src={Profile} alt="" className='mx-auto sm:w-40 sm:ml-0 py-0' />
              <img src={Position} alt="" className='mx-auto sm:w-40 sm:ml-0 ' />
            </div>

          </div>

          <div className='felx flex-cols sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 mb-4'>

            <div className=' sm:col-start-3 sm:col-span-2  '>
              <img src={Profile} alt="" className='mx-auto sm:w-40  sm:ml-0' />
              <img src={Position} alt="" className='mx-auto sm:w-40 sm:ml-0 ' />
            </div>

            <div className='col-span-5'>
              <div className=' text-[#263B72] font-bold text-xl text-center sm:text-left '>Name</div>
              <p className='font-bold text-lg text-center sm:text-left mb-4'>Interesets</p>
              <p className='ml-10 mr-10 sm:m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt similique, dolorem pariatur distinctio magnam consectetur omnis. Repellendus dolorem aliquid minima eos saepe est labore tempora voluptates sunt, veniam architecto?</p>
            </div>

            <div className='me-0 mt-3 sm:col-span-1 flex'>
              <img className=" w-10 h-10" src={LinkedIn} alt="" />
              <img className=" w-10 h-10" src={Github} alt="" />
            </div>

          </div>
        </div>

        <div className='mt-10'>
          <div className='text-2xl sm:text-3xl text-[#263B72] font-bold ml-3 sm:ml-24'>
            Jr. Mentor
          </div>

          <div className=' flex flex-col-reverse sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 mb-8'>

            <div className=' mt-3 sm:col-start-3 sm:col-span-1 flex  '>
              <img className=" w-10 h-10" src={LinkedIn} alt="" />
              <img className=" w-10 h-10" src={Github} alt="" />
            </div>

            <div className='sm:col-span-5'>
              <div className=' text-[#263B72] font-bold text-xl text-center sm:text-right '>Name</div>
              <p className='font-bold text-lg text-center sm:text-right mb-4'>Interesets</p>
              <p className='ml-10 mr-10 sm:m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt similique, dolorem pariatur distinctio magnam consectetur omnis. Repellendus dolorem aliquid minima eos saepe est labore tempora voluptates sunt, veniam architecto?</p>
            </div>

            <div className='sm:col-span-3'>
              <img src={Profile} alt="" className='mx-auto sm:w-40 sm:ml-0 py-0' />
              <img src={Position} alt="" className='mx-auto sm:w-40 sm:ml-0 ' />
            </div>

          </div>

          <div className='felx flex-cols sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 mb-4'>

            <div className=' sm:col-start-3 sm:col-span-2  '>
              <img src={Profile} alt="" className='mx-auto sm:w-40  sm:ml-0' />
              <img src={Position} alt="" className='mx-auto sm:w-40 sm:ml-0 ' />
            </div>

            <div className='col-span-5'>
              <div className=' text-[#263B72] font-bold text-xl text-center sm:text-left '>Name</div>
              <p className='font-bold text-lg text-center sm:text-left mb-4'>Interesets</p>
              <p className='ml-10 mr-10 sm:m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt similique, dolorem pariatur distinctio magnam consectetur omnis. Repellendus dolorem aliquid minima eos saepe est labore tempora voluptates sunt, veniam architecto?</p>
            </div>

            <div className='me-0 mt-3 sm:col-span-1 flex'>
              <img className=" w-10 h-10" src={LinkedIn} alt="" />
              <img className=" w-10 h-10" src={Github} alt="" />
            </div>

          </div>
        </div>

        <div className='mt-10'>
          <div className='text-2xl sm:text-3xl text-[#263B72] font-bold ml-3 sm:ml-24'>
            Faculty Mentor
          </div>

          <div className=' flex flex-col-reverse sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 mb-8'>

            <div className=' mt-3 sm:col-start-3 sm:col-span-1 flex  '>
              <img className=" w-10 h-10" src={LinkedIn} alt="" />
              <img className=" w-10 h-10" src={Github} alt="" />
            </div>

            <div className='sm:col-span-5'>
              <div className=' text-[#263B72] font-bold text-xl text-center sm:text-right '>Name</div>
              <p className='font-bold text-lg text-center sm:text-right mb-4'>Interesets</p>
              <p className='ml-10 mr-10 sm:m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt similique, dolorem pariatur distinctio magnam consectetur omnis. Repellendus dolorem aliquid minima eos saepe est labore tempora voluptates sunt, veniam architecto?</p>
            </div>

            <div className='sm:col-span-3'>
              <img src={Profile} alt="" className='mx-auto sm:w-40 sm:ml-0 py-0' />
              <img src={Position} alt="" className='mx-auto sm:w-40 sm:ml-0 ' />
            </div>

          </div>

          <div className='felx flex-cols sm:grid sm:grid-cols-12 sm:gap-4 mt-4 mx-3 pb-6'>

            <div className=' sm:col-start-3 sm:col-span-2  '>
              <img src={Profile} alt="" className='mx-auto sm:w-40  sm:ml-0' />
              <img src={Position} alt="" className='mx-auto sm:w-40 sm:ml-0 ' />
            </div>

            <div className='col-span-5'>
              <div className=' text-[#263B72] font-bold text-xl text-center sm:text-left '>Name</div>
              <p className='font-bold text-lg text-center sm:text-left mb-4'>Interesets</p>
              <p className='ml-10 mr-10 sm:m-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui incidunt similique, dolorem pariatur distinctio magnam consectetur omnis. Repellendus dolorem aliquid minima eos saepe est labore tempora voluptates sunt, veniam architecto?</p>
            </div>

            <div className='me-0 mt-3 sm:col-span-1 flex'>
              <img className=" w-10 h-10" src={LinkedIn} alt="" />
              <img className=" w-10 h-10" src={Github} alt="" />
            </div>

          </div>
        </div>





      </div>
    </div>
  )
}

export default Teampage
