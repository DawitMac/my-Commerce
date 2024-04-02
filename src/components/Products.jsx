import React, { useRef} from 'react'
import {motion } from 'framer-motion'
const Products = ({products , addToCart , loading}) => {
    const slider = useRef()
   console.log(products)
  return (
    <motion.div
    initial={{opacity : 0}}
    animate={{opacity : "100%"}}
    exit={{opacity : 0}}  className='flex flex-col items-center justify-center z-[-1]'>
            <div className='text-4xl font-normal font-mono my-10'>New Arrivals</div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-3 p-2 mx-10'>
                    {
                        products.slice(0,10).map((item)=>{
                            const newDescription = item.description.replace(/<\/?p>/g, "")
                    return(
                        <div key={item.id} className='flex flex-col items-center justify-center p-2 shadow mx-3 my-1  bg-black/10 text-center gap-3 rounded '>
                        <img src={item.image.url} className={`h-48 w-48  bg-black/0 `}/>
                        <div className='flex items-center justify-around w-full'>
                          <p className='text-md font-sans font-semibold'>{item.name}</p>
                          <p className='text-lg font-bold font-mono'>{item.price.formatted_with_symbol}</p>
                        </div>
                        <p className='text-sm font-light'>{newDescription}</p>
                        <button onClick={()=>{
                            addToCart(item.id , 1) 
                            console.log(item)
                        } } className='px-2 py-1 shadow-lg hover:scale-75 text-md font-serif duration-300 bg-orange-500 rounded-lg '>Add</button>
                    </div>
                    )})
                    }   
                    
                </div>
                <div className='text-4xl font-normal font-mono my-10'>Trending Products</div>
                <motion.div ref={slider} className='overflow-hidden cursor-grab  w-[90vw] bg-orange-100 '>
                <motion.div drag="x" dragConstraints={{right :222 , left: -222}} className='flex justify-around mx-3 my-1 gap-5 py-4'>
            {   
                products.slice(11,19).map((item , index)=>{
                    const newDescription = item.description.replace(/<\/?p>/g, "")
                    return(
                        <motion.div to={item.name} className='flex items-center flex-col justify-evenly border-2 rounded   drop-shadow-xl p-8  hover:bg-light-gray bg-black/10  text-center' key={index}
                        >
                           <img src={item.image.url} className='h-52 w-52   pointer-events-none'/>
                             <div className='flex items-center justify-around w-full'>
                               <p className='text-md font-sans font-semibold'>{item.name}</p>
                               <p className='text-lg font-bold font-mono'>{item.price.formatted_with_symbol}</p>
                               </div>
                         
                        <button onClick={()=>{
                            addToCart(item.id , 1) 
                            console.log(item)
                        } } className='px-2 py-1 shadow-lg hover:scale-75 text-md font-serif duration-300 bg-orange-500 rounded-lg '>Add</button>
                        </motion.div>
                    )
                   
                })
            }
             </motion.div>
            </motion.div>
            
            <div className='text-4xl font-normal font-mono my-10'>Top Categories</div>

            <div className='flex flex-row items-center justify-center gap-5'>
                  <div className='flex flex-col gap-3'>
                      <div className='relative h-52 w-52 p-3 bg-black/20 m-3'>
                        <img src={products[11]?.image.url} className='  bg-transparent'/>
                    </div>
                    <div className='relative h-52 w-52 p-3 bg-black/20 m-3'>
                        <img src={products[4]?.image.url} className='  bg-transparent'/>
                    </div>
                    </div>
                <div className='h-full'>
                       <div className='relative h-full p-3 bg-black/20 m-3'>
                        <img src={products[17]?.image.url} className='h-[428px] bg-transparent'/>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                      <div className='relative h-52 w-52 p-3 bg-black/20 m-3'>
                        <img src={products[0]?.image.url} className='  bg-transparent'/>
                    </div>
                    <div className='relative h-52 w-52 p-3 bg-black/20 m-3'>
                        <img src={products[5]?.image.url} className='  bg-transparent'/>
                    </div>
                    </div>
            </div>
        </motion.div>
  )
}

export default Products