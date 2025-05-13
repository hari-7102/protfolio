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

          <form action="" onSubmit={onSubmit}   >
            <input
              type="text"
              name="First_name"
              id=""
              placeholder="Name"
              className="border rounded-lg py-1.5 bg-gr px-3 border-gray-300 mb-3  w-full resize-none "
            />

            <input
              type="text"
              name="Email"
              id=""
              placeholder="Email"
              className="border rounded-lg py-1.5 border-gray-300  mb-3  px-3   w-full resize-none"
            />

            <input
              type="text"
              name="Phone"
              id=""
              placeholder="Phone Number "
              className="border rounded-lg py-1.5 border-gray-300  mb-3 px-3  w-full resize-none   "
            />
            <textarea
              placeholder="How We Help You?"
              className="border h-32 rounded-lg py-1.5 border-gray-300 px-3 mb-3 w-full resize-none"
            />
            <button className="text-white bg-blue-800 px-14 py-1.5  cursor-pointer rounded-xl"  type="submit"    >Submit Enquiry</button>
            </form>
    </div>
  )
}

export default Skills

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "34f49ee1-e777-46d3-8408-63fe17bf2760");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };