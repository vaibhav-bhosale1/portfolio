"use client";
import React from 'react'

import Image from 'next/image'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'

const Contact = () => {
  return (
    <>
  <h1 className="text-center text-4xl md:text-6xl font-bold mb-10">
        Contact <span className="text-orange-400">Me</span>
      </h1>
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounde space-y-8 lg:space-y-0 lg:space-x-8' id='contact'>
      
      <div className='flex justify-center items-center'>
          <ul className='space-y-4'>
            <li className='flex items-center'>
              <Image src={phone} className='h-[110px] w-auto mr-6' alt='phone'/>
            <a href=""><p className='text-xl'>8830790274</p></a> 
            </li>
            <li className='flex items-center'>
              <Image src={mail} className='h-[110px] w-auto mr-6' alt='mail'/>
              <a href="mailto:textmevaibhav@gmail.com"><p className='text-xl'>textmevaibhav@gmail.com</p></a> 
            </li>
          </ul>
      </div>
         <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
            <h2 className='tex-5xl font-bold text-orange-400 mb-4'>
                Let's connect
            </h2>
            <p className='text-white/70 mb-6'>Sens me message and lets schedule a call!!</p>
            <form action="https://formbold.com/s/9Bm0O" method="POST" className='space-y-4'>
              <div className='grid md:grid-cols-2 gap-4'>
                 <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400  ' placeholder='first name'/>
                 <input type='text' name='name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400  ' placeholder='Last name'/>
                 <input type='email' name='email' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400  ' placeholder='Email'/>
                 <input type='phone' name='phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400  ' placeholder='Phone'/>
              </div>
              <textarea  className='bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400  ' placeholder='Your message'/>
              <button className='bg-orange-700 hover:bg-orange-400 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl ' type='submit'>Send Message</button>
            </form>
         </div>
    </div>
    </>
  )
}

export default Contact