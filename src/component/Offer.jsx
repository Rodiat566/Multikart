import React, { useState, useEffect } from 'react';
import trend from '../assets/trend.jpg';
import data from '../data/productDetails.json';
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
  console.log(product.image);
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <div className="relative group">
      <div className="border absolute bottom-0 ">
        {product.image.map((imgItem, imgIndex)=>(
          <img
          key={imgIndex}
          src={imgItem}
          alt={product.name}
          className="w-10 object-cover mt-1 "
        />
        ))}
      </div>

      <Link to={`/cartSinglePage/${product.id}-${product.name}`}> 
        <img
          src={product.image[0]}
          alt={product.name}
          className="w-full h-64 transition ease-in-out duration-700 object-cover group-hover:hidden right-full "
        />
        <img
          src={product.image[1]}
          alt={product.name}
          className="w- h-64 transition ease-in-out duration-700 object-cover group-hover:block hidden right-full "
        />
      </Link>
        
    </div>
      <div className="p-4">
      <div>
       <i className='pi pi-star-fill text-xs text-[#ffa200]' ></i>
       <i className='pi pi-star-fill text-xs text-[#ffa200]'></i>
       <i className='pi pi-star-fill text-xs text-[#ffa200]'></i>
       <i className='pi pi-star-fill text-xs text-[#ffa200]'></i>
       <i className='pi pi-star-fill text-xs text-[#ddd]'></i>
      </div>
        <h3 className="text-lg font-bold mb-2 text-gray-800">{product.name}</h3>
        <div className="text-red-500 font-bold">
          ${product.price.toFixed(2)}{' '}
          <span className="text-gray-500 line-through ml-2">${product.originalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default function Offer() {
  const [items] = useState(data.find((category) => category.category === 'NEW ARRIVAL')?.products || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 4;
  const slideshowInterval = 3000; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(items.length / itemsPerSlide)); 
    }, slideshowInterval);
    return () => clearInterval(interval); 
  }, [items]);

  const startIndex = currentIndex * itemsPerSlide;
  const currentItems = items.slice(startIndex, startIndex + itemsPerSlide); 

  return (
    <div>
      {/* Special offer text */}
      <div className="text-center mb-8">
        <h3 className="text-[#ff4c3b] text-base font-normal">Special Offer</h3>
        <h1 className="text-4xl font-bold">TOP COLLECTION</h1>
        <hr className="border-red-500 w-[5%] mx-auto" />
        <p className="text-gray-500 mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* Offer content */}
      <div className="flex justify-center gap-4 mt-8">
        {currentItems.map((product) => (
          <div key={product.id} className="rounded-md p-4 w-[300px] transition-transform duration-500">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Special 2023 trend */}
      <div
        className="relative w-full min-h-[70vh] mx-auto flex flex-col md:flex-row items-center bg-cover bg-center p-4 md:p-8"
        style={{
          backgroundImage: `url(${trend})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex justify-center items-center ">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-7xl text-[#ff4c3b] font-bold">2023</h1>
            <h1 className="text-5xl font-bold text-gray-800">FASHION TRENDS</h1>
            <h1 className="text-gray-500 text-2xl ">SPECIAL OFFER</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
