import Link from "next/link";

export default function SI108Page() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* Navigation */}
            <nav className="border-b border-slate-200">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-semibold tracking-tight">
                        <span className="text-[#0b4a8b]">My</span>TaxClearance
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link href="/pricing" className="text-sm text-slate-600 hover:text-slate-900">Pricing</Link>
                        <Link href="/faq" className="text-sm text-slate-600 hover:text-slate-900">FAQ</Link>
                        <Link href="/apply" className="bg-[#2563eb] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1d4ed8] transition">
                            Get Compliant
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="border-b border-slate-200 bg-slate-50">
                <div className="container mx-auto px-6 py-16 max-w-4xl text-center">
                    <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                        ⚠️ URGENT: December 31 Deadline
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        SI 108 Re-Registration<br />Fast-Track Service
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Re-register your company under Statutory Instrument 108 before the deadline.
                        Complete compliance in 48 hours—guaranteed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/apply" className="bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1d4ed8] transition">
                            Start Application →
                        </Link>
                        <a href="https://wa.me/263715091985" target="_blank" rel="noopener noreferrer"
                            className="border-2 border-slate-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition">
                            WhatsApp Expert
                        </a>
                    </div>
                </div>
            </section>

            {/* What is SI 108 */}
            <section className="border-b border-slate-200">
                <div className="container mx-auto px-6 py-16 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6">What is SI 108?</h2>
                    <div className="prose prose-slate max-w-none">
                        <p className="text-lg text-slate-700 mb-4">
                            Statutory Instrument 108 of 2024 requires all companies in Zimbabwe to re-register
                            with updated particulars by <strong>December 31, 2025</strong>. This is a mandatory
                            compliance requirement for all registered entities.
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                            <h3 className="text-lg font-semibold mb-3">Key Requirements:</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li>✓ Updated company particulars (Form CR14)</li>
                                <li>✓ Current director identification documents</li>
                                <li>✓ Proof of registered office address</li>
                                <li>✓ Payment of prescribed re-registration fees</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="border-b border-slate-200 bg-slate-50">
                <div className="container mx-auto px-6 py-16 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Why MyTaxClearance?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white border border-slate-200 rounded-xl p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">48-Hour Guarantee</h3>
                            <p className="text-slate-600 text-sm">
                                Certificate delivered within 48 hours of submission, or your money back.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-xl p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">100% Online</h3>
                            <p className="text-slate-600 text-sm">
                                No office visits required. Upload documents and track progress online 24/7.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-xl p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-lg mb-2">Bank-Grade Security</h3>
                            <p className="text-slate-600 text-sm">
                                256-bit SSL encryption. Documents auto-deleted 90 days after completion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="border-b border-slate-200">
                <div className="container mx-auto px-6 py-16 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="space-y-6">
                        {[
                            {
                                step: 1,
                                title: "Submit Application",
                                desc: "Upload your documents online. Takes 5 minutes.",
                                time: "5 min",
                            },
                            {
                                step: 2,
                                title: "Document Verification",
                                desc: "We verify your documents and send payment instructions.",
                                time: "6 hours",
                            },
                            {
                                step: 3,
                                title: "Registry Submission",
                                desc: "Upon payment, we file with the Companies Registry.",
                                time: "24 hours",
                            },
                            {
                                step: 4,
                                title: "Certificate Delivery",
                                desc: "Receive your SI 108 compliance certificate via email.",
                                time: "48 hours",
                            },
                        ].map((item) => (
                            <div key={item.step} className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-[#2563eb] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                                    {item.step}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h3 className="font-semibold text-lg">{item.title}</h3>
                                        <span className="text-sm text-slate-500 font-medium">{item.time}</span>
                                    </div>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="border-b border-slate-200 bg-slate-50">
                <div className="container mx-auto px-6 py-16 max-w-2xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Fixed Pricing, No Surprises</h2>
                    <div className="bg-white border-2 border-[#2563eb] rounded-2xl p-8 mb-6">
                        <div className="text-5xl font-bold text-[#0b4a8b] mb-2">$150</div>
                        <p className="text-slate-600 mb-6">All-inclusive SI 108 re-registration</p>
                        <ul className="text-left space-y-3 mb-8">
                            {[
                                "Document preparation & review",
                                "Registry filing fees included",
                                "48-hour processing guarantee",
                                "Certificate delivery via email",
                                "WhatsApp support included",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="/apply" className="block bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1d4ed8] transition">
                            Start Application →
                        </Link>
                    </div>
                    <p className="text-sm text-slate-500">Need multiple companies? <Link href="/pricing" className="text-[#2563eb] hover:underline">View bulk pricing</Link></p>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="border-b border-slate-200">
                <div className="container mx-auto px-6 py-16 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "What happens if I miss the December 31 deadline?",
                                a: "Companies that fail to re-register by the deadline may face penalties, suspension of operations, or deregistration. We recommend applying immediately to ensure timely compliance.",
                            },
                            {
                                q: "Do you handle the entire process?",
                                a: "Yes. We prepare all documents, file with the Companies Registry on your behalf, and deliver your compliance certificate. You only need to provide your company documents.",
                            },
                            {
                                q: "How do I track my application?",
                                a: "You'll receive a unique reference number after submission. Use it on our Track Application page to view real-time status updates 24/7.",
                            },
                        ].map((item, idx) => (
                            <details key={idx} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                <summary className="font-semibold cursor-pointer">{item.q}</summary>
                                <p className="text-slate-600 mt-3 text-sm">{item.a}</p>
                            </details>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/faq" className="text-[#2563eb] font-medium hover:underline">
                            View all FAQ →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#0f172a] text-white">
                <div className="container mx-auto px-6 py-16 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Compliant?</h2>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Don't wait until the last minute. Start your SI 108 re-registration today and secure your business compliance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/apply" className="bg-[#2563eb] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1d4ed8] transition">
                            Start Application
                        </Link>
                        <a href="tel:+263715091985" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition">
                            Call +263 715 091 985
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200 bg-slate-50">
                <div className="container mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-600">
                            © 2025 MyTaxClearance. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link href="/privacy" className="text-slate-600 hover:text-slate-900">Privacy Policy</Link>
                            <a href="tel:+263715091985" className="text-[#0b4a8b] hover:underline">+263 715 091 985</a>
                            <a href="mailto:info@mytaxclearance.co.zw" className="text-[#0b4a8b] hover:underline">info@mytaxclearance.co.zw</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
