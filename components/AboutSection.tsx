import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function AboutSection() {
    return (
        <section className="bg-black py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 text-white">
                            About <span className="text-primary">Ryan's Vehicle Imports</span>
                        </h2>

                        <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
                            <p>
                                Located in St Mary’s, Carapichaima, <span className="text-white font-medium">Ryan's Vehicle Imports & Service Centre</span> is a dedicated automotive hub specializing in the import of high-quality vehicles and professional mechanical care. The center has established itself as a reliable partner for drivers in Central Trinidad, offering a "one-stop shop" experience that bridges the gap between purchasing a quality vehicle and maintaining it for years to come.
                            </p>

                            <div className="space-y-4 mt-6">
                                <div>
                                    <h3 className="text-white font-semibold text-xl mb-2">Vehicle Import Specialists</h3>
                                    <p>They focus on sourcing and importing top-tier foreign-used vehicles, ensuring local customers have access to reliable and well-maintained options from international markets.</p>
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-xl mb-2">Comprehensive Service Range</h3>
                                    <p>The facility operates a full-service mechanical shop capable of handling everything from routine oil changes and maintenance to more complex diagnostic repairs.</p>
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-xl mb-2">Customer-Centric Commitment</h3>
                                    <p>The business is known for its transparent service and professional staff, aiming to provide a stress-free experience for both new buyers and long-term service clients.</p>
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-xl mb-2">Accessible Facilities</h3>
                                    <p>The center is equipped with wheelchair-accessible entrances and parking, ensuring the facility is welcoming and easy to navigate for all visitors.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link
                                href="/contact"
                                className="inline-flex items-center text-primary hover:text-white transition-colors font-medium text-lg group"
                            >
                                Contact Us Today
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-center justify-center">
                        <div className="relative h-24 w-64 mb-8">
                            <Image
                                src="/logo-new.png"
                                alt="Ryan's Vehicle Imports Logo"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                            <iframe
                                title="Ryan's Vehicle Imports Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.116248735589!2d-61.42629769033261!3d10.46220156486992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c35f1e83523f77d%3A0xfb9a6208a00458d3!2sRyan&#39;s%20Vehicle%20Imports%20%26%20Service%20Centre!5e1!3m2!1sen!2stt!4v1770560203179!5m2!1sen!2stt"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-10 right-10 w-full h-full bg-primary/20 blur-3xl rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
