'use client'
import HeroSection from '@/components/homepage/herosection'
import GallerySkeleton from '@/components/homepage/gallery-skeleton'
import Testimonials from '@/components/homepage/testimonials-data'
import { NavbarMain } from '@/components/navbar/navbar';
import Footer from '@/components/footer';
const HomePage = () => {
    return (
        <div className="relative min-h-screen w-full">
            <NavbarMain />

            <HeroSection />

            <GallerySkeleton />

            <Testimonials />
            <Footer />
        </div>
    )
}

export default HomePage;
