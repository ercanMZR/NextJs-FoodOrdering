import React from 'react'
import Logo from '../ui/Logo'
import { FaUser } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <div className='h-[5.5rem] bg-secondary '>
     <div className='container mx-auto text-white flex justify-between items-center h-full'> 
      <div><Logo></Logo></div>
      <nav>
        <ul className='flex gap-x-2'>
          <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'><a href=""></a>HOME</li>
          <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'><a href=""></a>MENU</li>
          <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'><a href=""></a>ABOUT</li>
          <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'><a href=""></a>BOOK TABLE</li>
        </ul>
      </nav>
      <div className='flex gap-x-4 items-center'>
        <a href="#"><FaUser></FaUser></a>
        <a href="#"><FaShoppingBasket></FaShoppingBasket></a>
        <a href="#"><FaSearch /></a>
        <a href="#"><button className='btn-primary'>Order Online</button></a>
      </div>
      </div>
    </div>
  )
}

export default Header