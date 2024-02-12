import React from 'react'
import Cards from './Cards'
import Content from './Content'
import Roadmap from './Roadmap'


function Beginner() {
    return (
        <div className='bg-gradient-to-b from-[#edf5fe] to-[#cee3fc] '>
            <Content />
            <Roadmap />
            <Cards />
        </div>
    )
}

export default Beginner
