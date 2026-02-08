import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

export default function Contact() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main>
                {/* Header */}
                <div className="bg-zinc-950 pt-32 pb-24 px-4 text-center border-b border-white/5">
                    <h1 className="text-5xl font-black mb-6 text-white">Get in Touch</h1>
                    <p className="text-xl text-zinc-400">We're here to help you find your perfect drive.</p>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-16">

                        {/* Contact Details */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">Contact Information</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="bg-primary/20 p-4 rounded-full mr-6">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Call / WhatsApp</p>
                                            <p className="text-xl font-bold text-white">(868) 495-9394</p>
                                            <p className="text-lg text-zinc-400">Whatsapp: +1 868-495-9394</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-primary/20 p-4 rounded-full mr-6">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Email Us</p>
                                            <p className="text-xl font-medium text-white">rvitrinidad@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-primary/20 p-4 rounded-full mr-6">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Visit Our Showroom</p>
                                            <p className="text-lg text-white">St Mary's, Carapichaima</p>
                                            <p className="text-zinc-500 mt-1">Trinidad & Tobago</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-primary/20 p-4 rounded-full mr-6">
                                            <Clock className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Opening Hours</p>
                                            <div className="text-lg text-white space-y-1">
                                                <p><span className="w-24 inline-block text-zinc-400">Mon–Fri:</span> 9:00 AM – 4:00 PM</p>
                                                <p><span className="w-24 inline-block text-zinc-400">Sat:</span> 9:00 AM – 1:00 PM</p>
                                                <p><span className="w-24 inline-block text-zinc-400">Sun:</span> Closed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6 pt-4 border-t border-white/5">
                                        <a href="#" className="flex items-center group">
                                            <div className="bg-zinc-900 p-3 rounded-2xl mr-4 group-hover:bg-primary/20 transition-colors">
                                                <Facebook className="h-5 w-5 text-zinc-400 group-hover:text-primary" />
                                            </div>
                                            <span className="font-medium text-zinc-400 group-hover:text-white transition-colors">Like Us On Facebook</span>
                                        </a>
                                        <a href="#" className="flex items-center group">
                                            <div className="bg-zinc-900 p-3 rounded-2xl mr-4 group-hover:bg-primary/20 transition-colors">
                                                <Instagram className="h-5 w-5 text-zinc-400 group-hover:text-primary" />
                                            </div>
                                            <span className="font-medium text-zinc-400 group-hover:text-white transition-colors">Follow Us On Instagram</span>
                                        </a>
                                        <a href="#" className="flex items-center group">
                                            <div className="bg-zinc-900 p-3 rounded-2xl mr-4 group-hover:bg-primary/20 transition-colors">
                                                <svg className="h-5 w-5 text-zinc-400 group-hover:text-primary" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12.48 10.92v3.28h4.74c-.2 1.06-.9 1.95-2.04 2.68v2.23h3.3c1.92-1.78 3.02-4.4 3.02-7.51 0-.69-.05-1.35-.18-1.99H12.48z" />
                                                    <path d="M12.48 24c3.24 0 5.95-1.08 7.93-2.91l-3.3-2.23c-.92.62-2.1.99-4.63.99-3.55 0-6.56-2.4-7.63-5.64H1.41v2.33C3.39 20.45 7.6 24 12.48 24z" />
                                                    <path d="M4.85 14.21c-.28-.84-.44-1.74-.44-2.68s.16-1.84.44-2.68V6.52H1.41C.51 8.16 0 10.02 0 12s.51 3.84 1.41 5.48l3.44-2.67z" />
                                                    <path d="M12.48 4.75c1.76 0 3.35.61 4.6 1.8l3.45-3.45C18.39 1.2 15.69 0 12.48 0 7.6 0 3.39 3.55 1.41 7.65l3.44 2.67c1.07-3.24 4.08-5.64 7.63-5.64z" />
                                                </svg>
                                            </div>
                                            <span className="font-medium text-zinc-400 group-hover:text-white transition-colors">Rate Us On Google</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
