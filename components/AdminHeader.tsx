"use client"

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogOut, ExternalLink, LayoutDashboard } from 'lucide-react'
import Image from 'next/image'

export function AdminHeader() {
    const router = useRouter()
    const supabase = createClient()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
        router.refresh()
    }

    return (
        <header className="border-b border-zinc-800 bg-zinc-950 px-4 py-3 md:px-6 md:py-4">
            <div className="mx-auto max-w-7xl flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center justify-between md:justify-start gap-4 md:gap-8 w-full md:w-auto">
                    <Link href="/admin" className="flex items-center gap-2">
                        <div className="relative h-8 w-24">
                            <Image
                                src="/logo-new.png"
                                alt="R&R Admin"
                                fill
                                className="object-contain brightness-0 invert"
                                priority
                            />
                        </div>
                        <span className="text-sm font-semibold text-zinc-400 border-l border-zinc-700 pl-3 ml-1 whitespace-nowrap">
                            Admin Portal
                        </span>
                    </Link>

                    {/* Mobile Menu Toggle could go here but we'll stick to simple actions for now */}
                    <div className="md:hidden flex items-center gap-2">
                        <Button
                            variant="destructive"
                            size="icon"
                            onClick={handleLogout}
                            className="h-8 w-8 bg-red-900/20 text-red-400 border border-red-900/50"
                            aria-label="Logout"
                        >
                            <LogOut className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
                    <nav className="flex items-center gap-2">
                        <Link href="/admin">
                            <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white px-2">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                <span className="hidden sm:inline">Dashboard</span>
                            </Button>
                        </Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        <Link href="/" target="_blank">
                            <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                <span className="hidden sm:inline">View Site</span>
                            </Button>
                        </Link>

                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={handleLogout}
                            className="hidden md:flex bg-red-900/20 text-red-400 hover:bg-red-900/40 hover:text-red-300 border border-red-900/50"
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
