
"use client";

import { FormEvent, useState } from "react";
import { LoaderIcon, LogIn, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabaseClients";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAuthErrorMessage } from "@/lib/auth-utils";

type AuthFormProps = {
    mode: "sign-in" | "sign-up";
};

export default function AuthForm({ mode }: AuthFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
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
                const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
                if (signInError) throw signInError;
            } else {
                const { error: signUpError } = await supabase.auth.signUp({ email, password });
                if (signUpError) throw signUpError;
            }
        } catch (err) {
            setError(getAuthErrorMessage(err));
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>

            <div className="space-y-2">
                <Label>Mật khẩu</Label>
                <Input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} required />
            </div>

            {mode === "sign-up" && (
                <div className="space-y-2">
                    <Label>Xác nhận mật khẩu</Label>
                    <Input type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                </div>
            )}

            {error && <p className="text-red-600">{error}</p>}

            <Button type="submit" disabled={loading}>
                {loading ? <LoaderIcon className="animate-spin" /> : mode === "sign-in" ? "Đăng nhập" : "Đăng ký"}
            </Button>
        </form>
    );
}
