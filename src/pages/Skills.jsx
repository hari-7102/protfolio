import React from 'react'
import Navbar from '../components/Navbar'

const Skills = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center items-center gap-4 my-36'>
          <div className='flex flex-col border border-gray-700 px-6 py-2 rounded-xl'>
            <h1 className='text-2xl my-1'>Techical Skills</h1>
            <ul className=''>
              <li className='list-disc'>Languages : Python , Html , Css , Javascript</li>
              <li className='list-disc'>Tools : Python , Html , Css , Javascript</li>
              <li className='list-disc'>Languages : Python , Html , Css , Javascript</li>
              <li className='list-disc'>Languages : Python , Html , Css , Javascript</li>
            </ul>
          </div>

          <div className='flex flex-col border border-gray-700 rounded-xl px-3 py-2'>
          <h1 className='text-2xl my-1 '>Techical Skills</h1>
            <ul>
              <li>Languages : Python , Html , Css , Javascript</li>
              <li>Languages : Python , Html , Css , Javascript</li>
              <li>Languages : Python , Html , Css , Javascript</li>
              <li>Languages : Python , Html , Css , Javascript</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Skills