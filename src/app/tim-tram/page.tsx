"use client";

import Footer from '@/components/footer';
import NearestStationsDemo from '@/components/NearestStationsDemo';
import { NavbarMain } from '@/components/navbar/navbar';

export default function FeaturesPage() {
    return (
        <div>
            <NavbarMain />
            <div className="pt-20 md:pt-24 bg-gradient-to-b from-green-50 via-white to-green-50">
                <NearestStationsDemo />
            </div>
            <Footer />
        </div>
    );
}
