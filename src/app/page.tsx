'use client'
import HeroSection from '@/components/ui/homepage/herosection'
import { NavbarMain } from '@/components/ui/navbar/navbar';
const HomePage = () => {
    return (
        <div className="relative min-h-screen w-full">
            <NavbarMain />

            <HeroSection />
        </div>
    )
}

export default HomePage;
