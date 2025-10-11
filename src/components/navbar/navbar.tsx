"use client";
import { useAuth } from "@/lib/auth-context";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/navbar/resizable-navbar";
import { useState, useRef } from "react";
import Image from "next/image";
import { User } from "lucide-react";

function NavbarMain() {
    const { user, signOut, loading } = useAuth();


    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const navItems = [
        {
            name: "Tìm trạm",
            link: "/tim-tram",
        },
        {
            name: "Bảng giá",
            link: "/bang-gia",
        },
        {
            name: "Liên hệ",
            link: "/contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems
                        className="text-white"
                        items={navItems}
                    />
                    <div className="flex items-center gap-4">
                        {/* <NavbarButton */}
                        {/*     target="_blank" */}
                        {/*     rel="noopener noreferrer" */}
                        {/*     title="Star it on GitHub ⭐" */}
                        {/*     href="https://github.com/verse91/clippy-ytb" */}
                        {/*     variant="secondary" */}
                        {/*     className="flex items-center pr-1" */}
                        {/* > */}
                        {/*     <i className="bxl bx-github text-4xl text-white transition-all group-hover:text-gray-300 group-hover:scale-110"></i> */}
                        {/* </NavbarButton> */}
                        {loading ? (
                            <div className="p-3">
                                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            </div>
                        ) : user ? (
                            <div className="flex items-center gap-3">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <NavbarButton
                                            variant="secondary"
                                            className="rounded-full p-0 w-9 h-9 flex items-center justify-center"
                                        >
                                            {user.user_metadata?.picture ? (
                                                <Image
                                                    src={user.user_metadata.picture}
                                                    alt="User Avatar"
                                                    width={35}
                                                    height={35}
                                                    className="rounded-full"
                                                    onError={(e) => {
                                                        console.log('Avatar image failed to load, showing fallback icon');
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                    }}
                                                />
                                            ) : null}
                                            <div className={`w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${user.user_metadata?.picture ? 'hidden' : ''}`}>
                                                <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                            </div>
                                        </NavbarButton>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="w-56 z-[100]"
                                        align="start"
                                        sideOffset={8}
                                    >
                                        <DropdownMenuLabel>
                                            {user.user_metadata?.name || "User"}
                                        </DropdownMenuLabel>
                                        <DropdownMenuLabel className="text-xs text-muted-foreground -mt-3 mb-3">
                                            {user.email}
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            className="cursor-pointer"
                                            onClick={handleSignOut}
                                        >
                                            <i className="bx bxs-arrow-out-right-square-half text-sm text-white"></i>
                                            Sign out
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        ) : (
                            <NavbarButton href="/sign-in" variant="primary">Đăng nhập</NavbarButton>
                        )}
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            {loading ? (
                                <div className="flex justify-center p-3">
                                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                </div>
                            ) : user ? (
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 p-2">
                                        {user.user_metadata?.picture ? (
                                            <Image
                                                src={user.user_metadata.picture}
                                                alt="User Avatar"
                                                width={35}
                                                height={35}
                                                className="rounded-full border shadow"
                                                onError={(e) => {
                                                    console.log('Mobile avatar image failed to load, showing fallback icon');
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                }}
                                            />
                                        ) : null}
                                        <div className={`w-9 h-9 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center border shadow ${user.user_metadata?.picture ? 'hidden' : ''}`}>
                                            <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                                {user.user_metadata?.name || "User"}
                                            </span>
                                            <span className="text-xs text-neutral-500 dark:text-neutral-400">
                                                {user.email}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="border-t border-neutral-200 dark:border-neutral-700 pt-2">
                                        <button
                                            className="w-full text-left px-2 py-1 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
                                            onClick={handleSignOut}
                                        >
                                            <i className="bx bxs-arrow-out-right-square-half text-sm mr-2"></i>
                                            Sign out
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <NavbarButton href="/sign-in" variant="primary" className="w-full">Đăng nhập</NavbarButton>
                            )}
                            {/* <NavbarButton */}
                            {/*     target="_blank" */}
                            {/*     rel="noopener noreferrer" */}
                            {/*     title="Star it on GitHub ⭐" */}
                            {/*     href="https://github.com/verse91/clippy-ytb" */}
                            {/*     onClick={() => setIsMobileMenuOpen(false)} */}
                            {/*     variant="primary" */}
                            {/*     className="w-full flex items-center gap-2 justify-center" */}
                            {/* > */}
                            {/*     <i className="bxl bx-github text-2xl text-black transition-all group-hover:text-gray-300 group-hover:scale-110"></i> */}
                            {/*     Star it on GitHub */}
                            {/* </NavbarButton> */}
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

        </div>
    );
}

export { NavbarMain };
