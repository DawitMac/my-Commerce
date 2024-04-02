import React from 'react'
import { Audio } from 'react-loader-spinner'
const Loadder = () => {
  return (
    <div className='w-[30vw] h-[30vh] flex items-center justify-center bg-black/40 rounded-xl'>
    <Audio
  height="80"
  width="80"
  radius="9"
  color="orange"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
    </div>
  )
}



export default Loadder