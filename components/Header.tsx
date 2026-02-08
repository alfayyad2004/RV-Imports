"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone, Search, Menu, X, CarFront, Wrench, BadgeDollarSign, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/95 backdrop-blur-xl supports-[backdrop-filter]:bg-black/60">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative h-16 w-60">
                        <Image
                            src="/logo-new.png"
                            alt="Ryan's Vehicle Imports"
                            fill
                            className="object-contain brightness-0 invert"
                            priority
                            sizes="240px"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/inventory" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center">
                        <CarFront className="mr-2 h-4 w-4" />
                        Inventory
                    </Link>
                    <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center">
                        <Wrench className="mr-2 h-4 w-4" />
                        Services
                    </Link>
                    <Link href="/financing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center">
                        <BadgeDollarSign className="mr-2 h-4 w-4" />
                        Financing
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center space-x-4">
                    {/* Mobile Search - just link to inventory */}
                    <Link href="/inventory" className="md:hidden">
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" aria-label="Search Inventory">
                            <Search className="h-5 w-5" />
                        </Button>
                    </Link>
                    <a href="https://wa.me/18684959394" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
                        <Button variant="premium" aria-label="Contact via WhatsApp">
                            <Phone className="mr-2 h-4 w-4" />
                            WhatsApp Us
                        </Button>
                    </a>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-white md:hidden hover:bg-white/10"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col md:hidden h-[100dvh]"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                <div className="relative h-10 w-32">
                                    <Image
                                        src="/logo-new.png"
                                        alt="Ryan's Vehicle Imports"
                                        fill
                                        className="object-contain brightness-0 invert" // Preserves aspect ratio
                                    />
                                </div>
                            </Link>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/10"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <X className="h-6 w-6" />
                            </Button>
                        </div>

                        <div className="flex flex-col p-8 space-y-6">
                            <Link href="/" className="text-2xl font-bold text-white" onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                            <Link href="/inventory" className="text-2xl font-bold text-gray-300" onClick={() => setIsMenuOpen(false)}>
                                Inventory
                            </Link>
                            <Link href="/services" className="text-2xl font-bold text-gray-300" onClick={() => setIsMenuOpen(false)}>
                                Services
                            </Link>
                            <Link href="/financing" className="text-2xl font-bold text-gray-300" onClick={() => setIsMenuOpen(false)}>
                                Financing
                            </Link>
                            <Link href="/contact" className="text-2xl font-bold text-gray-300" onClick={() => setIsMenuOpen(false)}>
                                Contact Us
                            </Link>

                            <div className="pt-8 space-y-4">
                                <a href="https://wa.me/18684959394" target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button variant="premium" className="w-full h-12 text-lg">
                                        <Phone className="mr-2 h-5 w-5" />
                                        WhatsApp Us
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
