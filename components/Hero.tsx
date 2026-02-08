"use client"

import { useState, useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Search, BadgeDollarSign, Phone } from 'lucide-react'

export function Hero() {
    const router = useRouter()
    const [make, setMake] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [availableMakes, setAvailableMakes] = useState<string[]>([])

    useEffect(() => {
        const fetchMakes = async () => {
            const supabase = createClient()
            const { data } = await supabase
                .from('vehicles')
                .select('make')
                .neq('status', 'Sold') // Only show makes currently available or in transit

            if (data) {
                const uniqueMakes = Array.from(new Set(data.map(v => v.make))).filter(Boolean).sort()
                setAvailableMakes(uniqueMakes)
            }
        }
        fetchMakes()
    }, [])

    const handleSearch = () => {
        const params = new URLSearchParams()
        if (make) params.set('make', make)
        if (minPrice) params.set('minPrice', minPrice)
        if (maxPrice) params.set('maxPrice', maxPrice)
        router.push(`/inventory?${params.toString()}`)
    }

    return (
        <section className="relative min-h-screen w-full bg-black flex flex-col justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-landcruiser.png"
                    alt="Toyota Land Cruiser Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                    sizes="(max-width: 768px) 768px, (max-width: 1200px) 1200px, 1920px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>

            <div className="container relative z-10 h-full flex flex-col justify-center px-4 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex items-center gap-2 text-primary font-medium tracking-wider uppercase"
                    >
                        <ShieldCheck className="h-5 w-5" />
                        <span>Trusted by Trinidad for 15+ Years</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
                        Drive Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                            Dream Car Today
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                        The easiest way to buy Roll On Roll Off and Local Used vehicles in Trinidad & Tobago.
                        Transparent pricing, financing assistance, and quality guaranteed.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20 group" asChild>
                            <Link href="/inventory">
                                Browse Inventory
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-green-600 hover:bg-green-700 text-white transition-all hover:scale-105 shadow-lg shadow-green-500/20 group" asChild>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfplMGX4N4Kk6NaqLVSsw507SWmNEeyHCfc95lQIIjyMVk3IQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                                <BadgeDollarSign className="mr-2 h-5 w-5" />
                                Apply for Financing
                            </a>
                        </Button>
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 shadow-lg shadow-white/10 group" asChild>
                            <a href="https://wa.me/18686811447" target="_blank" rel="noopener noreferrer">
                                <Phone className="mr-2 h-5 w-5" />
                                WhatsApp Us
                            </a>
                        </Button>
                    </div>

                    {/* Search Bar - Restored & Positioned Below */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="relative z-20 p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl mt-12 max-w-4xl shadow-2xl"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="space-y-1">
                                <label htmlFor="make-select" className="text-xs text-gray-400 ml-1 uppercase tracking-wider">Make</label>
                                <select
                                    id="make-select"
                                    className="w-full h-12 bg-black/40 border border-white/10 rounded-lg px-4 text-white focus:ring-1 focus:ring-primary outline-none appearance-none"
                                    value={make}
                                    onChange={(e) => setMake(e.target.value)}
                                >
                                    <option value="">Any Make</option>
                                    {availableMakes.map(m => (
                                        <option key={m} value={m}>{m}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="min-price-select" className="text-xs text-gray-400 ml-1 uppercase tracking-wider">Min Price</label>
                                <select
                                    id="min-price-select"
                                    className="w-full h-12 bg-black/40 border border-white/10 rounded-lg px-4 text-white focus:ring-1 focus:ring-primary outline-none appearance-none"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                >
                                    <option value="">No Min</option>
                                    <option value="50000">$50,000</option>
                                    <option value="100000">$100,000</option>
                                    <option value="150000">$150,000</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="max-price-select" className="text-xs text-gray-400 ml-1 uppercase tracking-wider">Max Price</label>
                                <select
                                    id="max-price-select"
                                    className="w-full h-12 bg-black/40 border border-white/10 rounded-lg px-4 text-white focus:ring-1 focus:ring-primary outline-none appearance-none"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                >
                                    <option value="">No Max</option>
                                    <option value="100000">$100,000</option>
                                    <option value="150000">$150,000</option>
                                    <option value="200000">$200,000</option>
                                    <option value="300000">$300,000+</option>
                                </select>
                            </div>

                            <div className="flex items-end">
                                <Button
                                    size="lg"
                                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium"
                                    onClick={handleSearch}
                                >
                                    <Search className="mr-2 h-4 w-4" />
                                    Search Used
                                </Button>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}
