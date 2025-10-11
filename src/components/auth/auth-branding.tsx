"use client";

import Link from "next/link";
import { Shield, Zap, Globe } from "lucide-react";

export default function AuthBranding() {
    return (
        <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative overflow-hidden">
            {/* Sophisticated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950 dark:via-green-950 dark:to-teal-950" />

            {/* Elegant curved overlay */}
            <div className="absolute inset-0">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="elegantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: 'rgb(16, 185, 129)', stopOpacity: 0.1 }} />
                            <stop offset="50%" style={{ stopColor: 'rgb(5, 150, 105)', stopOpacity: 0.05 }} />
                            <stop offset="100%" style={{ stopColor: 'rgb(20, 184, 166)', stopOpacity: 0.1 }} />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0,0 L1000,0 Q800,400 1000,800 L1000,1200 L0,1200 Z"
                        fill="url(#elegantGradient)"
                        className="dark:opacity-50"
                    />
                </svg>
            </div>

            {/* Floating orbs with blur */}
            <div className="absolute inset-0 overflow-hidden opacity-40">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-400/20 dark:bg-green-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-400/20 dark:bg-teal-500/10 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Decorative curved lines */}
            <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10">
                <svg className="absolute -top-20 -right-20 w-[600px] h-[600px]" viewBox="0 0 600 600">
                    <path
                        d="M300,50 Q450,150 400,300 T300,550"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        className="text-emerald-600 dark:text-emerald-400"
                        strokeDasharray="10,5"
                    />
                </svg>
                <svg className="absolute bottom-0 left-0 w-[500px] h-[500px]" viewBox="0 0 500 500">
                    <path
                        d="M50,400 Q150,300 300,350 T500,450"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        className="text-green-600 dark:text-green-400"
                        strokeDasharray="10,5"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
                {/* Logo & Brand */}
                <div className="space-y-3">
                    <Link href="/" className="inline-flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                            <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 dark:from-emerald-400 dark:to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                                <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
                            </div>
                        </div>
                        <div>
                            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 dark:from-emerald-300 dark:via-green-300 dark:to-teal-300 bg-clip-text text-transparent">
                                E-Swap
                            </span>
                        </div>
                    </Link>
                    <p className="text-emerald-700/70 dark:text-emerald-300/70 text-sm max-w-md pl-1">
                        Trung tâm Năng lượng Xanh 2-trong-1
                    </p>
                </div>

                {/* Main content */}
                <div className="space-y-10 max-w-lg">
                    <div className="space-y-4">
                        <h2 className="text-4xl xl:text-5xl font-bold leading-tight text-emerald-900 dark:text-emerald-50">
                            Đổi pin xe điện<br />
                            <span className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
                                nhanh như đổ xăng
                            </span>
                        </h2>
                        <p className="text-emerald-700/60 dark:text-emerald-300/60 text-base leading-relaxed">
                            Mạng lưới trạm đổi pin tự động với năng lượng mặt trời.<br />Đổi pin dưới 2 phút, sạch, xanh, bền vững.
                        </p>
                    </div>

                    {/* Feature cards */}
                    <div className="space-y-3">
                        {[
                            {
                                icon: Shield,
                                title: "Năng lượng xanh 100%",
                                description: "Sạc từ năng lượng mặt trời"
                            },
                            {
                                icon: Zap,
                                title: "Đổi pin dưới 2 phút",
                                description: "Nhanh như đổ xăng truyền thống"
                            },
                            {
                                icon: Globe,
                                title: "Mạng lưới rộng khắp",
                                description: "Tìm trạm dễ dàng mọi lúc"
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="group relative">
                                <div className="relative flex items-center gap-4 p-5 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-lg shadow-emerald-900/5 dark:shadow-emerald-500/5 hover:shadow-xl hover:shadow-emerald-900/10 dark:hover:shadow-emerald-500/10 hover:scale-[1.02] transition-all duration-300">
                                    <div className="relative flex-shrink-0">
                                        <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/90 to-green-600/90 dark:from-emerald-400/90 dark:to-green-500/90 flex items-center justify-center shadow-lg">
                                            <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-emerald-900 dark:text-emerald-100 text-base mb-0.5">
                                            {feature.title}
                                        </h3>
                                        <p className="text-emerald-700/60 dark:text-emerald-300/60 text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div></div>
            </div>

            {/* CSS animations */}
            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(20px, -50px) scale(1.1); }
                    50% { transform: translate(-20px, 20px) scale(0.9); }
                    75% { transform: translate(50px, 50px) scale(1.05); }
                }
                .animate-blob { animation: blob 7s infinite; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
            `}</style>
        </div>
    );
}
