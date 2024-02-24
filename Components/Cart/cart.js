'use client';
import React, { useEffect, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { BsTrash } from 'react-icons/bs';
import Image from 'next/image';
import { toast } from 'react-toastify';
import Link from 'next/link';

const Cart = ({isCartVisible, toggleCartVisibility}) => {
 ;

  const [cartItemsWithDetails, setCartItemsWithDetails] = useState([]);

  return (
    <section
      className={`fixed top-0 right-0 h-full bg-white ${
        isCartVisible ? 'w-full xsm:w-[90vw] sm:w-[70vw] md:w-[60vw] xl:w-[35vw]' : 'w-0 hidden'
      } p-4 pb-16 transition-all duration-300 ease-in-out overflow-y-scroll z-50`}
    >
      <section className='flex justify-between items-center py-4'>
        <h2 className='text-lg xsm:text-2xl 2xl:text-3xl font-medium'>Shopping Cart</h2>
        <div className='flex items-center text-gray-500 hover:text-gray-700 space-x-4 lg:space-x-10'>
          <button
            className='flex justify-center items-center space-x-1 text-gray-400'
          >
            <BsTrash className='text-base xsm:text-xl 2xl:text-2xl' />
            <p className='text-base xsm:text-lg lg:text-base 2xl:text-lg'>Clear All</p>
          </button>
          <RxCross1
            className='text-xl 2xl:text-2xl font-bold cursor-pointer'
            onClick={toggleCartVisibility}
          />
        </div>
      </section>

      <hr className='mb-4' />

      {cartItemsWithDetails?.length ? (
        <>
          <section className='bg-re-300 space-y-6'>
            <div className='bg-yello-300 space-y-2'>
              {cartItemsWithDetails?.map((curItem) => (
                <div key={curItem._id} className='bg-blu-300 flex justify-between items-center'>
                  <div className='flex gap-x-4'>
                    <Image
                      src={curItem.image}
                      width='100'
                      height='100'
                      className='w-[80px] h-[80px] xsm:w-[160px] xsm:h-[110px] lg:w-[150px] lg:h-[100px] 2xl:w-[180px] 2xl:h-[130px] rounded-md'
                      alt={curItem.slug}
                    />
                    <div className='flex flex-col justify-center text-sm xsm:text-base 2xl:text-lg'>
                      <p>{curItem.title}</p>
                      <p>x {curItem.no_of_items}</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-center text-base 2xl:text-lg space-y-2'>
                    <p>&#8377;{curItem.price * curItem.no_of_items}</p>
                    <BsTrash
                      onClick={() => deleteItemFromCart(curItem._id)}
                      className='inline cursor-pointer text-xl 2xl:text-2xl'
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className='flex justify-between'>
              <div className='pr-6 space-y-2'>
                {setSubTotal(cartItemsWithDetails.reduce((total, curItem) => total + curItem.price * curItem.no_of_items
                    , 0)
                )}
                <p className='text-base 2xl:text-lg font-semibold'>Sub Total:</p>
                <p className='text-[15px] 2xl:text-[17px] font-normal text-[#595959]'>
                  Final price and discounts will be determined at the time of
                  payment processing.
                </p>
              </div>
              <p className='text-lg 2xl:text-[xl] font-semibold'>&#8377;{subTotal}</p>
            </div>

            <div>
              <Link href='/' onClick={toggleCartVisibility}>
                <button className='bg-[#02B290] text-lg 2xl:text-xl font-semibold w-full text-white py-3 rounded-lg'>
                  Proceed to Pay
                </button>
              </Link>
            </div>
          </section>
        </>
      ) : (
        <div className='flex flex-col justify-center items-center h-[90%]'>
          <Image
            src='/Productpageimages/empty-cart.png'
            alt='Empty Cart'
            width={200}
            height={100}
          />
          <p className='text-[20px] 2xl:text-[22px] font-semibold text-center'>
            Your cart is empty.
          </p>
          <p className='text-base 2xl:text-lg font-normal text-[#595959] text-center'>
            Please add product to your cart list.
          </p>
        </div>
      )}
    </section>
  );
};

export default Cart;
