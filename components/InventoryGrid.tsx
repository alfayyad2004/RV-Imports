"use client"

import { VehicleCard } from './VehicleCard'
import { motion } from 'framer-motion'
import { Vehicle } from '@/types/database'

interface InventoryGridProps {
    vehicles: Vehicle[]
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

export function InventoryGrid({ vehicles }: InventoryGridProps) {
    if (vehicles.length === 0) {
        return (
            <div className="text-center py-20 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">No vehicles found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
            </div>
        )
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
        </motion.div>
    )
}
