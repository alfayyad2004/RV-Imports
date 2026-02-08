import { Header } from '@/components/Header'
import { FinancingInfo } from '@/components/FinancingInfo'
import { Search, Banknote, PenTool, ShieldCheck, CarFront, Globe, MapPin, Settings, FileText } from 'lucide-react'

export default function Services() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[40vh] bg-black flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
                <div className="absolute inset-0 z-0">
                    {/* Abstract luxury background */}
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-black to-black opacity-50"></div>
                </div>
                <div className="relative z-20 text-center px-4">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white">
                        Premium Services
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Comprehensive automotive solutions tailored for the discerning buyer.
                    </p>
                </div>
            </section>

            <main className="container mx-auto px-4 py-20 -mt-20 relative z-30">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Showroom/Stocklist */}
                    <div className="p-6 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-105 transition-transform">
                            <CarFront className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Showroom/Stocklist</h3>
                        <p className="text-sm text-zinc-400">
                            Visit our showroom to shop for used or brand new vehicles accompanied by quick, easy payments and services.
                        </p>
                    </div>

                    {/* Custom/New Vehicle Orders */}
                    <div className="p-6 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-105 transition-transform">
                            <Globe className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Custom/New Orders</h3>
                        <p className="text-sm text-zinc-400">
                            Request any Rollon-Rolloff or brand new automobile(s). Simply visit our contact page and give us a call.
                        </p>
                    </div>

                    {/* Key Replacement */}
                    <div className="p-6 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-105 transition-transform">
                            <PenTool className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Key Programming</h3>
                        <p className="text-sm text-zinc-400">
                            Car key broken or lost? We offer professional key repair and programming services.
                        </p>
                    </div>

                    {/* Services and Repairs */}
                    <div className="p-6 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-105 transition-transform">
                            <Settings className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Services & Repairs</h3>
                        <p className="text-sm text-zinc-400">
                            We are equipped with professional and experienced mechanics to meet your routine maintenance needs.
                        </p>
                    </div>

                    {/* GPS Tracking */}
                    <div className="p-6 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-105 transition-transform">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">GPS Tracking</h3>
                        <p className="text-sm text-zinc-400">
                            State of the art tracking solutions for personal, vehicular and commercial solutions.
                        </p>
                    </div>

                    {/* Financial Institutions */}
                    <div className="p-6 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-105 transition-transform">
                            <Banknote className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Financial Institutions</h3>
                        <p className="text-sm text-zinc-400">
                            R&R Trading Co. Ltd. is linked to various financial institutions to aid in loan processing and acquisition.
                        </p>
                    </div>

                    {/* Insurance Policies - PDF */}
                    <div className="p-6 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-105 transition-transform">
                            <FileText className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Insurance Policies</h3>
                        <p className="text-sm text-zinc-400 mb-4">
                            Get online quote. Download our insurance quotation form below.
                        </p>
                        <a
                            href="/forms/insurance-quotation-form.pdf"
                            download
                            className="text-sm text-primary hover:text-white underline decoration-primary/50 hover:decoration-white transition-all"
                        >
                            Download Form PDF
                        </a>
                    </div>

                    {/* Warranty Offers - PDF */}
                    <div className="p-6 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-105 transition-transform">
                            <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">Warranty Offers</h3>
                        <p className="text-sm text-zinc-400 mb-4">
                            All our vehicles are covered by a complete warranty coverage plan.
                        </p>
                        <a
                            href="/forms/warranty-ministryOfTrade.pdf"
                            download
                            className="text-sm text-primary hover:text-white underline decoration-primary/50 hover:decoration-white transition-all"
                        >
                            Download Warranty PDF
                        </a>
                    </div>
                </div>
            </main>

            <FinancingInfo />
        </div>
    )
}
