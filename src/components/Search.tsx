import React, { useState } from 'react';
import trees from '../assets/trees.jpg'
import { BiSearchAlt } from "react-icons/bi";

function Search() {
    const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event : any) => {
    setSearchTerm(event.target.value);
  };

//   const handleSearch = () => {
//     // Implement search logic here
//     console.log('Searching for:', searchTerm);
//   };
    return (
        <div className='relative w-full h-screen mt-10'>
            <img src={trees} alt="background of search" className='object-cover h-screen sm:object-fill sm:w-full rounded-md'/>
            <div className="flex items-center space-x-80">
            <input
                 type="text"
                 value={searchTerm}
                 onChange={handleChange}
                 placeholder="Search..."
                 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-4 rounded-md flex items-center space-x-2 w-full max-w-md"/>
            <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500"/>
            </div>
        </div>
    );
}
export default Search;