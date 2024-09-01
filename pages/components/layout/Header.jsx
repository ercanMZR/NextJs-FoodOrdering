import React, { useState } from 'react'
import Logo from '../ui/Logo'
import { FaUser } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import OutsideClickHandler from 'react-outside-click-handler';
import Title from '../ui/Title';
import Search from '../ui/Search';


const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
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
        <a href="#"><FaUser className='hover:text-primary transition-all'></FaUser></a>
        <a href="#"><FaShoppingBasket className='hover:text-primary transition-all'></FaShoppingBasket></a>
        <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
        <a href="#"><button className='btn-primary'>Order Online</button></a>
      </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
       
    </div>
  )
}

export default Header