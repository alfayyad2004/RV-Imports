import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-card text-muted-foreground py-12 border-t border-border mt-auto">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-sm">
                <div className="col-span-1 md:col-span-2">
                    <div className="relative h-16 w-60 mb-4">
                        <Image
                            src="/logo-new.png"
                            alt="Ryan's Vehicle Imports"
                            fill
                            className="object-contain object-left brightness-0 invert"
                        />
                    </div>
                    <p className="mb-6 max-w-sm text-zinc-400">
                        Ryan's Vehicle Imports & Service Centre - Premier choice for Roll-on/Roll-off vehicles in Trinidad. Driving the difference with quality imports and exceptional service.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Inventory</h3>
                    <ul className="space-y-3">
                        <li><Link href="/inventory" className="hover:text-primary transition-colors">All Vehicles</Link></li>
                        <li><Link href="/inventory?type=SUV" className="hover:text-primary transition-colors">SUVs</Link></li>
                        <li><Link href="/inventory?type=Sedan" className="hover:text-primary transition-colors">Sedans</Link></li>
                        <li><Link href="/inventory?type=Truck" className="hover:text-primary transition-colors">Trucks</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-3">
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        <li><Link href="/login" className="hover:text-primary transition-colors">Admin Login</Link></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                <p>© {new Date().getFullYear()} Ryan's Vehicle Imports. All rights reserved.</p>
                <p className="text-zinc-500">
                    Developed and created by <a href="https://caribbeancodestudios.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors underline decoration-zinc-700 hover:decoration-white">CaribbeanCodeStudios.com</a>
                </p>
            </div>
        </footer>
    )
}
