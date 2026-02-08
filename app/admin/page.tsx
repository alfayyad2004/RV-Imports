import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react'
import { AdminVehicleList } from '@/components/AdminVehicleList'

export default async function AdminPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const filters = await searchParams
    const q = (filters['q'] as string) || ''
    const page = Number(filters['page']) || 1
    const PAGE_SIZE = 10
    const from = (page - 1) * PAGE_SIZE
    const to = from + PAGE_SIZE - 1

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    let query = supabase
        .from('vehicles')
        .select('*', { count: 'exact' })

    if (q) {
        query = query.ilike('reference_no', `%${q}%`)
    }

    const { data: vehicles, count } = await query
        .order('created_at', { ascending: false })
        .range(from, to)

    const totalPages = count ? Math.ceil(count / PAGE_SIZE) : 0

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Vehicle Management</h1>
                    <Link href="/admin/add">
                        <Button variant="premium">
                            <Plus className="mr-2 h-4 w-4" /> Add New Vehicle
                        </Button>
                    </Link>
                </div>

                <div className="mb-6">
                    <AdminSearch q={q} />
                </div>

                <AdminVehicleList initialVehicles={vehicles || []} />

                {totalPages > 1 && (
                    <div className="mt-8">
                        <AdminPagination totalPages={totalPages} currentPage={page} />
                    </div>
                )}
            </div>
        </div>
    )
}

function AdminSearch({ q }: { q: string }) {
    return (
        <form action="/admin" method="GET" className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl">
            <div className="relative flex-1">
                <input
                    type="text"
                    name="q"
                    defaultValue={q}
                    placeholder="Search Reference No..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-inner"
                />
            </div>
            <div className="flex gap-2">
                <Button type="submit" variant="premium" className="flex-1 sm:flex-none px-8 rounded-xl h-12">
                    Search
                </Button>
                {q && (
                    <Link href="/admin" className="flex-1 sm:flex-none">
                        <Button type="button" variant="outline" className="w-full h-12 rounded-xl border-zinc-800 text-zinc-400 hover:text-white">
                            Clear
                        </Button>
                    </Link>
                )}
            </div>
        </form>
    )
}

function AdminPagination({ totalPages, currentPage }: { totalPages: number, currentPage: number }) {
    return (
        <div className="flex items-center justify-between sm:justify-center gap-4 py-4 border-t border-zinc-800/50 mt-4">
            <Link
                href={`/admin?page=${currentPage - 1}`}
                className={currentPage <= 1 ? "pointer-events-none opacity-20" : ""}
            >
                <Button variant="outline" size="sm" className="h-10 rounded-lg border-zinc-800 bg-zinc-900/50">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Previous</span>
                </Button>
            </Link>

            <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-500">
                    <span className="text-white font-bold">{currentPage}</span>
                    <span className="mx-1">/</span>
                    {totalPages}
                </span>
            </div>

            <Link
                href={`/admin?page=${currentPage + 1}`}
                className={currentPage >= totalPages ? "pointer-events-none opacity-20" : ""}
            >
                <Button variant="outline" size="sm" className="h-10 rounded-lg border-zinc-800 bg-zinc-900/50">
                    <span className="hidden sm:inline mr-1">Next</span>
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </Link>
        </div>
    )
}
