import React from 'react';
import { Search } from "lucide-react";
function SearchForm() {
  return (
    <form className='flex justify-center sm:justify-start max-w-[1250px]'>
      <div className="relative  text-secondary ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={18}  color="#7E7E7E" />
        </div>
        <input
          className="flex p-2 pl-10 w-[350px] bg-transparent border-b-2 border-secondary focus:outline-none "
          placeholder="Search..."
          required
        />
       
      </div>
    </form>
  );
}

export default SearchForm;
