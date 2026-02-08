import { Check, Car, Star } from 'lucide-react'
import Link from 'next/link'

export function FinancingInfo() {
    return (
        <section className="py-20 bg-zinc-950/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-white uppercase mb-4 tracking-tighter">
                        Will forward you to the appropriate <span className="text-primary">Loan Officer</span>
                    </h2>
                    <p className="text-xl text-zinc-400 font-light uppercase tracking-wide">
                        We deal with all financial institutions, credit unions and banks
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Column 1: Requirements */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-primary">What do I need to apply for a loan?</h3>
                        <p className="text-sm font-semibold text-white uppercase mb-4">Below is a list of requirements:</p>
                        <ul className="space-y-4">
                            {[
                                "Two Forms of Identification",
                                "Proof of Address (Utility Bill, Official Letter)",
                                "Current Job Letter & Salary Slip",
                                "Quotation/Invoice/Purchase Agreement",
                                "Downpayment/Funds for Closing Charges",
                                "Bank Statements (last 3 months)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-zinc-300">
                                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Purchasing Process */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-primary">What is the purchasing process?</h3>
                        <p className="text-sm font-semibold text-white uppercase mb-4">Below is the list of steps:</p>
                        <ul className="space-y-4">
                            {[
                                { text: "View vehicle online or at our location", link: "/contact" },
                                { text: "Request invoice" },
                                { text: "Make downpayment (10-20%)" },
                                { text: "Fill out insurance quotation form", link: "/forms/insurance-quotation-form.pdf", download: true },
                                { text: "Pay balance when collecting vehicle" },
                                { text: "Drive your new vehicle" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-zinc-300">
                                    <Car className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    {item.link ? (
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSfplMGX4N4Kk6NaqLVSsw507SWmNEeyHCfc95lQIIjyMVk3IQ/viewform?usp=header"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition-colors underline decoration-zinc-700 hover:decoration-primary font-bold"
                                        >
                                            {item.text}
                                        </a>
                                    ) : (
                                        <span>{item.text}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Why Us */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-primary">Why purchase a vehicle from us?</h3>
                        <p className="text-sm font-semibold text-white uppercase mb-4">Here is why:</p>
                        <ul className="space-y-4">
                            {[
                                "20 years of experience",
                                "Excellent customer service",
                                "High quality control",
                                "Low mileage",
                                "Unbeatable prices",
                                "In-house mechanic"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-zinc-300">
                                    <Star className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
