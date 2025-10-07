'use client'
import HeroSection from '@/components/ui/homepage/herosection'
import Testimonials from '@/components/ui/homepage/testimonials-data'
import { NavbarMain } from '@/components/ui/navbar/navbar';
const HomePage = () => {
    return (
        <div className="relative min-h-screen w-full">
            <NavbarMain />

            <HeroSection />

            <Testimonials />
        </div>
    )
}

export default HomePage;
