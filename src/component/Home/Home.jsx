import React from 'react'
import avataer from '../../assets/avataaars.svg'
export default function Home() {
  let src='../assets/avataaars.svg'
  return <>
  <div className='py-4 home container-fluid d-flex justify-content-center align-items-center'>
    <div className='p-5 text-white text-center '>
      <img src={avataer} alt="" className='image-fluid pb-4 p-5'/>
      <h1 className='title'>START FRAMWORK</h1>
     <div className='dash py-2 position-relative'>
       <i class="fa-solid fa-star"></i>
     </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>

  </div>
  </>
}
