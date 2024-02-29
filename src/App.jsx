import { ImLeaf } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import Head from "./Head";
// import Cheat from "./Component";
import Component from "./Component";
import Footer from "./Footer";

export default function App() {
  return (
    // make tailwind navbar
   <>
    <div className="w-100%  bg-gray-900    " >
    <div className="mx-10 flex justify-between py-4 px-8 items-center  text-white">
    <div className=" flex items-center gap-1 "> <ImLeaf className=" text text-3xl text-teal-500" /> <h1>tailwind</h1> 
      <span className="text-xl">components</span> </div>
        
        <div className=" flex gap-2 items-center"><h3>Cheatsheet</h3>
        <button className= "py-1 px-2 bg-teal-500 rounded-xl">3.0.24</button></div>

        <div className=" flex gap-3  relative w-[400px] "><input type="search" className="border border-gray-600 focus:border-teal-400 outline-none rounded-md px-4 py-2 transition duration-100 bg-transparent w-[400px] "/>
        <button className="absolute right-8 top-2 border border-gray-600 rounded-md text-sm p-[3px] text-gray-600">Ctrl K</button></div>

        <div className=" flex"><button className="px-3 py-1 bg-transparent  rounded-xl border border-gray-200 hover:bg-gray-600 ">Expand All</button></div>

        <div className=" flex ">
        <button className=" px-3 py-1 bg-transparent rounded-xl border border-gray-200  hover:bg-gray-600">Collapse All</button></div>

        <div className=" flex"><button className="px-3 py-1 bg-teal-500 rounded-xl hover:bg-teal-800">Back to components</button></div>

        <div className=" flex text-2xl"><FaGithub /></div>
     
    </div>
    
    <Head />
    {/* <Cheat /> */}
    <div className="flex gap-7 ">
      <div className="flex-col gap-3 ">
      <Component  name="Layout"/>
    <Component  name="Layout"/>
    <Component  name="Layout"/>
    <Component  name="Layout"/>
    </div>
    <div className="flex-col gap-3 ">
      <Component  name="Layout"/>
    <Component  name="Layout"/>
    <Component  name="Layout"/>
    <Component  name="Layout"/>
    </div>
    <div className="flex-col gap-3 ">
      <Component  name="Layout"/>
    <Component  name="Layout"/>
    <Component  name="Layout"/>
    <Component  name="Layout"/>
    </div>
    <div className="flex-col gap-3 ">
      <Component  name="Layout"/>
    <Component  name="Layout"/>
    <Component  name="Layout"/>
    
    </div>
    </div>
    
</div>
<Footer/>
   </>
  )
}