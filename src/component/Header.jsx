import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isAccountsOpen, setIsAccountsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full z-20">
      <div className="text-black">
        <div className="flex justify-between items-center px-4 py-4 md:px-10 md:py-4">
        <div className="pi pi-bars text-2xl"></div>
          <div>
            <img
              src={logo}
              alt="Description of my image"
              style={{ width: "150px", height: "auto" }}
            />
          </div>
              {/* Mobile menuBar */}
          <div className="md:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <i className="pi pi-times text-gray-700 hover:text-red-400" style={{ fontSize: '1.5rem' }} />
            ) : (
              <i className="pi pi-bars text-gray-700 hover:text-red-400" style={{ fontSize: '1.5rem' }} />
            )}
          </div>
          <div className="hidden md:flex">
            <ul className="flex gap-3">
              {/* HOME Dropdown */}
              <div className="relative inline-block text-left">
                <a
                  onClick={() => setIsHomeOpen(!isHomeOpen)}
                  className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-400  cursor-pointer"
                >
                  HOME
                </a>
              </div>

              {/* SHOP Dropdown */}
              <div className="relative inline-block text-left">
                <a
                  onClick={() => setIsShopOpen(!isShopOpen)}
                  className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-400  cursor-pointer"
                >
                  SHOP
                  <i className={`pi ${isShopOpen ? "pi-angle-up" : "pi-angle-down"} ml-2`}></i>
                </a>
                {isShopOpen && (
                  <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white text-center shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-red-400">Bag</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700  hover:text-red-400">Jewelry</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700  hover:text-red-400">Hair</a>
                    </div>
                  </div>
                )}
              </div>

               {/* PRODUCT DROPDOWN */}
<div className="relative inline-block text-left">
<a
  onClick={() => setIsProductsOpen(!isProductsOpen)}
  className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
>
  PRODUCTS
  <i className={`pi ${isProductsOpen ? "pi-angle-up" : "pi-angle-down"} ml-2`}></i>
</a>
{isProductsOpen && (
  <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
    <div className="py-1">
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700  hover:text-red-400"
      >
        ADD TO CART
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700  hover:text-red-400"
      >
        PORTFOLIO
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:text-red-400"
      >
        EMAIL TEMPLATE
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700  hover:text-red-400"
      >
        SLIDE BAR
      </a>
    </div>
  </div>
)}
</div>

{/* Feature DropDown */}
<div className="relative inline-block text-left">
              <a
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
              >
                FEATURES
                <i className={`pi ${isFeaturesOpen ? "pi-angle-up" : "pi-angle-down"} ml-2`}></i>
              </a>
              {isFeaturesOpen && (
                <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500"
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </div>

{/* ACCOUNTS DROPDOWN */}
<div className="relative inline-block text-left">
 <a
   onClick={() => setIsAccountsOpen(!isAccountsOpen)}
   className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
 >
   ACCOUNT
   <i className={`pi ${isAccountsOpen ? "pi-angle-up" : "pi-angle-down"} ml-2`}></i>
 </a>
 {isAccountsOpen && (
   <div className="absolute right-0 mt-2 w-45 text-center origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
     <div className="py-1">
       <a
         href="#"
         className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500"
       >
         Profile
       </a>
       <a
         href="#"
         className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500"
       >
         Settings
       </a>
       <a
         href="#"
         className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-500"
       >
         Logout
       </a>
     </div>
   </div>
 )}
</div>

{/* BLOG */}
<div className="relative inline-block text-left">
 <a
   onClick={() => setIsBlogOpen(!isBlogOpen)}
   className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
 >
   BLOG
   <i className={`pi ${isBlogOpen ? "pi-angle-up" : "pi-angle-down"} ml-2`}></i>
 </a>
 {isBlogOpen && (
   <div className="absolute right-0 mt-2 w-40 text-center origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
     <div className="py-1">
       <a
         href="#"
         className="block px-4 py-2 text-sm text-gray-700  hover:text-red-400"
       >
         Profile
       </a>
       <a
         href="#"
         className="block px-4 py-2 text-sm text-gray-700  hover:text-red-400 "
       >
         Settings
       </a>
       <a
         href="#"
         className="block px-4 py-2 text-sm text-gray-700  hover:text-red-400"
       >
         Logout
       </a>
     </div>
   </div>
 )}
</div>
            </ul>
          </div>
          {/* Right bar for icons */}
          <div className="hidden md:flex">
            <ul className='flex gap-3'>
              <li className='pi pi-search'></li>
              <li className='pi pi-cog'></li>
              <li className=''>
        <Link to='/cart' className="">
          <span className=" pi pi-cart-plus"></span> 
        </Link>
      </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col p-4">
              <li className="py-2"><a href="#" className="text-gray-700 hover:text-red-400">HOME</a></li>
              <li className="py-2"><a href="#" className="text-gray-700 hover:text-red-400">SHOP</a></li>
              <li className="py-2"><a href="#" className="text-gray-700 hover:text-red-400">PRODUCTS</a></li>
              <li className="py-2"><a href="#" className="text-gray-700 hover:text-red-400">FEATURES</a></li>
              <li className="py-2"><a href="#" className="text-gray-700 hover:text-red-400">ACCOUNT</a></li>
              <li className="py-2"><a href="#" className="text-gray-700 hover:text-red-400">BLOG</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}




















            
 

 

 