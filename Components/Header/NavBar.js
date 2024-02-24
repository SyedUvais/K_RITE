"use client"
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cart from '../Cart/cart';
import UserContext from '../../Context/UserContext';
import { toast } from "react-toastify";
import Nameinitials from './Nameinitials';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { PiCaretUpBold } from "react-icons/pi";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { MdHelpCenter } from "react-icons/md";
import { FaQuestion } from "react-icons/fa6";
import { usePathname } from 'next/navigation';

const NavBar = () =>
{
  const { isAuthenticated } = useContext(UserContext)
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { logout } = useContext(UserContext);
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  const handleToggleCart = () =>
  {
    if(isAuthenticated)
    {
      setIsCartVisible(!isCartVisible)
    }
    else
    {
      toast.info("Please login first to check cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  const toggleProfileDropdown = () => {
    const profileIconRef = document.getElementById("profile_DropDownIcon");
    const menuRef = document.getElementById("profile_DropDown");

    profileIconRef.classList.toggle("rotate-180");
    menuRef.classList.toggle("hidden");
  };

  return (
    <>
      <section className="z-20 w-full h-20 shadow-md sticky top-0 bg-[#FFFFFF] transition duration-200 ease-in-out px-4 lg:px-10 flex flex-row justify-between items-center">
      <section className='flex gap-x-4 sm:gap-x-10 items-center'>
        <div onClick={handleNav} className='cursor-pointer md:hidden'>
          <AiOutlineMenu className='text-2xl' />
        </div>
        <Link href='/'>
          <Image src="/NavBarImages/Logo.png" alt="logo" width={60} height={60} />
        </Link>
        <section className={ menuOpen ? "fixed left-0 top-20 w-[80%] sm:w-[50%] h-[calc(100vh-80px)] bg-[#F7F9FC]  ease-in duration-500 flex flex-col justify-between pb-20"
            : "fixed left-[-100%] top-0"
        }>
          <section>
            <div className='py-4 px-4'>
              <div onClick={handleNav} className='cursor-pointer'>
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className='flex flex-col justify-between items-center space-y-10 font-semibold mt-10'>
              <Link href="/">Home</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/product">Product</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </section>
          <div className='flex justify-center gap-x-2'>
            <p className='text-lg font-bold inline'>Powered By:</p>
            <p className='text-lg inline'>ShopNow</p>
          </div>
        </section>
      </section>

      <section className='text-base 2xl:text-xl hidden md:flex flex-row justify-between items-center space-x-10 font-semibold'>
        <Link href="/" className={`${pathname === '/' ? 'opacity-40' : ''}`} >Home</Link>
        <Link href="/product" className={`${pathname === '/product' ? 'opacity-40' : ''}`} >Product</Link>
        <Link href="/faq" className={`${pathname === '/faq' ? 'opacity-40' : ''}`} >FAQ</Link>
        <Link href="/about" className={`${pathname === '/about' ? 'opacity-40' : ''}`} >About Us</Link>
        <Link href="/contact" className={`${pathname === '/contact' ? 'opacity-40' : ''}`} >Contact Us</Link>
      </section>

      <section className='flex flex-row justify-center items-center space-x-6 font-semibold'>
        <div className='flex flex-row justify-center items-center space-x-6'>
          <div className='flex flex-row justify-center items-center space-x-2 cursor-pointer'
            onClick={handleToggleCart}
          >
            <div className='relative'>
              <CgShoppingCart className='text-2xl 2xl:text-3xl text-[#a1a1a1]' />
              <span className='w-[20px] h-[20px] bg-[#02B290] rounded-full grid place-items-center absolute -top-[10px] left-[10px]'>
                <p className='text-white text-[10px] font-bold'>0</p>
              </span>
            </div>
            <p className='text-lg 2xl:text-xl'>Cart</p>
          </div>
          <div className='text-lg 2xl:text-xl bg-yello-300 flex flex-row justify-center items-center space-x-2'>
            {isAuthenticated ?
            <section className="cursor-pointer relative">
                  <div className="flex items-center gap-x-2">
                    <Nameinitials toggleProfileDropdown={toggleProfileDropdown} />
                    <PiCaretUpBold
                      id="profile_DropDownIcon"
                      onClick={toggleProfileDropdown}
                      className="text-[#747488] font-semibol text-base 2xl:text-lg inline-block rotate-180 duration-500"
                    />
                  </div>

                  <section
                    id="profile_DropDown"
                    className="bg-white hidden w-[70vw] sm:w-[40vw] md:w-[35vw] xl:w-[20vw] h-fit absolute top-[8vh] sm:top-[6vh] -right-2 border-[1px] border-solid border-[#d1d1db] rounded-xl px-2 sm:px-4 py-4 space-y-1"
                  >
                    <Link href='/' >
                      <div className="flex gap-3 items-center hover:bg-[#02b290] text-base 2xl:text-xl hover:text-white py-2 duration-300 px-2 rounded-md font-medium text-[#003975] tracking-wide">
                        <BiPurchaseTagAlt className="text-2xl 2xl:text-3xl" />
                          My Orders
                      </div>
                    </Link>
                    <div className="h-[4px] bg-[#f3f3f6]"></div>
                    <Link href='/faq'>
                    <div className="flex gap-3 items-center hover:bg-[#02b290] text-base 2xl:text-xl hover:text-white py-2 duration-300 px-2 rounded-md font-medium text-[#003975] tracking-wide">
                      <FaQuestion className="text-2xl 2xl:text-3xl" />
                        Faq
                    </div>
                    </Link>
                    <div className="h-[4px] bg-[#f3f3f6]"></div>
                    <Link href='/'>
                    <div className="flex gap-3 items-center hover:bg-[#02b290] text-base 2xl:text-xl hover:text-white py-2 duration-300 px-2 rounded-md font-medium text-[#003975] tracking-wide">
                      <MdHelpCenter className="text-2xl 2xl:text-3xl" />
                        Helpdesk & Support
                    </div>
                    </Link>
                    <div className="h-[4px] bg-[#f3f3f6]"></div>
                    <div
                      onClick={logout}
                      className="flex gap-3 items-center hover:bg-[#02b290] text-base 2xl:text-xl hover:text-white py-2 duration-300 px-2 rounded-md font-medium text-[#003975] tracking-wide"
                    >
                      <RiLogoutCircleRFill className="text-2xl 2xl:text-3xl" />
                      <button>
                        Log Out
                      </button>
                    </div>
                  </section>
                </section>
                : (
              <a href='/Login'>Sign In</a>
            )}
          </div>
        </div>
      </section>
      {isCartVisible && <Cart isCartVisible={isCartVisible} toggleCartVisibility={() => setIsCartVisible(!isCartVisible)} />}
    </section>
    </>
  );
}
export default NavBar;
