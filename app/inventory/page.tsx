import { Header } from '@/components/Header'
import { InventoryGrid } from '@/components/InventoryGrid'
import { InventoryFilters } from '@/components/InventoryFilters'
import { PaginationControls } from '@/components/PaginationControls'
import { InventoryTabs } from '@/components/InventoryTabs'
import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'

export const metadata = {
    title: 'Inventory - R&R Trading',
    description: 'Browse our selection of quality RORO and local used vehicles.'
}

export default async function InventoryPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const filters = await searchParams
    const supabase = await createClient()

    // Apply Filter Logic
    const q = filters['q'] as string
    const make = filters['make'] as string
    const minPrice = filters['minPrice'] as string
    const maxPrice = filters['maxPrice'] as string
    const condition = filters['condition'] as string
    const type = filters['type'] as string

    // Pagination Logic
    const page = Number(filters['page']) || 1
    const PAGE_SIZE = 12
    const from = (page - 1) * PAGE_SIZE
    const to = from + PAGE_SIZE - 1

    let query = supabase
        .from('vehicles')
        .select('*', { count: 'exact' })

    if (q) {
        query = query.or(`make.ilike.%${q}%,model.ilike.%${q}%`)
    }
    if (make) {
        query = query.eq('make', make)
    }
    if (condition) {
        query = query.eq('condition', condition)
    }
    if (type) {
        query = query.eq('type', type)
    }
    if (minPrice) {
        query = query.gte('price_ttd', minPrice)
    }
    if (maxPrice) {
        query = query.lte('price_ttd', maxPrice)
    }

    const { data: vehicles, count, error } = await query
        .order('created_at', { ascending: false })
        .range(from, to)

    const totalPages = count ? Math.ceil(count / PAGE_SIZE) : 0

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="container mx-auto px-4 pt-28 pb-12">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Our Inventory</h1>
                    <p className="text-muted-foreground">Find the perfect vehicle for your lifestyle.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                    {/* Sidebar Filters */}
                    <aside className="md:block">
                        <InventoryFilters />
                    </aside>

                    {/* Results Grid */}
                    <div className="md:col-span-3">
                        <InventoryTabs />

                        {vehicles && vehicles.length > 0 ? (
                            <>
                                <InventoryGrid vehicles={vehicles} />
                                {totalPages > 1 && (
                                    <PaginationControls totalPages={totalPages} currentPage={page} />
                                )}
                            </>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 bg-zinc-900/50 rounded-2xl border border-dashed border-zinc-800">
                                <div className="text-muted-foreground mb-4">No vehicles found matching your criteria.</div>
                                <Link
                                    href="/inventory"
                                    className="text-primary hover:underline font-medium"
                                >
                                    Clear all filters
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}
