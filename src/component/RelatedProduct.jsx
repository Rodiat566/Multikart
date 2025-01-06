import React, { useEffect, useState } from 'react'
import productNew from '../data/newProducts.json';

export default function RelatedProduct() {
  const [productsnw, setproductsnw] = useState([]);

  useEffect(() => {
    setproductsnw(productNew); // Set products on load
  }, []);
  return (
    <div>
      <div className="">
        <h2 className='uppercase font-bold text-2xl'>related product</h2>
        <hr className='' />
      </div>
      <div className="flex mx-auto gap-5 p-7  w-full">
  {productsnw.map((item, index) => (
    <div key={index} className="">
      {/* Product Image */}
      <div className="">
        <img
          src={item.image}
          alt={item.name}
          className="h-22  w-25 object-cover "
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

    </div>
  )
}
