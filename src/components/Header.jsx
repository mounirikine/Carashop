import React from 'react'
import Logo from '../assets/img/logo.png'
import SmHeader from './SmHeader'
const Header = () => {
  return (
    <>
    <header className='flex justify-between items-center px-10 py-5 drop-shadow-xl'>
        <div className='w-4/12 flex px-10 items-center'>
            <img src={Logo} alt=""  />
            </div>
        <div className='w-4/12 flex gap-1 items-center'>
            <input type="text" class="h-full w-full px-5 py-3 rounded-md border-2 bg-transparent pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-violet-700 sm:text-sm outline-none" placeholder='Search' />
            <i class="ri-search-line h-full px-5 py-2 rounded-md border-2 text-black cursor-pointer" ></i>
        </div>
        <div className='w-4/12 flex justify-end gap-6 px-32'>
        <i class="ri-user-fill text-xl cursor-pointer hover:text-violet-700"></i>
        <i class="ri-heart-fill text-xl cursor-pointer hover:text-violet-700"></i>
        <i class="ri-shopping-cart-fill text-xl cursor-pointer hover:text-violet-700"></i>
        </div>
    </header>
    <SmHeader />
    </>
  )
}

export default Header