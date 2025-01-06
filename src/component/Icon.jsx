import React from 'react'
import icon1 from '../assets/icon/icon1.png';
import icon2 from '../assets/icon/icon2.png';
import icon3 from '../assets/icon/icon3.png';
import icon4 from '../assets/icon/icon4.png';
import icon5 from '../assets/icon/icon5.png';
import icon6 from '../assets/icon/icon6.png';
import icon7 from '../assets/icon/icon7.png';
import icon8 from '../assets/icon/icon8.png';


export default function () {
    const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];
    
  return (
    <div>
         {/* Icon container */}
              <div className="flex  p-8">
        {icons.map((icon, index) => (
          <div key={index} className="m-2">
            <img src={icon} alt={`Instagram icon ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}
