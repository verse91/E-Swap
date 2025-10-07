'use client'
import HeroSection from '@/components/ui/homepage/herosection'
import GallerySkeleton from '@/components/ui/homepage/gallery-skeleton'
import Testimonials from '@/components/ui/homepage/testimonials-data'
import { NavbarMain } from '@/components/ui/navbar/navbar';
const HomePage = () => {
    return (
        <div className="relative min-h-screen w-full">
            <NavbarMain />

            <HeroSection />

            <GallerySkeleton />

            <Testimonials />
        </div>
    )
}

export default HomePage;
