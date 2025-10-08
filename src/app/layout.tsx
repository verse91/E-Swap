import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { NavbarMain } from "@/components/ui/navbar/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "E-Swap",
    description: "Battery",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://cdn.boxicons.com/fonts/basic/boxicons.min.css"
                    rel="stylesheet"
                ></link>
                <link
                    href="https://cdn.boxicons.com/fonts/brands/boxicons-brands.min.css"
                    rel="stylesheet"
                ></link>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
            >
                <AuthProvider>
                    <NavbarMain />
                    {children}
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
