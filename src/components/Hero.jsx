import React from 'react'
import home from '../Images/hero1.jpg'

const Hero = () => {
  return (
    <div className='flex items-center pt-6 h-[70vh] justify-center w-full  md:px-20 mb-6 z-[-1]'>
      <div className='w-1/2 hidden md:flex md:items-center md:justify-center mx-auto md:mt-16'>
        <img src={home} alt='hero_img' />
       </div>
       <span className='md:text-center  md:w-1/3 bg-white flex flex-col items-center justify-center mx-auto'>
        <h1 className='capitalize md:text-3xl text-2xl font-mono font-normal leading-8 mb-2'>
         Unleash Your Shopping Potential:
        </h1>
        <p className='capitalize md:text-xl text-2xl font-mono font-normal leading-8 mb-8'>
          Discover the perfect online store
        </p>
       
        <button onClick={()=>{}} className='md:place-self-center font-sans px-6 py-2 bg-orange-500 text-white text-md font-semibold rounded hover:shadow-lg hover:scale-110 duration-500'>Shop Now</button>
       </span>
       
     </div>
  )
}

export default Hero

// import React , {Suspense} from 'react'
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import CanvasLoader from './CanvasLoader'
// // import {three} from 'three'

// export const Computers = () => {
//     const computer = useGLTF('./3d-shoe/scene.gltf')
//   return (
//     <mesh>
//         <hemisphereLight intensity={0.15} groundColor="black" />
//         <pointLight intensity={1} />
//         <spotLight position={[-20 , 50 ,10]}
//                    angle={0.12}
//                    intensity={1}
//                    castShadow
//                    shadow-mapSize={1024} />
//         <primitive object={computer.scene}
//                    scale={0.75}
//                    position={[0 , -3.25 , -1.5]}
//                    rotation={[-0.01 , -0.2 , -0.1]} />
//     </mesh>
//   )
// }

// export const ComputersCanvas = ()=>{
//     return(
//         <Canvas frameloop='demand'
//                 shadows
//                 camera={{position : [ 20 , 3 ,5 ] , fov:25}}
//                 gl={{preserveDrawingBuffer : true}}>
//             <Suspense fallback={<CanvasLoader />}>
//                 <OrbitControls
//                               enableZoom={false}
//                               maxPolarAngle={Math.PI/2}
//                               minPolarAngle={Math.PI/2} />
//                <Computers />
//             </Suspense>
//             <Preload all />
//         </Canvas>
//     )
// }

