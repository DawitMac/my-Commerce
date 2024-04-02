import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'


const NavBar = ({cartLength}) => {
  return (
    <div className='fixed z-50 w-screen bg-white/10'>
    <div className='flex items-center justify-around my-6'>
        <Link to='/' ><h1 className='text-2xl font-serif cursor-pointer bg-white'>Dave-<span className='text-orange-500'>Commerce</span></h1></Link>
        <div>
          <div className='flex items-center w-96  rounded-3xl shadow-lg border bg-white gap-2 '>
            <input type='text' className='w-2/3  p-2 px-6 rounded-3xl caret-orange-500 focus:caret-orange-500 outline-none' />
            <button className='bg-black w-1/3  text-white font-sans font-semibold py-2 rounded-3xl drop-shadow-md'>Search</button>
          </div>
        </div>
        <DrawOutlineButton>
        <Link to='/cart'  className='flex p-2 shadow rounded relative bg-white'>
       <MdAddShoppingCart size={23} />
          
          <span className="absolute right-0 top-0 rounded-full bg-red-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartLength}</span>
          
        </Link>
        </DrawOutlineButton>
    </div>
    </div>
  )
}

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group  relative px-2 py-1 font-medium text-slate-900 transition-colors duration-[400ms] hover:text-indigo-900"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-orange-500 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-orange-500 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-orange-500 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-orange-500 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default NavBar



