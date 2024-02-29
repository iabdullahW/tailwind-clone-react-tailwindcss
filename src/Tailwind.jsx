// import React from 'react'
// import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import "./App.css"

const Tailwind = () => {
  return (
   <>
    <div className="w-[100%] bg-gray-900 text-white flex justify-around py-4  items-center">
        <div className="flex items-center gap-3 pl-8">
        <ImLeaf className="text-3xl text-teal-500"/>
        <h1>tailwind <span className="text-xl font-bold">COMPONENTS</span></h1>
        </div>
        <div className="flex items-center gap-3">
            <h3>CheatSheet</h3>
            <button className="px-3 py-1 bg-teal-500 rounded-xl">3.0.2.4</button>
        </div>
        <div className="relative flex gap-3 w-[400px]">
            <input type="text"  placeholder="Search" className="px-4 py-2 transition duration-100 bg-transparent border border-gray-600 rounded-md outline-none focus:border-teal-400 w-[380px] border-black-100"/>
            <button className="absolute border border-gray-600 right-8 top-1 p-[3px] ">Ctrl k</button>
        </div>
        <div>
            <button className="px-3 py-1 transition duration-500 bg-transparent border rounded-xl border-white-100 hover:bg-gray-600 ">Expand All</button>
        </div>
        <div>
            <button className="px-3 py-1 transition duration-500 bg-transparent border border-white rounded-xl border-white-100 hover:bg-gray-600">Collapse All</button>
        </div>
        <div>
            <button className="px-3 py-1 font-bold bg-teal-500 transition-duration-300 rounded-xl hover:bg-teal-700">Back to components</button>
        </div>
        <div>
        <FaGithub className="text-3xl "/>
        </div>
    </div>
   </>
  )
}

export default Tailwind