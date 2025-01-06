import React from 'react'
import paypal from '../assets/icon/paypal.png'
import shopify from '../assets/icon/shopify.png'
import mastercard from '../assets/icon/mastercard.png'
import visa from '../assets/icon/visa.png'
export default function () {
  const img=["visa","mastercard","paypal","shopify"]
  return (
    <div>
    {/* Footer */}
  <footer className="py-2 text-gray-500">
   <div className="container mx-auto flex justify-between items-center">
     <p>&copy; 2023-24 themeforsest powered by pixelstrap</p>
     <div className="">
      {
        img.map((item,index)=>(
          <div key={index}>
            <img src={item} alt="" srcset="" />

          </div>
        ))

      }
      
     </div>

   </div>
 </footer>
</div>
  )
}
