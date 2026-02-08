"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from 'lucide-react'; // Placeholder for Badge component if using shadcn, or simple div
import { motion } from 'framer-motion';
import { Vehicle } from '@/types/database';

// Simple Badge component since we didn't add shadcn badge
// Simple Badge component
function StatusBadge({ status }: { status: string }) {
    const colors: Record<string, string> = {
        'In Stock': 'bg-green-600/90 text-white border-green-400',
        'In Transit': 'bg-amber-500/90 text-white border-amber-300',
        'Sold': 'bg-red-600/90 text-white border-red-400',
    };
    const colorClass = colors[status] || 'bg-zinc-600/90 text-white';

    return (
        <span className={`px-2.5 py-1 rounded-md text-[11px] font-black border backdrop-blur-md shadow-xl ${colorClass} uppercase tracking-[0.05em]`}>
            {status}
        </span>
    );
}

interface VehicleCardProps {
    vehicle: Vehicle;
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function VehicleCard({ vehicle }: VehicleCardProps) {
    // Check if vehicle and specs exist before accessing
    if (!vehicle) return null;
    const specs = vehicle.specs || {};
    const price = vehicle.price_ttd ? new Intl.NumberFormat('en-TT', { style: 'currency', currency: 'TTD', maximumFractionDigits: 0 }).format(vehicle.price_ttd) : 'Price TBD';

    // Fallback Image Logic: Check if images exist and is an array with at least one item
    const imageUrl = (vehicle.images && Array.isArray(vehicle.images) && vehicle.images.length > 0)
        ? vehicle.images[0]
        : null;

    return (
        <motion.div variants={item} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }} className="h-full">
            <Link href={`/inventory/${vehicle.id}`} className="block h-full group">
                <div className="bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden h-full flex flex-col hover:border-primary/30 transition-colors shadow-lg">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                        {imageUrl ? (
                            <Image
                                src={imageUrl}
                                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 400px, (max-width: 1200px) 400px, 400px"
                            />
                        ) : (
                            <div className="w-full h-full bg-zinc-900 flex flex-col items-center justify-center text-zinc-700 group-hover:bg-zinc-800 transition-colors">
                                <span className="text-xs font-medium uppercase tracking-widest">No Image</span>
                            </div>
                        )}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                            <StatusBadge status={vehicle.status || 'In Stock'} />
                            {vehicle.condition === 'Local Used' && (
                                <span className="px-2.5 py-1 rounded-md text-[11px] font-black bg-blue-600/90 text-white border border-blue-400 backdrop-blur-md shadow-xl uppercase tracking-[0.05em]">
                                    Local Used
                                </span>
                            )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                        <div className="absolute bottom-3 right-3">
                            <span className="text-xl font-bold text-white drop-shadow-lg">
                                ${vehicle.price_ttd?.toLocaleString()} TTD
                            </span>
                        </div>
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">
                            {vehicle.year} {vehicle.make} {vehicle.model}
                        </h3>
                        <div className="flex justify-between text-xs text-zinc-400 mb-6">
                            <span className="flex items-center gap-1 font-medium">{vehicle.mileage?.toLocaleString()} km</span>
                            <span className="font-medium text-primary/80">{vehicle.transmission || 'Automatic'} • {vehicle.fuel_type || 'Petrol'}</span>
                        </div>

                        <div className="mt-auto w-full h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all font-bold text-sm">
                            View Details
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div >
    );
}
