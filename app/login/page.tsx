"use client";
import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const supabase = createClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            router.push('/admin');
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
            <div className="w-full max-w-md p-8 bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl">
                <div className="flex justify-center mb-8">
                    <div className="relative w-24 h-24">
                        <Image
                            src="/logo-new.png"
                            alt="Ryan's Vehicle Imports"
                            fill
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                </div>
                <h1 className="text-2xl font-bold mb-6 text-center">Admin Access</h1>
                {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-10 px-3 rounded bg-black border border-zinc-700 focus:border-red-600 outline-none"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-10 px-3 rounded bg-black border border-zinc-700 focus:border-red-600 outline-none"
                            required
                        />
                    </div>
                    <Button type="submit" variant="premium" className="w-full">
                        Log In
                    </Button>
                </form>
            </div>
        </div>
    )
}
