import React, { useEffect, useState } from 'react';
import productNew from '../data/newProducts.json';

export default function ProductSlide() {
  const [productsnw, setproductsnw] = useState([]); // Holds all products
  const [currentIndex, setCurrentIndex] = useState(0); // Current index for slideshow

  const itemsPerSlide = 3; // Number of items to display per slide

  useEffect(() => {
    setproductsnw(productNew); // Set products on load
  }, []);

  // Handle Left Slide
  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productsnw.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };

  // Handle Right Slide
  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= productsnw.length ? 0 : prevIndex + itemsPerSlide
    );
  };
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg ">NEW PRODUCT</h2>
        <div className="flex gap-2">
            <i className="pi pi-angle-left text-2xl text-gray-600 hover:text-black"  onClick={slideLeft}></i>

            <i className="pi pi-angle-right text-2xl text-gray-600 hover:text-black"  onClick={slideRight}></i>
        </div>
      </div>
      <hr className="my-2" />

      {/* Slideshow Content */}
      <div className="flex flex-col">
  {productsnw.slice(currentIndex, currentIndex + itemsPerSlide).map((item, index) => (
    <div key={index} className="flex items-center p-4 gap-4 ">
      {/* Product Image */}
      <div className="">
      {console.log(item.image)}
        <img
          src={item.image}
          alt={item.name}
          className="h-20 object-cover "
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <div>
          {Array(item.rating)
            .fill()
            .map((_, i) => (
              <i key={i} className="pi pi-star-fill text-xs text-[#ffa200]"></i>
            ))}
          {Array(5 - item.rating)
            .fill()
            .map((_, i) => (
              <i key={i} className="pi pi-star-fill text-xs text-[#ddd]"></i>
            ))}
        </div>
        <h2 className="text-sm font-medium text-gray-800">{item.name}</h2>
        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">${item.originalPrice}</span>
        </p>
      </div>
    </div>
  ))}

</div>

      {/* Related products */}

      

    </div>
  );
}
