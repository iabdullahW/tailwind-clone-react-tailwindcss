// import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Component = (props) => {
  return (
   <>
        <div className="text-white bg-gray-700 border border-gray-700 w-[290px] rounded-xl m-3">
            <div className="flex justify-between p-2 m-3 bg-gray-500 rounded-lg">
                <h4>{props.name}</h4>
                <MdOutlineKeyboardArrowDown className="text-2xl cursor-pointer"/>
            </div>
        </div>

   </>
  )
}

export default Component