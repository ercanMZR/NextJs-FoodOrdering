import React, { useState } from 'react'
import Logo from '../ui/Logo'
import { FaUser } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import OutsideClickHandler from 'react-outside-click-handler';
import Title from '../ui/Title';
import Search from '../ui/Search';
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";



const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  return (
    <div className='h-[5.5rem] bg-secondary '>
     <div className='container mx-auto text-white flex justify-between items-center h-full'> 
      <div><Logo></Logo></div>
      <nav  className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
        <ul className='flex gap-x-2 sm:flex-row flex-col items-center'>
          <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'><a href=""></a>HOME</li>
          <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'><a href=""></a>MENU</li>
          <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'><a href=""></a>ABOUT</li>
          <li className='px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer'><a href=""></a>BOOK TABLE</li>
        </ul>
      </nav>
      {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
      <div className='flex gap-x-4 items-center'>
        <a href="#"><FaUser className='hover:text-primary transition-all'></FaUser></a>
        <a href="#"><FaShoppingBasket className='hover:text-primary transition-all'></FaShoppingBasket></a>
        <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#" className="md:inline-block hidden sm"><button className='btn-primary'>Order Online</button></a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
      </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
       
    </div>
  )
}

export default Header