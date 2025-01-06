import React from 'react';
import Header from '../component/Header';
import TitleHeader from '../component/TitleHeader';
import Slideshow from '../component/Slideshow';
import subbanner1 from '../assets/sub-banner1.jpg'
import subbanner2 from '../assets/sub-banner2.jpg'
import Offer from '../component/Offer';
import Exclusive from '../component/Exclusive'
import ExclusivProduct from '../component/ExclusivProduct'
import Product from '../component/Product'
import Instagram from '../component/Instagram';
import Icon from '../component/Icon';
import MultiCover from '../component/MultiCover';
import BlogFooter from '../component/BlogFooter';

export default function Home() {
  const headings = ["Women", "Men"];

  return (
    <div className=''>
      <TitleHeader />
      <Header />
      <Slideshow />

      <div className="h-5"></div>

        {/* Banner */}
     <div className='flex  justify-center p-8'>
     <div className="relative w-[40%] h-[40vh] mx-auto flex items-center bg-cover bg-center p-8"
        style={{
          backgroundImage: `url(${subbanner1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        

        <div className="flex flex-col items-center ml-10 absolute right-1">
          <h4 className="text-sm tracking-wide text-red-500">10% OFF</h4>
          <h1 className="text-4xl font-bold mt-2">{headings[1]}</h1>
        </div>
      </div>
      {/* Lady banner */}
      <div className="relative w-[40%] h-[40vh] mx-auto flex items-center bg-cover bg-center p-8"
        style={{
          backgroundImage: `url(${subbanner2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
       
        <div className="flex flex-col items-center ml-10 absolute right-0">
          <h4 className="text-sm tracking-wide text-red-500">10% OFF</h4>
          <h1 className="text-4xl font-bold mt-2">{headings[0]}</h1>
        </div>
      </div>
     </div>
     {/* offer */}
     <div className="py-5">
     <Offer />
     </div>

     {/* exclusive product*/}
     <div className="py-5">

     <Exclusive />
     </div>
     {/* exclusive product*/}
     <div className="py-5">
     <ExclusivProduct />
     </div>

     {/* Product product*/}
     <div className="py-5">
     <Product />
     </div>
     {/* Instagram images*/}
     <div className="py-5">
     <Instagram />
     </div>
     {/* Instagram images*/}
     <div className="py-5">
     <Icon />
     </div>
     {/* MULTIKART BLOGCOVER */}
     <div className="py-5">
     <MultiCover />
     </div>
     <div className="py-5">
     <BlogFooter />
     </div>

     
    </div>
  );
}
