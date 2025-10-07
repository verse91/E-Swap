'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <>
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
            `}</style>
            <div className="relative bg-gradient-to-b from-green-50 to-green-100 overflow-hidden min-h-screen">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                    <div className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
                </div>
                {/* <header className={`absolute inset-x-0 top-0 z-10 w-full transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}> */}
                {/*     <div className="px-4 mx-auto sm:px-6 lg:px-8"> */}
                {/*         <div className="flex items-center justify-between h-16 lg:h-20"> */}
                {/*             <div className="flex-shrink-0"> */}
                {/*                 <Link href="/" className="flex group"> */}
                {/*                     <Image */}
                {/*                         className="w-auto h-8 transition-transform duration-200 group-hover:scale-110" */}
                {/*                         src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/logo.svg" */}
                {/*                         alt="Logo" */}
                {/*                         width={120} */}
                {/*                         height={32} */}
                {/*                     /> */}
                {/*                 </Link> */}
                {/*             </div> */}
                {/**/}
                {/*             <button */}
                {/*                 type="button" */}
                {/*                 onClick={() => setMenuOpen(!menuOpen)} */}
                {/*                 className="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800" */}
                {/*             > */}
                {/*                 <svg */}
                {/*                     className={`${menuOpen ? 'hidden' : 'block'} w-6 h-6 mr-2`} */}
                {/*                     xmlns="http://www.w3.org/2000/svg" */}
                {/*                     fill="none" */}
                {/*                     viewBox="0 0 24 24" */}
                {/*                     stroke="currentColor" */}
                {/*                 > */}
                {/*                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /> */}
                {/*                 </svg> */}
                {/**/}
                {/*                 <svg */}
                {/*                     className={`${menuOpen ? 'block' : 'hidden'} w-6 h-6 mr-2`} */}
                {/*                     xmlns="http://www.w3.org/2000/svg" */}
                {/*                     fill="none" */}
                {/*                     viewBox="0 0 24 24" */}
                {/*                     stroke="currentColor" */}
                {/*                 > */}
                {/*                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> */}
                {/*                 </svg> */}
                {/**/}
                {/*                 Menu */}
                {/*             </button> */}
                {/**/}
                {/*             <div className="hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10"> */}
                {/*                 <Link href="#" className={`text-base text-black transition-all duration-300 hover:text-opacity-80 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{transitionDelay: '100ms'}}> */}
                {/*                     Features */}
                {/*                 </Link> */}
                {/*                 <Link href="#" className={`text-base text-black transition-all duration-300 hover:text-opacity-80 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{transitionDelay: '150ms'}}> */}
                {/*                     Solutions */}
                {/*                 </Link> */}
                {/*                 <Link href="#" className={`text-base text-black transition-all duration-300 hover:text-opacity-80 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{transitionDelay: '200ms'}}> */}
                {/*                     Resources */}
                {/*                 </Link> */}
                {/*                 <Link href="#" className={`text-base text-black transition-all duration-300 hover:text-opacity-80 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{transitionDelay: '250ms'}}> */}
                {/*                     Pricing */}
                {/*                 </Link> */}
                {/*             </div> */}
                {/**/}
                {/*             <Link */}
                {/*                 href="#" */}
                {/*                 className={`hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white hover:scale-105 hover:shadow-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} */}
                {/*                 style={{transitionDelay: '300ms'}} */}
                {/*             > */}
                {/*                 Try for free */}
                {/*             </Link> */}
                {/*         </div> */}
                {/*     </div> */}
                {/* </header> */}
                {/**/}
                {/**/}

                <section className="overflow-hidden min-h-screen flex items-center">
                    <div className="flex flex-col lg:flex-row lg:items-stretch w-full">
                        <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                            <div className="h-full px-4 py-16 sm:px-6 lg:px-24 2xl:px-32">
                                <div className="flex flex-col justify-between flex-1 h-full">
                                    <div>
                                        <h1 className={`text-4xl font-bold text-black sm:text-6xl xl:text-7xl transition-all duration-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
                                            Take control of your commute's future
                                        </h1>
                                        <p className={`mt-6 text-base text-black sm:text-xl transition-all duration-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                                            The first zero-emission swapping infrastructure, powered by 100% solar energy. Get a full battery in under 2 minutes.                                        </p>
                                        <Link
                                            href="#"
                                            className={`inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-300 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400 hover:scale-105 hover:shadow-xl hover:shadow-green-300/50 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                            style={{ transitionDelay: '300ms' }}
                                        >
                                            Get started for free
                                            <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </Link>
                                    </div>

                                    {/* <div className={`mt-8 border-t-2 border-black lg:mt-auto sm:mt-14 transition-all duration-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}> */}
                                    {/*     <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14"> */}
                                    {/*         <p className="text-base font-semibold text-black">App available on</p> */}
                                    {/**/}
                                    {/*         <div className="flex items-center mt-5 space-x-5 sm:mt-0"> */}
                                    {/*             <Link href="#" className="block transition-all duration-200 hover:opacity-80 focus:opacity-80 hover:scale-105 hover:-translate-y-1"> */}
                                    {/*                 <Image */}
                                    {/*                     className="w-auto rounded h-14 sm:h-16 transition-all duration-200" */}
                                    {/*                     src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png" */}
                                    {/*                     alt="App Store" */}
                                    {/*                     width={140} */}
                                    {/*                     height={64} */}
                                    {/*                 /> */}
                                    {/*             </Link> */}
                                    {/**/}
                                    {/*             <Link href="#" className="block transition-all duration-200 hover:opacity-80 focus:opacity-80 hover:scale-105 hover:-translate-y-1"> */}
                                    {/*                 <Image */}
                                    {/*                     className="w-auto rounded h-14 sm:h-16 transition-all duration-200" */}
                                    {/*                     src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png" */}
                                    {/*                     alt="Play Store" */}
                                    {/*                     width={140} */}
                                    {/*                     height={64} */}
                                    {/*                 /> */}
                                    {/*             </Link> */}
                                    {/*         </div> */}
                                    {/*     </div> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>

                        <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1 flex items-center justify-center">
                            <div className={`transition-all duration-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
                                <div className="relative">
                                    <Image
                                        className="w-full animate-bounce"
                                        src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png"
                                        alt="Phone Mockup"
                                        width={600}
                                        height={900}
                                        priority
                                        style={{
                                            animation: 'float 4s ease-in-out infinite',
                                            animationDelay: '0.5s'
                                        }}
                                    />
                                    <div className="absolute top-20 -left-4 w-8 h-8 bg-green-300 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
                                    <div className="absolute top-40 -right-6 w-6 h-6 bg-green-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '3s' }}></div>
                                    <div className="absolute bottom-32 -left-2 w-4 h-4 bg-green-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '4s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HeroSection;
