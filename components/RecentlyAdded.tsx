"use client"

import { VehicleCard } from '@/components/VehicleCard'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Vehicle } from '@/types/database'
import { Button } from '@/components/ui/button'

export function RecentlyAdded() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([])
    const [loading, setLoading] = useState(true)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const supabase = createClient()

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
            scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    useEffect(() => {
        const fetchRecent = async () => {
            const { data } = await supabase
                .from('vehicles')
                .select('*')
                .order('created_at', { ascending: false })
                .limit(8)

            if (data) setVehicles(data)
            setLoading(false)
        }

        fetchRecent()
    }, [])

    if (loading) return null
    if (vehicles.length === 0) return null

    return (
        <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                            Fresh off the <span className="text-primary italic">Boat</span>
                        </h2>
                        <p className="text-zinc-500 text-lg max-w-xl">
                            The latest premium additions to our inventory. Hand-picked and ready for the road.
                        </p>
                    </div>
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex gap-2 mr-4">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => scroll('left')}
                                className="rounded-full border-white/10 hover:bg-white/5 active:scale-95 transition-transform"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => scroll('right')}
                                className="rounded-full border-white/10 hover:bg-white/5 active:scale-95 transition-transform"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </div>
                        <Link href="/inventory?sort=newest" className="flex items-center text-primary font-bold hover:text-white transition-colors group">
                            View All <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-8 pb-10 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {vehicles.map((vehicle) => (
                            <div
                                key={vehicle.id}
                                className="min-w-[300px] w-[300px] md:min-w-[350px] md:w-[350px] lg:min-w-[380px] lg:w-[380px] snap-start flex-shrink-0"
                            >
                                <VehicleCard vehicle={vehicle} />
                            </div>
                        ))}

                        {/* View More Card at the end */}
                        <div className="min-w-[200px] flex items-center justify-center snap-start">
                            <Link href="/inventory" className="group flex flex-col items-center gap-3">
                                <div className="h-16 w-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                                    <ArrowRight className="h-6 w-6 text-zinc-500 group-hover:text-primary" />
                                </div>
                                <span className="text-sm font-bold text-zinc-500 group-hover:text-white transition-colors">View More</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-4 md:hidden text-center">
                    <Link href="/inventory?sort=newest" className="inline-flex items-center text-primary font-bold hover:text-white transition-colors">
                        View All New Arrivals <ArrowRight className="ml-2 h-4 w-4 shadow-sm" />
                    </Link>
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-1/2 -right-64 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    )
}
