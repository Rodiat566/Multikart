import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import TitleHeader from '../component/TitleHeader'
import ProductSlide from '../component/ProductSlide'
import SingleProduct from '../component/SingleProduct'
import MultiCover from '../component/MultiCover'
import RelatedProduct from '../component/RelatedProduct'

import BlogFooter from '../component/BlogFooter'
import { Link } from 'react-router-dom'



export default function SinglePage() {
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const desc =[
        {descri:"description", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"},
        {descri:"details", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
         {descri:"video", content:"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
         { descri:"write review", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}

    ]
  

   
  return (
    <div className=' '>
        <TitleHeader/>
        <Header/>
        {/* link to home page */}
        <div className="flex justify-between  items-center px-10 py-4   bg-[#F9F9F9]">
        <h2>PRODUCT</h2>
        <ul className='flex gap-2'>
          <li><Link to='/'>Home</Link></li>
          <li>/</li>
          <li>PRODUCT</li>
        </ul>
      </div>
      <br />
     <div className=" overall  flex ">
          <div className="flex flex-col border border-green-900">
            {/* dropdown */}
            <div className="   px-4 py-2 text-sm ">
                  <a
                onClick={() => setIsBrandOpen(!isBrandOpen)}
                className="flex  justify-between items-center font-medium text-gray-700 cursor-pointer"
                aria-expanded={isBrandOpen}
                role="button"
              >
                BRAND
                <i className={`pi ${isBrandOpen ? "pi-sort-down-fill" : "pi-sort-down-fill"} ml-2`}></i>
              </a>
                      {isBrandOpen && (
                        <div className="">
                          <div className="py-1">
                            <a href="#" className="block text-gray-700 ">clothing</a>
                            <a href="#" className="block text-gray-700 ">Bag</a>
                            <a href="#" className="block text-gray-700 ">footwear</a>
                            <a href="#" className="block text-gray-700 ">watches</a>
                            <a href="#" className="block text-gray-700 ">accessories</a>
                          </div>
                        </div>
                      )}
                    </div>
                    <br />
                    {/* shipping content */}
                    <div className="border  shadow-sm p-6  bg-white">
        
        <div className="flex items-center gap-3 mb-4">
          <div>
            <i className='pi pi-truck' style={{ color: '#ff4c3b', fontSize: '2rem' }}></i>
          </div>
          <div>
            <h3 className="">Free Shipping</h3>
            <h6 className='text-xs text-gray-500'>Free Shipping Worldwide</h6>
          </div>
        </div>
        
        <hr className='my-2' />
        
        <div className="flex items-center gap-3 mb-4">
          <div>
            <i className="pi pi-clock" style={{ color: '#ff4c3b', fontSize: '2rem' }}></i>
          </div>
          <div>
            <h3 className="">24 X 7 Service</h3>
            <h6 className='text-xs text-gray-500'>Online service 24 x 7</h6>
          </div>
        </div>
        
        <hr className='my-2' />
        
        <div className="flex items-center gap-3 mb-4">
          <div>
            <i className="pi pi-microphone" style={{ color: '#ff4c3b', fontSize: '2rem' }}></i>
          </div>
          <div>
            <h3 className="">Festival Offer</h3>
            <h6 className='text-xs text-gray-500'>New Online Special Festival Offer</h6>
          </div>
        </div>
        
        <hr className='my-2' />
        
        <div className="flex items-center gap-3 mb-4">
          <div>
            <i className="pi pi-credit-card" style={{ color: '#ff4c3b', fontSize: '2rem' }}></i>
          </div>
          <div>
            <h3 className="">Online Payment</h3>
            <h6 className='text-xs text-gray-500'>Secure online payment options</h6>
          </div>
              </div>
                </div>
                <br />
                {/* new product */}
              <div className=' py-5'>
              <ProductSlide/>
              </div>
                

                  
          </div>
          <div>
         {/* single  product details */}
          <div className='py-5'>
            <SingleProduct/>
            </div>
            {/* <div className=" flex gap-6   ">
                {desc.map((item, index) => (
                    <div key={index} className=" cursor-pointer">
                        <h2
                            onClick={() => setActiveIndex(index)}
                            className='hover:text-red-600'
                        >
                            {item.descri}
                        </h2>
                        {activeIndex === index && (
                            <p className="text-gray-500 ">{item.content}</p>
                        )}
                    </div>
                ))}
          </div> */}
    </div>
    

     </div>
     {/* <div className="py-5">
      <RelatedProduct/>
     </div> */}

     <div className='py-5'>
      {/* <MultiCover/> */}
     </div>
    <div>
      {/* <BlogFooter/> */}
    </div>
         
      </div>
          
  )
}






  