import { createClient } from '@/utils/supabase/server'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { LoanCalculator } from '@/components/LoanCalculator'
import { ShareButton } from '@/components/ShareButton'
import {
    Phone, ArrowLeft, Check, Calendar, Gauge, Settings,
    Fuel, Palette, Users, Combine, Zap, Disc, Wind, ShieldCheck, Radio, ThermometerSnowflake, Armchair, DoorOpen, CircleDot
} from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'
import { ImageGallery } from '@/components/ImageGallery'

// Helper to get icon for spec key
const getSpecIcon = (key: string) => {
    const k = key.toLowerCase()
    if (k.includes('fuel')) return <Fuel className="h-4 w-4" />
    if (k.includes('transmission') || k.includes('gear')) return <Settings className="h-4 w-4" />
    if (k.includes('mileage') || k.includes('km')) return <Gauge className="h-4 w-4" />
    if (k.includes('year')) return <Calendar className="h-4 w-4" />
    if (k.includes('color') || k.includes('paint')) return <Palette className="h-4 w-4" />
    if (k.includes('seat') || k.includes('passenger')) return <Users className="h-4 w-4" />
    if (k.includes('door')) return <DoorOpen className="h-4 w-4" />
    if (k.includes('engine') || k.includes('cyl')) return <Zap className="h-4 w-4" />
    if (k.includes('drive') || k.includes('traction')) return <Combine className="h-4 w-4" />
    if (k.includes('brake') || k.includes('abs')) return <Disc className="h-4 w-4" />
    if (k.includes('ac') || k.includes('climate') || k.includes('air')) return <ThermometerSnowflake className="h-4 w-4" />
    if (k.includes('bag') || k.includes('safety')) return <ShieldCheck className="h-4 w-4" />
    if (k.includes('radio') || k.includes('sound') || k.includes('audio')) return <Radio className="h-4 w-4" />
    if (k.includes('leather') || k.includes('interior')) return <Armchair className="h-4 w-4" />

    return <CircleDot className="h-4 w-4" />
}

// Helper to filter and format specs
const formatSpecValue = (value: any) => {
    if (value === null || value === undefined || value === '') return null
    if (typeof value === 'boolean') return value ? 'Yes' : 'No'
    return String(value)
}

export default async function VehicleDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const supabase = await createClient()
    const { data: vehicle } = await supabase
        .from('vehicles')
        .select('*')
        .eq('id', id)
        .single()

    if (!vehicle) {
        notFound()
    }

    const whatsappMessage = `Hi R&R Trading, I'm interested in the ${vehicle.year} ${vehicle.make} ${vehicle.model} listed for $${vehicle.price_ttd?.toLocaleString()} TTD. Is it available?`
    const whatsappLink = `https://wa.me/18681234567?text=${encodeURIComponent(whatsappMessage)}` // Replace with real number
    const pageUrl = `https://rr-trading.com/inventory/${vehicle.id}` // In prod use env var

    // Schema.org Structured Data
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Vehicle',
        brand: vehicle.make,
        model: vehicle.model,
        vehicleModelYear: vehicle.year,
        mileageFromOdometer: {
            '@type': 'QuantitativeValue',
            value: vehicle.mileage,
            unitCode: 'KMT'
        },
        offers: {
            '@type': 'Offer',
            price: vehicle.price_ttd,
            priceCurrency: 'TTD',
            availability: vehicle.status === 'In Stock' ? 'https://schema.org/InStock' : 'https://schema.org/SoldOut'
        },
        image: vehicle.images
    }

    return (
        <div className="min-h-screen bg-background text-foreground pb-20">
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container mx-auto px-4 pt-28 pb-12">
                <div className="flex justify-between items-center mb-6">
                    <Link href="/inventory" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Inventory
                    </Link>
                    <ShareButton
                        title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                        text={`Check out this ${vehicle.make} ${vehicle.model} at R&R Trading!`}
                        url={pageUrl}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content - Image Gallery & Key Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <ImageGallery
                            images={vehicle.images || []}
                            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                        />

                        {/* Description & Specs */}
                        <div className="space-y-12">
                            {/* Car Details Section */}
                            <div className="bg-zinc-900/50 rounded-2xl p-6 md:p-8 border border-white/5 shadow-xl">
                                <h2 className="text-xl font-bold mb-8 text-primary uppercase tracking-widest flex items-center gap-2">
                                    <Combine className="h-5 w-5" />
                                    Car Details
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
                                    {[
                                        { label: 'Reference', value: vehicle.reference_no || `#${vehicle.id.slice(0, 6).toUpperCase()}`, icon: <ShieldCheck className="h-4 w-4" /> },
                                        { label: 'Year', value: vehicle.year, icon: <Calendar className="h-4 w-4" /> },
                                        { label: 'Price', value: `$${vehicle.price_ttd?.toLocaleString()} TTD`, icon: <Palette className="h-4 w-4" /> },
                                        { label: 'Body', value: vehicle.type, icon: <Combine className="h-4 w-4" /> },
                                        { label: 'Mileage', value: `${vehicle.mileage?.toLocaleString()} Kms`, icon: <Gauge className="h-4 w-4" /> },
                                        { label: 'Engine', value: vehicle.engine_size, icon: <Zap className="h-4 w-4" /> },
                                        { label: 'Transmission', value: vehicle.transmission, icon: <Settings className="h-4 w-4" /> },
                                        { label: 'Fuel Type', value: vehicle.fuel_type, icon: <Fuel className="h-4 w-4" /> },
                                        { label: 'Fuel System', value: vehicle.fuel_system, icon: <Settings className="h-4 w-4" /> },
                                        { label: 'Color', value: vehicle.body_color, icon: <Palette className="h-4 w-4" /> },
                                        { label: 'Interior Color', value: vehicle.interior_color, icon: <Armchair className="h-4 w-4" /> },
                                        { label: 'Interior Type', value: vehicle.interior_type, icon: <Armchair className="h-4 w-4" /> },
                                        { label: 'Doors', value: `${vehicle.doors} Door`, icon: <DoorOpen className="h-4 w-4" /> },
                                        { label: 'Wheels', value: vehicle.wheels, icon: <Disc className="h-4 w-4" /> },
                                        { label: 'Status', value: vehicle.status, icon: <Check className="h-4 w-4" /> },
                                        { label: 'Sub Model', value: vehicle.sub_model, icon: <Combine className="h-4 w-4" /> },
                                        { label: 'Chassis No.', value: vehicle.chassis_no, icon: <Settings className="h-4 w-4" /> },
                                    ].map((item, idx) => (
                                        <div key={idx} className="group">
                                            <div className="flex items-center justify-between py-4 group-hover:bg-white/[0.02] transition-colors px-2 rounded-lg">
                                                <div className="flex items-center gap-3 shrink-0">
                                                    <span className="text-primary/60">{item.icon}</span>
                                                    <span className="text-zinc-400 text-sm font-medium">{item.label}</span>
                                                </div>
                                                <span className="font-bold text-sm text-white text-right ml-4">
                                                    {item.value || 'N/A'}
                                                </span>
                                            </div>
                                            <div className="h-[1px] bg-white/10 w-full" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features Section */}
                            {vehicle.specs && Object.keys(vehicle.specs).length > 0 && (
                                <div className="bg-zinc-900/50 rounded-2xl p-6 md:p-8 border border-white/5 shadow-xl">
                                    <h2 className="text-xl font-bold mb-8 text-primary uppercase tracking-widest flex items-center gap-2">
                                        <Zap className="h-5 w-5" />
                                        Features
                                    </h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {Object.entries(vehicle.specs)
                                            .filter(([key, value]) => {
                                                const formatted = formatSpecValue(value)
                                                return formatted !== null && key.toLowerCase() !== 'description'
                                            })
                                            .map(([key, value]) => (
                                                <div key={key} className="flex items-center gap-3 group/feat">
                                                    <div className="p-1.5 rounded-full bg-primary/10 text-primary group-hover/feat:bg-primary group-hover/feat:text-white transition-all">
                                                        <Check className="h-3 w-3" />
                                                    </div>
                                                    <span className="text-sm font-medium text-zinc-300 capitalize">
                                                        {key.replace(/_/g, ' ')}
                                                    </span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )}

                            {/* Description Section */}
                            {vehicle.specs?.description && (
                                <div className="bg-zinc-900/50 rounded-2xl p-6 md:p-8 border border-white/5 shadow-xl">
                                    <h2 className="text-xl font-bold mb-4 text-primary uppercase tracking-widest">Description</h2>
                                    <p className="text-zinc-400 leading-relaxed whitespace-pre-wrap">
                                        {vehicle.specs.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar - Actions & Financing */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-card rounded-2xl p-6 border border-white/5 shadow-xl lg:sticky lg:top-28 backdrop-blur-md">
                            <div className="mb-6">
                                <h1 className="text-3xl font-bold mb-2">{vehicle.year} {vehicle.make} {vehicle.model}</h1>
                                <p className="text-sm text-muted-foreground mb-4">{vehicle.condition} Vehicle • {vehicle.status}</p>
                                <div className="text-4xl font-bold text-primary mb-1">
                                    ${vehicle.price_ttd?.toLocaleString()} <span className="text-lg font-normal text-muted-foreground">TTD</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mb-8">
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button size="lg" className="w-full h-14 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white border-0 shadow-lg hover:grow transition-all">
                                        <Phone className="mr-2 h-5 w-5" /> Inquire on WhatsApp
                                    </Button>
                                </a>
                                <Button size="lg" variant="outline" className="w-full h-14 text-lg font-bold border-white/10 hover:bg-white/5">
                                    Schedule Test Drive
                                </Button>
                            </div>

                            <div className="border-t border-white/10 pt-6">
                                <h3 className="font-semibold mb-4 text-lg">Financing Calculator</h3>
                                <LoanCalculator initialPrice={vehicle.price_ttd} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
