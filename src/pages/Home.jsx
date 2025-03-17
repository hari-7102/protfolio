import React from 'react'

import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center my-32 ">
        <div className="border border-gray-400 flex flex-col justify-center items-center
         mx-auto p-3 rounded-xl w-[50%] shadow-lg  transition-transform duration-300 hover:scale-105 shadow-gray-300 ">
          <h1 className="text-3xl text-black my-2 text-center">Summary</h1>
          <p className="text-base text-gray-700 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo fugit ex officiis,
            reprehenderit quidem laudantium illum, similique recusandae animi nostrum vero reiciendis
            blanditiis assumenda saepe. Reiciendis perspiciatis illo pariatur libero delectus. Numquam odio,
            maiores, architecto quaerat consequuntur tempore quia error eos, consequatur possimus dolorum libero
            voluptatum veritatis ad magni! Officiis, nostrum! Itaque nemo incidunt ratione, facilis
            consectetur tempore harum aliquam veritatis? Non repudiandae impedit pariatur recusandae,
            nemo facere consequatur in quibusdam repellendus totam laborum neque alias debitis
            necessitatibus suscipit libero!
          </p>
        </div>
      </div>

    </div>

  )
}

export default Home
