import React from 'react'
import Paragraph from '../Custom/Paragragh/Paragraph'
import { FaCircleCheck } from "react-icons/fa6";


export default function CheckPoint({text}) {
  return (
    <div>
      <div className="flex justify-start  gap-2.5">
      <FaCircleCheck className="w-9 h-9 text-[#0d6efd]" />
        <Paragraph title={text} className=" capitalize text-[17px] leading-[40px] font-[750]"/>
      </div>
    </div>
  )
}
