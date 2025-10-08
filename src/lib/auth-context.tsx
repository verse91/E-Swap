"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "./supabaseClients";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    loginToken: string | null;
    signOut: () => Promise<void>;
    getUserCredits: (userId: string) => Promise<number>;
    refreshLoginToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const TOKEN_STORAGE_KEY = "eswap.loginToken";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loginToken, setLoginToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const persistToken = useCallback((token: string | null) => {
        setLoginToken(token);

        if (typeof window === "undefined") {
            return;
        }

        if (token) {
            window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
        } else {
            window.localStorage.removeItem(TOKEN_STORAGE_KEY);
        }
    }, []);

    const createLoginToken = useCallback(
        async (currentUser: User) => {
            try {
                const response = await fetch("/api/v1/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: currentUser.id,
                        email: currentUser.email ?? undefined,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Failed to create login token: ${response.status}`);
                }

                const data = (await response.json()) as { token?: string };

                if (!data.token || typeof data.token !== "string") {
                    throw new Error("Invalid login token response");
                }

                persistToken(data.token);
            } catch (error) {
                console.error("Failed to create login token:", error);
                persistToken(null);
            }
        },
        [persistToken]
    );

    const handleUserStateChange = useCallback(
        async (currentUser: User | null) => {
            setUser(currentUser);

            if (currentUser) {
                await createLoginToken(currentUser);
            } else {
                persistToken(null);
            }
        },
        [createLoginToken, persistToken]
    );

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const storedToken = window.localStorage.getItem(TOKEN_STORAGE_KEY);
        if (storedToken) {
            setLoginToken(storedToken);
        }
    }, []);

    useEffect(() => {
        // Handle OAuth redirect with access token in URL fragment
        const handleOAuthRedirect = async () => {
            if (typeof window === "undefined") return;
            
            const hashParams = new URLSearchParams(window.location.hash.substring(1));
            const accessToken = hashParams.get('access_token');
            const refreshToken = hashParams.get('refresh_token');
            
            if (accessToken && refreshToken) {
                console.log('OAuth redirect detected, processing tokens...');
                try {
                    const { data, error } = await supabase.auth.setSession({
                        access_token: accessToken,
                        refresh_token: refreshToken
                    });
                    
                    if (error) {
                        console.error('Error setting session from OAuth:', error);
                    } else {
                        console.log('OAuth session set successfully:', data);
                        // Clear the URL fragment
                        window.history.replaceState({}, document.title, window.location.pathname);
                    }
                } catch (error) {
                    console.error('Error processing OAuth tokens:', error);
                }
            }
        };

        // Get initial session
        const getSession = async () => {
            try {
                // First handle OAuth redirect if present
                await handleOAuthRedirect();
                
                const {
                    data: { session },
                } = await supabase.auth.getSession();
                await handleUserStateChange(session?.user ?? null);
            } catch (error) {
                console.error("Failed to get initial session:", error);
                setUser(null);
                persistToken(null);
            } finally {
                setLoading(false);
            }
        };

        getSession();

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange(async (_event, session) => {
            await handleUserStateChange(session?.user ?? null);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, [handleUserStateChange, persistToken]);

    // Handle OAuth redirects on every page load
    useEffect(() => {
        if (typeof window === "undefined") return;
        
        const handleOAuthRedirect = async () => {
            const hashParams = new URLSearchParams(window.location.hash.substring(1));
            const accessToken = hashParams.get('access_token');
            const refreshToken = hashParams.get('refresh_token');
            
            if (accessToken && refreshToken) {
                console.log('OAuth redirect detected on page load, processing tokens...');
                try {
                    const { data, error } = await supabase.auth.setSession({
                        access_token: accessToken,
                        refresh_token: refreshToken
                    });
                    
                    if (error) {
                        console.error('Error setting session from OAuth:', error);
                    } else {
                        console.log('OAuth session set successfully:', data);
                        // Clear the URL fragment
                        window.history.replaceState({}, document.title, window.location.pathname);
                    }
                } catch (error) {
                    console.error('Error processing OAuth tokens:', error);
                }
            }
        };

        handleOAuthRedirect();
    }, []);

    const signOut = async () => {
        try {
            await supabase.auth.signOut();
            persistToken(null);
            setUser(null);
        } catch (error) {
            console.error("Failed to sign out:", error);
            throw error; // Re-throw to allow caller to handle
        }
    };

    const getUserCredits = async (userId: string): Promise<number> => {
        if (!userId?.trim()) {
            console.error("Invalid userId provided");
            return 0;
        }
        try {
            const headers: Record<string, string> = {};
            if (loginToken) {
                headers.Authorization = `Bearer ${loginToken}`;
            }

            const response = await fetch(`/api/v1/users/${userId}/credits`, {
                headers,
            });

            if (!response.ok) {
                console.error(`Failed to fetch user credits: ${response.status} ${response.statusText}`);
                return 0;
            }

            const data = await response.json();
            return typeof data.credits === 'number' ? data.credits : (data.data?.credits || 0);
        } catch (error) {
            console.error("Error fetching user credits:", error);
            return 0;
        }
    };

    const refreshLoginToken = useCallback(async () => {
        if (!user) {
            persistToken(null);
            return;
        }

        await createLoginToken(user);
    }, [createLoginToken, persistToken, user]);

    return (
        <AuthContext.Provider
            value={{ user, loading, loginToken, signOut, getUserCredits, refreshLoginToken }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
