"use client";

import { FormEvent, useEffect, useState } from "react";
import { LoaderIcon, LogIn, Mail, Lock, ArrowLeft, Shield, Zap, Globe, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/supabaseClients";
import { cn } from "@/lib/utils";
import { getAuthErrorMessage } from "@/lib/auth-utils";
import AuthBranding from "@/components/auth/auth-branding";
export default function SignInPage() {
    const router = useRouter();
    const { user } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    // Handle auth callback errors
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const errorParam = urlParams.get('error');
        const description = urlParams.get('description');

        if (errorParam) {
            console.log('Auth callback error:', errorParam, description);
            if (errorParam === 'unexpected_failure') {
                setError('Lỗi xác thực không mong muốn. Vui lòng kiểm tra cấu hình Supabase và thử lại.');
            } else if (errorParam === 'access_denied') {
                setError('Truy cập bị từ chối. Vui lòng thử lại.');
            } else if (errorParam === 'exchange_failed') {
                setError('Lỗi khi xác thực với Google. Vui lòng thử lại.');
            } else {
                setError(`Lỗi xác thực: ${description || errorParam}. Vui lòng thử lại.`);
            }
        }
    }, []);

    // Redirect to home when user is successfully authenticated
    useEffect(() => {
        if (user) {
            const timer = setTimeout(() => {
                router.push("/");
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [user, router]);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setSuccessMessage(null);

        if (!email.trim() || !password.trim()) {
            setError("Email và mật khẩu là bắt buộc.");
            return;
        }

        setLoading(true);

        try {
            const { error: signInError, data: signInData } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (signInError) {
                if (signInError.message.includes("Invalid login credentials")) {
                    setError(
                        <>
                            Email hoặc mật khẩu không đúng. Nếu chưa có tài khoản,{" "}
                            <Link
                                href="/sign-up"
                                className="underline font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                            >
                                đăng ký tại đây
                            </Link>
                            .
                        </> as any
                    );
                    return;
                }
                throw signInError;
            }

            if (!signInData?.user) {
                setError(
                    <>
                        Tài khoản không tồn tại. Vui lòng{" "}
                        <Link
                            href="/sign-up"
                            className="underline font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                        >
                            đăng ký tại đây
                        </Link>
                        .
                    </> as any
                );
                return;
            }

            setSuccessMessage("Đăng nhập thành công.");
            setEmail("");
            setPassword("");
        } catch (err) {
            console.error("Sign in error:", err);
            setError(getAuthErrorMessage(err));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        setError(null);

        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                },
            });

            if (error) {
                console.error('Google sign in error:', error);
                throw error;
            }
        } catch (err: any) {
            console.error('Google sign in failed:', err);
            setError(getAuthErrorMessage(err));
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen w-full flex overflow-hidden bg-background">
            {/* Left Side - Branding (same as before) */}
            <AuthBranding />
            {/* Right Side - Sign In Form */}
            <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center p-6 sm:p-8 lg:p-12">
                <div className="w-full max-w-md">
                    <Link
                        href="/"
                        className="inline-flex lg:hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group mb-8"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Quay lại</span>
                    </Link>

                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                                Chào mừng trở lại
                            </h1>
                            <p className="text-muted-foreground">
                                Đăng nhập để quản lý và theo dõi việc đổi pin
                            </p>
                        </div>

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

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
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

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium">Mật khẩu</Label>
                                <div className="relative group">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground/50 group-focus-within:text-green-600 dark:group-focus-within:text-green-500 transition-colors pointer-events-none" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        autoComplete="current-password"
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
                                        Đăng nhập ngay
                                        <LogIn className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>

                            <div className="relative flex items-center gap-4 py-2">
                                <div className="flex-1 h-px bg-border" />
                                <span className="text-xs text-muted-foreground font-medium">HOẶC</span>
                                <div className="flex-1 h-px bg-border" />
                            </div>

                            <Button
                                type="button"
                                variant="outline"
                                size="lg"
                                className="w-full h-12 text-base border-2 hover:bg-accent transition-all cursor-pointer"
                                onClick={handleGoogleSignIn}
                                disabled={loading}
                            >
                                {/* Google SVG */}
                                <svg className="w-5 h-5 mr-3" viewBox="0 0 256 262">
                                    <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                                    <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                                    <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" />
                                    <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                                </svg>
                                Tiếp tục với Google
                            </Button>
                        </form>

                        <div className="text-center text-sm pt-4">
                            <span className="text-muted-foreground">Chưa có tài khoản?</span>
                            {" "}
                            <Link
                                href="/sign-up"
                                className="text-green-600 dark:text-green-500 font-semibold hover:underline transition-colors"
                            >
                                Đăng ký ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

