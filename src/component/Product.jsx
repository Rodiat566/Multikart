import React, { useState, useEffect } from "react";
import blog1 from "../assets/blog/blog1.jpg";
import blog2 from "../assets/blog/blog2.jpg";
import blog3 from "../assets/blog/blog3.jpg";
import blog4 from "../assets/blog/blog4.jpg";
import blog5 from "../assets/blog/blog5.jpg";
import blog6 from "../assets/blog/blog6.jpg";

const blog = [
  { img: blog1, date: "29 January 2018", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", author: "by: John Dio . 2 Comments" },
  { img: blog2, date: "25 January 2018", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", author: "by: John Dio . 2 Comments" },
  { img: blog3, date: "26 January 2018", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", author: "by: John Dio . 2 Comments" },
  { img: blog4, date: "29 January 2018", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", author: "by: John Dio . 2 Comments" },
  { img: blog5, date: "25 January 2018", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", author: "by: John Dio . 2 Comments" },
  { img: blog6, date: "26 January 2018", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", author: "by: John Dio . 2 Comments" },
];

export default function Blog() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(3); // Start slideshow from the 4th image
  const [direction, setDirection] = useState("right"); // Direction for slide transition
  const slideshowInterval = 3000; // Time in milliseconds for each slide

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("left"); // Set direction to left for the next slide
      setCurrentSlideIndex((prevIndex) =>
        prevIndex + 1 < blog.length ? prevIndex + 1 : 3 // Cycle through images starting from index 3
      );
    }, slideshowInterval);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const getImageIndices = () => {
    return [
      currentSlideIndex % blog.length,
      (currentSlideIndex + 1) % blog.length,
      (currentSlideIndex + 2) % blog.length,
    ];
  };

  const imageIndices = getImageIndices();

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-[#ff4c3b] text-base font-normal">Our Collection</h3>
        <h1 className="text-4xl font-bold">SPECIAL PRODUCTS</h1>
        <hr className="border-red-500 w-[5%]" />
      </div>

      {/* Static Three Images with Transition */}
      <div className="flex justify-center gap-4 mt-8">
        {imageIndices.map((index) => (
          <div key={index} className={`rounded-md p-4 w-[300px] transition-transform duration-500 ${direction === "left" ? "slide-in-left" : "slide-in-right"}`}>
            <img src={blog[index].img} alt={`Blog ${index + 1}`} className="rounded-t-md w-full hover:bg-[#ff4c3b] h-[200px] object-cover" />
            <div className="p-4">
              <h3 className="text-sm text-[#ff4c3b]">{blog[index].date}</h3>
              <h1 className="text-lg font-bold ">{blog[index].text}</h1>
              <hr className="border-red-500 w-[7%] bold" />
              <h5 className="text-sm text-gray-400">{blog[index].author}</h5>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}













