"use client";

import Footer from "@/components/footer";
import PricingSection from "@/components/PricingSection";
import { NavbarMain } from "@/components/ui/navbar/navbar";

export default function PricingPage() {
    return (
        <div>
            <NavbarMain />
            <div className="pt-24 bg-gradient-to-b from-green-50 via-white to-green-50">
                <PricingSection />
            </div>
            <Footer />
        </div>
    );
}
