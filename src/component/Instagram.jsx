import React from 'react';
import insta1 from '../assets/insta/insta1.jpg';
import insta2 from '../assets/insta/insta2.jpg';
import insta3 from '../assets/insta/insta3.jpg';
import insta4 from '../assets/insta/insta4.jpg';
// import insta5 from '../assets/insta/insta5.jpg';
import insta6 from '../assets/insta/insta6.jpg';
import insta7 from '../assets/insta/insta7.jpg';
import insta8 from '../assets/insta/insta8.jpg';

// icons


export default function Instagram() {
  const images = [insta1, insta2, insta3, insta4, insta6, insta7, insta8];
  

  return (
    <div>
      <div>
        <h1 className='font-bold text-2xl text-center'>#INSTAGRAM</h1>
      </div>
      <br />
      {/* Image container */}
      <div className="flex ">
        {images.map((image, index) => (
          <div key={index} className="m-2">
            <img src={image} alt={`Instagram image ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>

     


    </div>
  );
}
