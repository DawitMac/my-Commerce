import React  from 'react'
import Hero from './Hero'
import Products from './Products'
import Loadder from './Loadder'

const Home = ({products , addToCart , loading , setLoading}) => {
  
  return (
    <div className='relative'>
       {
            loading &&  <div className='fixed w-screen h-[90vh] bg-transparent flex items-center justify-center z-10'>
                              <Loadder />
                        </div>
           }
        <Hero />
        <Products loading={loading} setLoading={setLoading} products={products} addToCart={addToCart} />
    </div>
  )
}

export default Home