import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function () {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='z-10 text-sm'>
        <div className="flex justify-between  items-center bg-[#F8F8F8] border text-gray-500">
            <div className="welcome  flex gap-10">
                <h3>Welcome to Our store Multikart</h3>
                <h3>Call Us: 123 - 456 - 7890</h3>
                
            </div>
            <div className=" account  z-30 flex justify-between place-items-center gap-5 ">
              <div className=" flex gap-2 ">
                <span className='pi pi-heart  text-gray-400  p-1 hover:text-red-400'>  </span>
                <h3>Wishlist</h3>
              </div>
              <div className="relative inline-block text-left">
                <a
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-400 cursor-pointer"
                >
                  <span className='pi pi-heart  text-gray-400  p-1 hover:text-red-400'>  </span>
                  My Account
                </a>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white text-center shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link to={"/login"}> <a href="#" className="block px-4 py-2 text-sm text-gray-700  hover:text-red-400">Login</a></Link>
                      <Link to={"/register"}><a href="#" className="block px-4 py-2 text-sm text-gray-700  hover:text-red-400">Register</a></Link>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700  hover:text-red-400">Logout</a>
                    </div>
                  </div>
                )}
              </div>
              
              
            </div>
        </div>
    </div>
  )
}
