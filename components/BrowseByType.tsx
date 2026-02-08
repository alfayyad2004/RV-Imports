"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Car, Truck, Sparkles, Tag } from 'lucide-react'

const CATEGORIES = [
    {
        title: "Roll On Roll Off",
        description: "Fresh imports, e.g. Nissan Note, Aqua",
        href: "/inventory?condition=RORO",
        icon: Car,
        image: "/images/categories/nissan-note.jpg",
        color: "from-blue-600 to-blue-900"
    },
    {
        title: "Local Used",
        description: "Quality pre-owned vehicles",
        href: "/inventory?condition=Local%20Used",
        icon: Tag,
        image: "/images/categories/land-cruiser.png",
        color: "from-emerald-600 to-emerald-900"
    },
    {
        title: "Commercial & Trucks",
        description: "Hilux, Ranger & Workhorses",
        href: "/inventory?type=Truck",
        icon: Truck,
        image: "/images/categories/hilux.jpg",
        color: "from-orange-600 to-orange-900"
    },
    {
        title: "New Arrivals",
        description: "Just landed inventory",
        href: "/inventory?sort=newest",
        icon: Sparkles,
        image: "/images/categories/audi.png",
        color: "from-purple-600 to-purple-900"
    }
]

export function BrowseByType() {
    return (
        <section className="py-20 bg-zinc-950">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
                    Browse by <span className="text-primary">Type</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CATEGORIES.map((category) => (
                        <Link
                            key={category.title}
                            href={category.href}
                            className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 block"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                            </div>

                            {/* Gradient Overlay for Text Readability */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 mix-blend-multiply transition-opacity duration-500`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Content */}
                            <div className="relative h-full p-8 flex flex-col justify-end z-10">
                                <category.icon className="h-12 w-12 text-white mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                                <p className="text-sm text-gray-200 opacity-90 transform translate-y-0 transition-all duration-300">
                                    {category.description}
                                </p>
                            </div>

                            {/* Hover Border Glow */}
                            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-300" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
