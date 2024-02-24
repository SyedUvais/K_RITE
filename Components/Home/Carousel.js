'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import categories_Data from './categories-data';
import Link from 'next/link';

const Carousel = () =>
{
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  const handleClick = (category) =>
  {
    router.push(`/product?category=${category}`)
  }

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      console.log("syed client width", scrollAmount);
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='w-full h-auto mt-16 relative px-4'>
      <div className="text-center space-y-2">
        <h2 className="text-3xl 2xl:text-4xl font-bold">What product you love to order</h2>
        <p className="text-[#59595E] text-lg leading-7 lg:text-xl 2xl:text-2xl">Here order your favorite item from different categories</p>
      </div>
      <section className='bg-blu-300 flex justify-around items-center mt-10 2xl:mt-16'>
        <span onClick={scrollLeft} className='px-2 py-2 rounded-full text-[#333333] hover:bg-slate-600 hover:text-white duration-300'>
          <FaChevronLeft className="text-2xl md:text-3xl" />
        </span>
        <section
          ref={scrollContainerRef}
          className="bg-yello-300 overflow-x-auto scrollbar-hide whitespace-nowrap"
          style={{ overflowX: 'hidden' }}
        >
          {categories_Data.map((curitem, index) => (
            <Link href='/product'>
              <div key={index} onClick={() => handleClick(curitem.parent)} className="bg-re-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 inline-flex flex-col justify-center items-center cursor-pointer">
                <Image
                className="rounded-full w-[200px] h-[200px] sm:w-[170px] sm:h-[170px] 2xl:w-[200px] 2xl:h-[200px] hover:scale-110 duration-300"
                  src={curitem.image}
                  alt={curitem.title}
                  width="170"
                  height="170"
                />
                <div className="text-lg 2xl:text-xl opacity-90 text-center text-[#444444] font-semibold capitalize mt-4">
                {curitem.title}
                </div>
              </div>
            </Link>
          ))}
        </section>
        <span onClick={scrollRight} className='px-2 py-2 rounded-full text-[#333333] hover:bg-slate-600 hover:text-white duration-300'>
          <FaChevronRight className="text-2xl md:text-3xl" />
        </span>
      </section>
    </div>
  );
}
export default Carousel;
