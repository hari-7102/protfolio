import React from 'react'
import Navbar from '../components/Navbar'

import { PhoneOutgoing } from 'lucide-react';

import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col gap-2 rounded-xl justify-center items-center border my-48 border-gray-600 mx-auto w-[30%]'>
        <h1 className='text-2xl font-semibold'>Contact </h1>
        <div className='flex flex-col gap-2'>
        <div className='flex  gap-2'>
        <PhoneOutgoing />
        <h1>91 6383037102</h1>

        </div>
        <div className='flex  gap-2'>
        <Mail />
        <h1>hariharanbvn28@gmail.com</h1>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
