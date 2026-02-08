"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/utils/cn'

const TABS = [
    { label: 'All', value: 'all' },
    { label: 'RORO', value: 'RORO', type: 'condition' },
    { label: 'Local Used', value: 'Local Used', type: 'condition' },
    { label: 'SUVs', value: 'SUV', type: 'body' },
    { label: 'Sedans', value: 'Sedan', type: 'body' },
    { label: 'Trucks', value: 'Truck', type: 'body' },
]

export function InventoryTabs() {
    const router = useRouter()
    const searchParams = useSearchParams()

    // Determine active tab
    const currentCondition = searchParams.get('condition')
    const currentBody = searchParams.get('type')

    let activeValue = 'all'
    if (currentCondition) activeValue = currentCondition
    else if (currentBody) activeValue = currentBody

    const handleTabClick = (tab: typeof TABS[0]) => {
        const params = new URLSearchParams(searchParams.toString())

        // Clear previous filters
        params.delete('condition')
        params.delete('type')
        params.delete('page') // Reset to page 1

        if (tab.value !== 'all') {
            if (tab.type === 'condition') {
                params.set('condition', tab.value)
            } else {
                params.set('type', tab.value)
            }
        }

        router.push(`/inventory?${params.toString()}`, { scroll: false })
    }

    return (
        <div className="w-full overflow-hidden mb-8">
            <div className="flex flex-nowrap gap-2 p-1 bg-zinc-900/50 rounded-xl border border-white/5 overflow-x-auto scrollbar-hide pb-2 md:pb-1">
                {TABS.map((tab) => (
                    <button
                        key={tab.label}
                        onClick={() => handleTabClick(tab)}
                        className={cn(
                            "px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0",
                            activeValue === tab.value
                                ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                                : "text-zinc-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
