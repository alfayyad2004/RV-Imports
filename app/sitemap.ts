import { MetadataRoute } from 'next'
import { createClient } from '@/utils/supabase/server'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const supabase = await createClient()
    const baseUrl = 'https://rvimportstt.netlify.app'

    // 1. Static Pages
    const routes = [
        '',
        '/inventory',
        '/services',
        '/financing',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }))

    // 2. Dynamic Pages (Vehicles)
    const { data: vehicles } = await supabase.from('vehicles').select('id, updated_at')

    const vehicleRoutes = (vehicles || []).map((vehicle) => ({
        url: `${baseUrl}/inventory/${vehicle.id}`,
        lastModified: new Date(vehicle.updated_at || new Date()),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    return [...routes, ...vehicleRoutes]
}
