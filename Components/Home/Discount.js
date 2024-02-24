import React from 'react'
import Image from 'next/image'

const Discount = () =>
{
  return (
    <div className='w-full h-[50vh] flex items-center justify-center px-0 sm:px-10 py-10 cursor-pointer'>
        <img className='w-full h-[50vh]' src="/AppSectionImages/discount-banner.jpg" alt="discount" />
    </div>
  );
}

export default Discount;