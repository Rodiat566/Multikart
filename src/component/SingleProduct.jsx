import React, { useEffect, useState } from 'react';
import productDetails from '../data/productDetails.json';
import { Link, useParams } from 'react-router-dom';


export default function SingleProduct() {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(1);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0); // State for selected image

    useEffect(() => {
        const allProducts = productDetails.flatMap(category => category.products);
        const selectedProduct = allProducts.find(item => item.id === parseInt(id));
        if (selectedProduct) {
            setProduct(selectedProduct);
        } else {
            setProduct({ error: "Product not found" });
        }
    }, [id]);
    
    if (!product) return <div>Loading...</div>;
    if (product.error) return <div>{product.error}</div>;

    return (
        // Single product content 
        <div className="container flex  p-6 border border-red-600" >
            <div className="flex justify-between">
                {/* Product Images */}
                <div className="relative ">
                    {/* Main Image */}
                    <img
                        src={product.image[selectedImageIndex]} // Display the selected image
                        alt={product.name}
                        className=" w-24 border "
                    />
                    {/* Image Thumbnails */}
                    <div className="flex mt-2">
                        {product.image.map((imgItem, imgIndex) => (
                            <div key={imgIndex} className="border border-gray-300 mr-2">
                                <img
                                    src={imgItem}
                                    alt={product.name}
                                    className="w-20 h-24 object-cover cursor-pointer"
                                    onClick={() => setSelectedImageIndex(imgIndex)} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
                {/* Product Details */}
               <div className='border border-black'>
               <div className="  ">
                    <h1 className="text-2xl font-bold mb-4 uppercase">{product.name}</h1>
                    <p className=' flex gap-2'>
                    <span className="line-through text-gray-400 ml-2">
                            ${product.originalPrice}
                        </span>
                        <span className='text-red-500  font-bold'>40% Off</span>
                    </p>
                    <p className="text-gray-500 mb-4">
                       
                        <span className=" text-2xl text-red-500 font-semibold">
                            ${product.price}
                        </span>
                    </p>

                    <div className="flex flex-col mb-4">
                        <div className="flex gap-2">
                            {product.colour.map((bgpink, index) => (
                                <div
                                    key={index}
                                    className={`w-6 h-6 rounded-full ${bgpink} border`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {product.sizes && (
                        <div className=" border-t  mt-4 border-dotted flex flex-col mb-4">
                            <div className='border-dotted'></div>
                            <div className="flex justify-between">
                                <h3 className="font-medium mb-2">Select Size</h3>
                                <h3 className="font-medium mb-2">Size Chart</h3>
                            </div>
                            <div className="flex gap-2">
                                {product.sizes.map((size, index) => (
                                    <span
                                        key={index}
                                        className="inline-block px-4 py-2 border rounded-full cursor-pointer text-gray-500"
                                    >
                                        {size.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="p-4">
                        <h4 className='text-xs text-red-500 font-semibold'>IN STOCK</h4>
                        <h1 className='uppercase text-xl font-bold mt-2'>Quantity</h1>
                        <div className="flex flex-col items-center justify-center mt-4">
                            <div className="border border-gray-300 rounded-md flex items-center w-32 p-2">
                                <i
                                    onClick={() => setCount(Math.max(1, count - 1))} // Prevent count from going below 1
                                    className="pi pi-angle-left border-r h-7 pr-4 cursor-pointer text-gray-600"
                                />
                                <h3 className="text-lg font-bold mx-2">{count}</h3>
                                <i
                                    onClick={() => setCount(count + 1)}
                                    className="pi pi-angle-right border-l h-7 pl-4 cursor-pointer text-gray-600"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                         className="inline-block mt-2 bg-red-500 text-white px-3 py-2 border cursor-pointer border-red-500 rounded-md hover:bg-white hover:text-black hover:border-red-500 transition-all duration-300"
                         onClick={() => addToCart({ ...product, quantity: count })}
                        >

                              Add to Cart
                        </button>
                        <a className="inline-block mt-2 bg-red-500 text-white px-3 py-2 border border-red-500 rounded-md hover:bg-white hover:text-black hover:border-red-500 transition-all duration-300">
                            Buy Now
                        </a>
                    </div>

                    <div className='border-t border-dotted  mt-4 pt-4'>
                        <h2>Product Details</h2>
                        <h3 className=' text-xs text-gray-500'>
                            It is a long established fact that a reader will be distracted by  <br /> the readable content of a page when looking at its layout.   The point  <br />of using Lorem Ipsum is that it has a more-or-less normal distribution  <br />of letters.  It is a long established fact that a reader will be distracted by  <br /> the readable content of a page when looking at its layout.   The point  <br />of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
                        </h3>
                    </div>

                    <div className='border-t border-dotted mt-4'>
                        <h6>Share It</h6>
                        <ul className='flex gap-3' style={{ color: 'grey' }}>
                            <li><a href="#" className='pi pi-facebook hover:text-red-500'></a></li>
                            <li><a href="#" className='pi pi-google hover:text-red-500'></a></li>
                            <li><a href="#" className='pi pi-twitter hover:text-red-500'></a></li>
                            <li><a href="#" className='pi pi-instagram hover:text-red-500'></a></li>
                            <li><a href="#" className='pi pi-wifi hover:text-red-500'></a></li>
                        </ul>
                    </div>
                </div>
               </div>
        </div>
    );
}
