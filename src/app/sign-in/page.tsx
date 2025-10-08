"use client";

import { FormEvent, useEffect, useState } from "react";
import { LoaderIcon, LogIn, Mail, Lock, ArrowLeft, Sparkles, Shield, Zap, Globe, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/supabaseClients";
import { cn } from "@/lib/utils";
import TermsDrawer from "@/components/ui/terms-drawer";
import { getAuthErrorMessage } from "@/lib/auth-utils";

export default function SignInPage() {
    const router = useRouter();
    const { user } = useAuth();
    
    // Handle auth callback errors
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const error = urlParams.get('error');
        if (error === 'auth_callback_failed') {
            setError('Xác thực không thành công. Vui lòng thử lại.');
        }
    }, []);
    const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const resetForm = () => {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError(null);
        setSuccessMessage(null);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setSuccessMessage(null);

        if (!email.trim() || !password.trim()) {
            setError("Email và mật khẩu là bắt buộc.");
            return;
        }

        if (mode === "sign-up") {
            if (password.length < 6) {
                setError("Mật khẩu cần tối thiểu 6 ký tự.");
                return;
            }
            if (password !== confirmPassword) {
                setError("Mật khẩu nhập lại không khớp.");
                return;
            }
        }

        setLoading(true);

        try {
            if (mode === "sign-in") {
                const { error: signInError } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (signInError) {
                    throw signInError;
                }

                setSuccessMessage("Đăng nhập thành công.");
            } else {
                const { error: signUpError, data } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        emailRedirectTo: `https://eswapteam.vercel.app/`,
                    },
                });

                if (signUpError) {
                    throw signUpError;
                }

                if (data.session) {
                    setSuccessMessage("Tạo tài khoản và đăng nhập thành công.");
                } else {
                    setSuccessMessage("Đã tạo tài khoản. Vui lòng kiểm tra email để xác nhận.");
                }
            }

            resetForm();
        } catch (err) {
            console.error("Authentication error:", err);
            setError(getAuthErrorMessage(err));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setError(null);
        setSuccessMessage(null);

        setLoading(true);
        try {
            const { error: googleError } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `https://eswapteam.vercel.app/`,
                    queryParams: {
                        access_type: "offline",
                        prompt: "consent",
                    },
                },
            });

            if (googleError) {
                throw googleError;
            }

            setSuccessMessage("Đang chuyển tới Google để xác thực...");
        } catch (err) {
            console.error("Google sign-in error:", err);
            setError(getAuthErrorMessage(err));
        } finally {
            setLoading(false);
        }
    };

    // Redirect to home when user is successfully authenticated
    useEffect(() => {
        if (user) {
            const timer = setTimeout(() => {
                router.push("/");
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [user, router]);

    return (
        <div className="relative min-h-screen w-full flex overflow-hidden bg-background">
            {/* Left Side - Branding & Features */}
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
                    {/* Logo & Brand - More refined */}
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

                    {/* Main content - Elegant cards */}
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

                        {/* Refined feature cards */}
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
                                <div
                                    key={idx}
                                    className="group relative"
                                >
                                    {/* Glass card */}
                                    <div className="relative flex items-center gap-4 p-5 rounded-3xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-lg shadow-emerald-900/5 dark:shadow-emerald-500/5 hover:shadow-xl hover:shadow-emerald-900/10 dark:hover:shadow-emerald-500/10 hover:scale-[1.02] transition-all duration-300">
                                        {/* Icon container */}
                                        <div className="relative flex-shrink-0">
                                            <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all"></div>
                                            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/90 to-green-600/90 dark:from-emerald-400/90 dark:to-green-500/90 flex items-center justify-center shadow-lg">
                                                <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
                                            </div>
                                        </div>

                                        {/* Text content */}
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

                    {/* Bottom spacing */}
                    <div></div>
                </div>
            </div>

            {/* Right Side - Auth Form */}
            <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-6 sm:p-8 lg:p-12">
                <div className="w-full max-w-md">
                    {/* Back button for mobile */}
                    <Link
                        href="/"
                        className="inline-flex lg:hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Quay lại</span>
                    </Link>

                    {/* Form Container */}
                    <div className="space-y-8">
                        {/* Header */}
                        <div className="space-y-2">
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                {mode === "sign-in" ? "Chào mừng trở lại" : "Bắt đầu với E-Swap"}
                            </h1>
                            <p className="text-muted-foreground">
                                {mode === "sign-in"
                                    ? "Đăng nhập để quản lý và theo dõi việc đổi pin"
                                    : "Tạo tài khoản để trải nghiệm đổi pin siêu tốc"}
                            </p>
                        </div>

                        {/* Status messages */}
                        {(error || successMessage) && (
                            <div
                                className={cn(
                                    "rounded-xl border p-4 text-sm animate-in slide-in-from-top-2 duration-300",
                                    error
                                        ? "bg-red-50 border-red-200 text-red-800 dark:bg-red-950/50 dark:border-red-800 dark:text-red-200"
                                        : "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/50 dark:border-emerald-800 dark:text-emerald-200"
                                )}
                            >
                                {error ?? successMessage}
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </Label>
                                <div className="relative group">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/50 group-focus-within:text-green-600 dark:group-focus-within:text-green-500 transition-colors pointer-events-none" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10 h-12 text-base bg-background border-2 focus:border-green-600 dark:focus:border-green-500 transition-colors"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium">
                                    Mật khẩu
                                </Label>
                                <div className="relative group">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/50 group-focus-within:text-green-600 dark:group-focus-within:text-green-500 transition-colors pointer-events-none" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        autoComplete={mode === "sign-in" ? "current-password" : "new-password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10 pr-10 h-12 text-base bg-background border-2 focus:border-green-600 dark:focus:border-green-500 transition-colors"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-foreground transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password (Sign Up) */}
                            {mode === "sign-up" && (
                                <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                                    <Label htmlFor="confirm-password" className="text-sm font-medium">
                                        Xác nhận mật khẩu
                                    </Label>
                                    <div className="relative group">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/50 group-focus-within:text-green-600 dark:group-focus-within:text-green-500 transition-colors pointer-events-none" />
                                        <Input
                                            id="confirm-password"
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            autoComplete="new-password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="pl-10 pr-10 h-12 text-base bg-background border-2 focus:border-green-600 dark:focus:border-green-500 transition-colors"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-foreground transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Terms agreement */}
                            <div className="text-center pt-2">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Bằng việc xác nhận bạn đã đồng ý với{" "}
                                    <TermsDrawer
                                        trigger={
                                            <span className="text-green-600 dark:text-green-500 hover:underline font-medium cursor-pointer">
                                                Điều khoản sử dụng
                                            </span>
                                        }
                                    />
                                </p>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full h-12 cursor-pointer text-base bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30 transition-all"
                                disabled={loading}
                            >
                                {loading ? (
                                    <LoaderIcon className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        {mode === "sign-in" ? "Đăng nhập ngay" : "Tạo tài khoản"}
                                        <LogIn className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>

                            {/* Divider */}
                            <div className="relative flex items-center gap-4 py-2">
                                <div className="flex-1 h-px bg-border" />
                                <span className="text-xs text-muted-foreground font-medium">HOẶC</span>
                                <div className="flex-1 h-px bg-border" />
                            </div>

                            {/* Google Sign In */}
                            <Button
                                type="button"
                                variant="outline"
                                size="lg"
                                className="w-full h-12 text-base border-2 hover:bg-accent transition-all cursor-pointer"
                                onClick={handleGoogleSignIn}
                                disabled={loading}
                            >
                                <svg className="w-5 h-5 mr-3" viewBox="0 0 256 262">
                                    <path
                                        fill="#4285F4"
                                        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                    />
                                    <path
                                        fill="#34A853"
                                        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                    />
                                    <path
                                        fill="#FBBC05"
                                        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                                    />
                                    <path
                                        fill="#EB4335"
                                        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                    />
                                </svg>
                                Tiếp tục với Google
                            </Button>
                        </form>

                        {/* Toggle Sign In/Up */}
                        <div className="text-center text-sm pt-4">
                            <span className="text-muted-foreground">
                                {mode === "sign-in" ? "Chưa có tài khoản?" : "Đã có tài khoản?"}
                            </span>
                            {" "}
                            <button
                                type="button"
                                onClick={() => {
                                    setMode(mode === "sign-in" ? "sign-up" : "sign-in");
                                    resetForm();
                                }}
                                className="text-green-600 dark:text-green-500 font-semibold hover:underline transition-colors cursor-pointer"
                            >
                                {mode === "sign-in" ? "Đăng ký ngay" : "Đăng nhập"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for animations */}
            <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
}
