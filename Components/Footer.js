"use client"
import React, { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';

function Footer() {

    return (
        <section className='w-full h-auto px-4 md:px-10 py-10'>
            <div className='w-full h-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0'>
                <section className='md:w-[35%] flex flex-col items-start space-y-8'>
                    <Image src="/NavBarImages/Logo.png" alt="logo" width={100} height={100}></Image>
                    <p className='text-lg 2xl:text-xl text-[#424542]'>An E-commerce platform to sell the products online which keep you stylish, connected, and ahead of the curve.</p>
                    <div className='flex flex-row justify-start items-center space-x-6'>
                        <a href="/" target="_blank"><Image src="/FooterImages/social/facebook.svg" alt="facebook" width="30" height="30"></Image></a>
                        <a href="/" target="_blank"><Image src="/FooterImages/social/twitter.svg" alt="twitter" width="30" height="30"></Image></a>
                        <a href="/" target="_blank"><Image src="/FooterImages/social/instagram.svg" alt="instagram" width="30" height="30"></Image></a>
                        <a href="/" target="_blank"><Image src="/FooterImages/social/youtube.svg" alt="youtube" width="30" height="30"></Image></a>
                    </div>
                </section>
                <section className="md:w-[35%] flex flex-col space-y-8 ">
                    <h3 className="text-xl 2xl:text-2xl font-semibold">About Us</h3>
                    <div className="flex flex-col space-y-3 text-lg 2xl:text-xl text-[#424542]">
                        <Link href="/">About Us</Link>
                        <Link href="/">Contact Us</Link>
                        <Link href="/">Our Team</Link>
                        <Link href="/">Customer Support</Link>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-xl 2xl:text-2xl font-semibold">Subscribe Now</h3>
                        <p className="text-lg 2xl:text-xl font-normal text-[#424542]">Subscribe your email for newsletter and featured news based on your interest</p>
                    </div>

                <div className='h-16 2xl:h-20 relative border-2 bg-grey-500 rounded-lg '>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-5 w-4 2xl:w-[18px] h-4 2xl:h-[18px]">
                        <g clipPath="url(#clip0)"><path d="M16.3125 2.25H1.68751C0.75696 2.25 0 3.00696 0 3.93751V14.0625C0 14.9931 0.75696 15.75 1.68751 15.75H16.3125C17.243 15.75 18 14.9931 18 14.0625V3.93751C18 3.00696 17.243 2.25 16.3125 2.25ZM16.3125 3.375C16.3889 3.375 16.4616 3.39085 16.5281 3.41854L9 9.94319L1.47188 3.41854C1.53834 3.39089 1.61105 3.375 1.68747 3.375H16.3125ZM16.3125 14.625H1.68751C1.37715 14.625 1.125 14.3729 1.125 14.0625V4.60711L8.6314 11.1127C8.73743 11.2044 8.86872 11.25 9 11.25C9.13128 11.25 9.26256 11.2044 9.3686 11.1127L16.875 4.60711V14.0625C16.875 14.3729 16.6228 14.625 16.3125 14.625Z" fill="#B3B3B3"></path></g>
                    </svg>
                    <input className="w-[80%] h-full px-6 mx-6 rounded-lg text-lg 2xl:text-xl focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder='Write your email here'
                    />

                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-3 top-5 w-[18px] 2xl:w-5 h-[18px] 2xl:h-5 false">
                        <g clipPath="url(#clip0)"><path d="M18.809 8.21633L2.67252 1.52062C1.99272 1.23851 1.22471 1.36262 0.668264 1.84434C0.111818 2.32613 -0.120916 3.06848 0.0609589 3.78164L1.49725 9.41414H8.52951C8.85311 9.41414 9.11549 9.67648 9.11549 10.0001C9.11549 10.3237 8.85315 10.5861 8.52951 10.5861H1.49725L0.0609589 16.2186C-0.120916 16.9318 0.111779 17.6741 0.668264 18.1559C1.22584 18.6386 1.99393 18.7611 2.67256 18.4796L18.809 11.7839C19.5437 11.4791 20.0001 10.7955 20.0001 10.0001C20.0001 9.20469 19.5437 8.52113 18.809 8.21633Z" fill="#02B290"></path></g><defs><clipPath id="clip0"><rect width="20" height="20" fill="white"></rect></clipPath></defs>
                    </svg>
                </div>
                </section>
                <section className="md:w-[25%] flex flex-col space-y-8">
                    <div className="text-xl 2xl:text-2xl font-semibold">Our Information</div>
                    <div className="flex flex-col space-y-3 text-lg 2xl:text-xl text-[#424542]">
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/">Terms & Conditions</Link>
                        <Link href="/">Shipping Policy</Link>
                        <Link href="/">Refund & Cancellation</Link>
                    </div>
                </section>
            </div>
            <div id="horizontalRuler" className="w-[90vw] h-[1px] bg-black mx-auto opacity-20 mt-10"></div>
            <p className="text-center mt-6 text-lg 2xl:text-xl">© Copyright 2024 ShopNow  All rights reserved</p>
        </section>

    )
}

export default Footer