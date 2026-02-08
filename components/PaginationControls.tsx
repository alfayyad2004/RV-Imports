"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationControlsProps {
    totalPages: number
    currentPage: number
}

export function PaginationControls({ totalPages, currentPage }: PaginationControlsProps) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', page.toString())
        router.push(`/inventory?${params.toString()}`)
    }

    return (
        <div className="flex items-center justify-center space-x-4 mt-12">
            <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                aria-label="Previous Page"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            <span className="text-sm text-muted-foreground">
                Page <span className="text-foreground font-medium">{currentPage}</span> of <span className="text-foreground font-medium">{totalPages}</span>
            </span>

            <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                aria-label="Next Page"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
