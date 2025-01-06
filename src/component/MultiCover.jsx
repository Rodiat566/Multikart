import React from 'react';
import logo from "../assets/logo.png";

const Content = () => {
  return (
    <div className="bg-[#F9F9F9] w-full">
      {/* Newsletter Signup */}
      <div className="py-8">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-xl font-bold text-[#212529]">KNOW IT ALL FIRST!</h2>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md w-[500px] focus:outline-none"
            />
            <div>
              <a
                href="#"
                className="inline-block uppercase mt-4 bg-red-500 text-white px-6 py-2 md:px-10 md:py-3 border border-red-500 rounded-md hover:bg-white hover:text-black hover:border-red-500 transition-all duration-300"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="flex text-gray-500 gap-8 container mx-auto py-8">
        <div className='space-y-2'>
          <img
            src={logo}
            alt="Description of my image"
            style={{ width: "150px", height: "auto" }}
          />
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br /> enim ad minim veniam,</p>
          <ul className='flex gap-8'>
            <li><a href="#" className='pi pi-facebook text-black hover:text-red-500'></a></li>
            <li><a href="#" className='pi pi-google text-black hover:text-red-500'></a></li>
            <li><a href="#" className='pi pi-twitter text-black hover:text-red-500'></a></li>
            <li><a href="#" className='pi pi-instagram text-black hover:text-red-500'></a></li>
            <li><a href="#" className='pi pi-wifi text-black hover:text-red-500'></a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl mb-4 text-[#212529]">MY ACCOUNT</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Womens</a></li>
            <li><a href="#" className="hover:text-red-500">Clothing</a></li>
            <li><a href="#" className="hover:text-red-500">Accessories</a></li>
            <li><a href="#" className="hover:text-red-500">Featured</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl mb-4 text-[#212529]">WHY WE CHOOSE</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Shipping & Return</a></li>
            <li><a href="#" className="hover:text-red-500">Secure Shopping</a></li>
            <li><a href="#" className="hover:text-red-500">Gallery</a></li>
            <li><a href="#" className="hover:text-red-500">Affiliates</a></li>
            <li><a href="#" className="hover:text-red-500">Contacts</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl mb-4 text-[#212529]">STORE INFORMATION</h3>
          <ul className='flex flex-col space-y-2'>
            <li className='pi pi-map-marker'>Multikart Demo Store, Demo Store India 345-659</li>
            <li className='pi pi-phone'>Call Us: 123-456-7898</li>
            <li className='pi pi-email'>Email Us: Support@Fiot.Com</li>
            <li className='pi pi-lock'>Fax: 123456</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Content;
