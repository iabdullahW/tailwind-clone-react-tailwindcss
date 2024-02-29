// import React from 'react'
import img from "../banner-root-ui-ux-book.png"

function Head() {
  return (
        // header of website
        <>
        <hr />
        <div className="flex flex-col items-center bg-gray-900 text-white py-8 gap-7">
            
            <h1 className="text-3xl font-bold">Tailwind CSS Cheat Sheet</h1>
            <h4 className="text-gray-400  text-xl"  >Find quickly all the class names and CSS properties with this interactive cheat sheet. The only Tailwind CheatSheet you will ever need!</h4>
            <img src={img} alt="img" className="border rounded-xl  w-[700px]"/>
     

            
            <h5 className="text-gray-400 text-xl italic">“Never memorize something that you can look up.” - Albert Einstein</h5>
        </div>
    </>
  )
}

export default Head
