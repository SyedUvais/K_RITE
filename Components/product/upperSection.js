"use client";
import React, {useState} from 'react';
import { IoHomeOutline, IoChevronForward } from "react-icons/io5";
import { useRouter } from 'next/navigation';

const UpperSection = ( ) =>
{
    return (
        <>
            <section className="bg-background-1 py-12 2xl:py-16 mb-10 flex flex-col justify-center items-center bg-no-repeat bg-right bg-cover">
            <h1 className="text-[30px] 2xl:text-4xl font-semibold text-center">
                All Grocery items
            </h1>
            <div className="text-base 2xl:text-lg flex justify-center items-center cursor-pointer space-x-2">
                <IoHomeOutline />
                <a href="/">Home</a>
                <IoChevronForward />
                <p className="font-bold">Products</p>
            </div>
            <form className='w-[90%] sm:w-[60%] md:w-[40%] h-16 2xl:h-20 cursor-pointer flex items-center relative mt-10'>
                    <input
                    name='searchField'
                    className="w-full h-full px-2 sm:px-6 rounded-lg 2xl:rounded-xl text-lg 2xl:text-xl focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder='What are you looking for...'
                    />

                    <button className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute right-6 h-6 w-6 2xl:h-8 2xl:w-8  text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-7a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    </button>
                </form>
            </section>
        </>
    )
};
export default UpperSection;