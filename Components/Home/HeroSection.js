"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const HeroSection = () =>
{
    const [searchFieldVal, setSearchFieldVal] = useState('');
    const router = useRouter();

    console.log("searchfield val", searchFieldVal);

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        router.push(`/product?title=${searchFieldVal}`);
    };

    return (
        <div className='w-full h-[calc(100vh-80px)] bg-background-1 bg-cover flex flex-col items-center justify-center space-y-6 2xl:space-y-10 py-4 2xl:py-10 px-4'>
            <p className='text-[#0B4635] ext-white text-4xl lg:text-[55px] 2xl:text-6xl font-extrabold leading-snug text-center'>Order our latest products that <br /> keep you stylish & connected</p>

            <form onSubmit={handleSubmit} className='w-full sm:w-[80%] md:w-[40%] h-16 cursor-pointer flex items-center relative'>
                <input
                name='searchField'
                value={searchFieldVal}
                onChange={(e) => setSearchFieldVal(e.target.value)}
                className="w-full h-full px-2 sm:px-6 rounded-lg text-lg 2xl:text-2xl focus:outline-none focus:border-blue-500"
                type="text"
                placeholder='What are you looking for...'
                />

                <button className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="absolute right-6 h-6 w-6  text-gray-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-7a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                </button>
            </form>
        </div>
    )
}

export default HeroSection