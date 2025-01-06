import React, { useState } from "react";
import productDetails from '../data/productDetails.json';
import { Link } from "react-router-dom";



const ProductCard = ({ product }) => (
  <div className="  shadow-sm w-full   min-h-[100%] rounded-lg overflow-hidden flex flex-col p-4">
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
          className="w-[100%] h-64 transition bg-cover ease-in-out duration-700 object-cover group-hover:hidden right-full "
        />
        <img
          src={product.image[1]}
          alt={product.name}
          className="w-[100%] h-64 transition bg-cover ease-in-out duration-700 object-cover group-hover:block hidden right-full "
        />
      </Link>
        
    </div>
    {/* <p>{product.image[0]}</p> */}
    <div className="p-4 ">
      <div>
        {Array(4).fill().map((_, i) => (
          <i key={i} className='pi pi-star-fill text-xs text-[#ffa200]'></i>
        ))}
        <i className='pi pi-star-fill text-xs text-[#ddd]'></i>
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-800">{product.name}</h3>
      <div className="text-red-500 font-bold">
        ${product.originalPrice.toFixed(2)}{' '}
        <span className="text-gray-500 line-through ml-2">
          ${product.price.toFixed(2)}
        </span>
        <div>
          {product.colour.map((colorItem, colorIndex) => (
            <div key={colorIndex} className={`w-4 h-4 ${colorItem} rounded-full`}></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const EcommercePage = () => {
  const [activeCategory, setActiveCategory] = useState('NEW ARRIVAL');

  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-center mb-8">
        {['NEW ARRIVAL', 'FEATURED', 'SPECIAL'].map(category => (
          <h4
            key={category}
            className={`px-4 py-2 mx-2 rounded-md cursor-pointer ${activeCategory === category ? 'text-black font-bold' : 'text-gray-500 hover:text-red-500'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </h4>
        ))}
      </div>

      <div className="flex flex-wrap px-16">
        {productDetails.map(category => (
          category.category === activeCategory && category.products.map((product, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
              <ProductCard product={product} />
            </div>
          ))
        ))}
      </div>

      <br />
      <div>
        <hr className='p-6' />
        <div className="flex justify-between">
          {[
            { icon: 'pi pi-truck', title: 'free shipping', desc: 'Free Shipping World Wide' },
            { icon: 'pi pi-clock', title: '24 X 7 service', desc: 'online service for 24 x 7' },
            { icon: 'pi pi-microphone', title: 'festival offer', desc: 'new online special festival offer' }
          ].map(({ icon, title, desc }) => (
            <div className="car flex gap-2" key={title}>
              <i className={`${icon}`} style={{ color: '#ff4c3b', fontSize: '2.5rem' }}></i>
              <div>
                <h3 className='uppercase hover:text-[#ff4c3b]'>{title}</h3>
                <p className='text-sm text-gray-400'>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className='p-6' />
      </div>
    </div>
  );
};

export default EcommercePage;
