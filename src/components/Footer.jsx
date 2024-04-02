import React from 'react'
import gmail from '../Images/gmail.png'
import twitter from '../Images/twitter.png'
import telegram from '../Images/telegram.png'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div
    initial={{opacity : 0}}
    animate={{opacity : "100%"}}
    exit={{opacity : 0}}
     className='flex text-center justify-around bg-black/80 md:p-15 p-6 gap-10 mt-12 dark:bg-slate-800 dark:border-t dark:border-slate-100 rounded-tr-3xl rounded-tl-3xl'>
      <div className='flex flex-col  gap-6'>
         <h1 className='text-2xl font-serif cursor-pointer  text-white'>Dave-<span className='text-orange-500'>Commerce</span></h1>
         <div className='flex items-center justify-center gap-6'>
            <a href='https://github.com/DawitMac' target="_tab"  className='' >
            <img src={twitter} alt='twitter'  className='h-8 w-8' />
          </a>
          <a href='https://github.com/DawitMac' target="_tab"  className=''>
          <img src={gmail} alt='gmail' className='h-8 w-8' />
          </a>
          <a href='https://github.com/DawitMac' target="_tab"  className=''>
          <img src={telegram} alt='telegram' className='h-8 w-8'/>
          </a>    
         </div>
      </div>
     <div className='flex gap-20'>
     <div className='flex flex-col'>
        <h1 className='text-xl font-bold text-white mb-4'>Shop</h1>
        <p className='text-lg font-normal text-gray-400 cursor-pointer hover:scale-105 duration-300 hover:text-gray-200 mb-2'>About Us</p>
        <p className='text-lg font- text-gray-400 cursor-pointer hover:scale-105 duration-300 hover:text-gray-200 mb-2'>Contact</p>
        <p className='text-lg font- text-gray-400 cursor-pointer hover:scale-105 duration-300 hover:text-gray-200 mb-2'>FAQ</p>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-xl font-bold text-white mb-4'>Categories</h1>
        <p className='text-lg font- text-gray-400 cursor-pointer hover:scale-105 duration-300 hover:text-gray-200 mb-2'>Electronics</p>
        <p className='text-lg font- text-gray-400 cursor-pointer hover:scale-105 duration-300 hover:text-gray-200 mb-2'>Shoes</p>
        <p className='text-lg font- text-gray-400 cursor-pointer hover:scale-105 duration-300 hover:text-gray-200 mb-2'>Summer</p>
        <p className='text-lg font-normal text-gray-400 cursor-pointer hover:scale-105 duration-300 hover:text-gray-200 mb-2'>Cosmotics</p>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-xl font-bold text-white mb-4'>Contact</h1>
        <p className='text-lg font-normal text-gray-400 cursor-pointer hover:scale-105 duration-300 hover:text-gray-200 mb-2'>+251 938247798</p>
        <p className='text-lg font-normal text-gray-400 cursor-pointer hover:scale-105 duration-300 hover:text-gray-200 mb-2'>mekonendawit5@gmail.com</p>
      </div>
     </div>
     </motion.div>
  )
}

export default Footer