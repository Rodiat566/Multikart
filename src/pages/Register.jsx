import React from 'react'
import Header from '../component/Header'
import TitleHeader from '../component/TitleHeader'
import MultiCover from '../component/MultiCover'
import BlogFooter from '../component/BlogFooter'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>
       <TitleHeader/>
            <Header/>

            <div className="flex justify-between  items-center px-10 py-4   bg-[#F9F9F9]">
        <h2>Register</h2>
        <ul className='flex gap-2'>
          <li><Link to='/'>Home</Link></li>
          <li>/</li>
          <li>Register</li>
        </ul>
      </div>
      {/* <MultiCover/>
      <BlogFooter/> */}
    </div>
  )
}
