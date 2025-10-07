'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { InfiniteSlider } from '@/components/ui/homepage/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/homepage/progressive-blur';
import Testimonials from '@/components/ui/homepage/testimonials-data';
const HeroSection = () => {
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
                        transform: translateY(-15px);
                    }
                }
                /* GPU optimization */
                .gpu-optimized {
                    will-change: transform;
                    transform: translateZ(0);
                    backface-visibility: hidden;
                }
            `}</style>
            <div className="relative bg-gradient-to-b from-green-50 to-green-100 overflow-hidden min-h-screen">
                {/* Animated background elements - Optimized for performance */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute top-40 right-10 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
                    <div className="absolute -bottom-8 left-20 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-lg opacity-50 animate-pulse" style={{ animationDelay: '4s', animationDuration: '4s' }}></div>
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
                                            E-Swap: Giải pháp năng lượng xanh 2-trong-1
                                        </h1>
                                        <p className={`mt-6 text-base text-black sm:text-xl transition-all duration-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                                            Hạ tầng đổi pin không phát thải đầu tiên, vận hành 100% bằng năng lượng mặt trời. Đổi pin đầy chỉ trong dưới 2 phút.
                                        </p>
                                        <Link
                                            href="#"
                                            className={`inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-300 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400 hover:scale-105 hover:shadow-xl hover:shadow-green-300/50 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                            style={{ transitionDelay: '300ms' }}
                                        >
                                            Xem demo vận hành
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
                                        src="/assets/model.png"
                                        alt="Electric motorbike mockup"
                                        width={600}
                                        height={900}
                                        priority
                                        style={{
                                            animation: 'ease-in-out',
                                            animationDelay: '0.5s',
                                            willChange: 'transform'
                                        }}
                                    />
                                    <div className="absolute top-20 -left-4 w-6 h-6 bg-green-300 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
                                    <div className="absolute top-40 -right-6 w-4 h-4 bg-green-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '3s', animationDuration: '3s' }}></div>
                                    <div className="absolute bottom-32 -left-2 w-3 h-3 bg-green-500 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '4s', animationDuration: '3s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="absolute bottom-10 left-0 right-0 py-8">
                    <div className="group relative m-auto max-w-6xl px-6">

                        <div className="flex flex-col items-center md:flex-row">
                            <motion.div
                                className="md:max-w-44 md:pr-6"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            >
                                <p className="text-end text-sm text-black">Lựa chọn hàng đầu của hàng loạt doanh nghiệp</p>
                            </motion.div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    durationOnHover={30}
                                    duration={60}
                                    gap={80}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-10 w-fit dark:invert"
                                            src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg"
                                            alt="Shopee Logo"
                                            height="264"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-10 w-fit dark:invert"
                                            src="https://upload.wikimedia.org/wikipedia/en/1/12/Grab_%28application%29_logo.svg"
                                            alt="Grab Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-10 w-fit dark:invert"
                                            src="https://upload.wikimedia.org/wikipedia/commons/8/80/Viettel_Post_logo.svg"
                                            alt="Viettel Post Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-10 w-fit dark:invert"
                                            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Lazada_%282019%29.svg"
                                            alt="Lazada Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-8 w-fit dark:invert"
                                            src="https://cdn.haitrieu.com/wp-content/uploads/2023/10/Logo-Cong-ty-Quoc-te-Son-Ha.png"
                                            alt="Son Ha Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-10 w-fit dark:invert"
                                            src="https://upload.wikimedia.org/wikipedia/commons/2/23/%E4%BD%90%E5%B7%9D%E6%80%A5%E4%BE%BF%E3%83%AD%E3%82%B4.svg"
                                            alt="Sagawa Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>

                                </InfiniteSlider>

                                <motion.div
                                    className="bg-linear-to-r from-green-100 absolute inset-y-0 left-0 w-20"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                ></motion.div>
                                <motion.div
                                    className="bg-linear-to-l from-green-100 absolute inset-y-0 right-0 w-20"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                ></motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <ProgressiveBlur
                                        className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                        direction="left"
                                        blurIntensity={1}
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <ProgressiveBlur
                                        className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                        direction="right"
                                        blurIntensity={1}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials />
        </>
    );
};

export default HeroSection;
