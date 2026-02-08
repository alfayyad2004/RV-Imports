"use client"

import { cn } from "@/utils/cn"

const BRANDS = [
    "TOYOTA",
    "NISSAN",
    "HONDA",
    "MAZDA",
    "KIA",
    "HYUNDAI",
    "SUZUKI",
    "MITSUBISHI",
    "FORD",
    "SUBARU",
    "AUDI",
    "BMW",
    "MERCEDES-BENZ"
]

export function BrandMarquee() {
    return (
        <div className="w-full bg-zinc-950 border-y border-white/5 py-8 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-scroll whitespace-nowrap">
                {/* First copy */}
                <div className="flex items-center space-x-16 mx-8">
                    {BRANDS.map((brand) => (
                        <span key={brand} className="text-2xl font-black tracking-widest text-zinc-500 hover:text-white transition-colors cursor-default select-none">
                            {brand}
                        </span>
                    ))}
                </div>

                {/* Second copy for seamless loop */}
                <div className="flex items-center space-x-16 mx-8">
                    {BRANDS.map((brand) => (
                        <span key={`duplicate-${brand}`} className="text-2xl font-black tracking-widest text-zinc-500 hover:text-white transition-colors cursor-default select-none">
                            {brand}
                        </span>
                    ))}
                </div>

                {/* Third copy for ultra-wide screens */}
                <div className="flex items-center space-x-16 mx-8">
                    {BRANDS.map((brand) => (
                        <span key={`triplicate-${brand}`} className="text-2xl font-black tracking-widest text-zinc-500 hover:text-white transition-colors cursor-default select-none">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
