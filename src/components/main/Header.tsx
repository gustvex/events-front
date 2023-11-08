import React from "react";
import { MapPinned } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="sticky top-0 bg-white shadow-md w-screen z-999 h-[60px] p-4 flex items-center justify-between ">
         <Link to="/">
        <div className="bg-secondary w-14 h-10">

        </div>
        </Link>
    
      <div className="relative">
        <select className="flex text-center  w-full  text-secondary  focus:outline-none appearance-none ml-4 ">
          <option selected>Brazil</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <div className="absolute inset-y-0  flex items-center">
          <MapPinned size={18} color="#7E7E7E" />
        </div>
      </div>

      <div className="">
        <div className="w-10 h-10 rounded-full bg-secondary">

        </div>
      </div>
    </div>
  );
}
