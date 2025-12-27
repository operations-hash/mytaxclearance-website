"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Clock,
    ShieldCheck,
    Globe,
    FileText,
    BarChart3,
    Zap,
    Phone,
    Mail,
    MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
            {/* SI 108 Urgency Banner */}
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="bg-amber-50 border-b border-amber-100 py-2.5 text-center text-sm sticky top-0 z-[60]"
            >
                <span className="text-amber-900 flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    <strong>SI 108 Deadline:</strong> All companies must re-register by 20 April 2026
                </span>
            </motion.div>

            {/* Navigation */}
            <nav className="border-b border-slate-200 sticky top-[41px] bg-white/80 backdrop-blur-xl z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0b4a8b] rounded-lg flex items-center justify-center text-white text-xs">MT</div>
                        <span><span className="text-[#0b4a8b]">My</span>TaxClearance</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
                        <Link href="/services" className="hover:text-slate-900 transition font-medium">Products</Link>
                        <Link href="/pricing" className="hover:text-slate-900 transition font-medium">Pricing</Link>
                        <Link href="/track" className="hover:text-slate-900 transition font-medium text-[#2563eb]">Track Application</Link>
                        <Link href="/about" className="hover:text-slate-900 transition font-medium">About</Link>
                        <Link href="/faq" className="hover:text-slate-900 transition font-medium">FAQ</Link>
                        <Link href="/apply" className="bg-[#2563eb] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1d4ed8] transition shadow-lg shadow-blue-200/50 active:scale-95">
                            Get Compliant
                        </Link>
                    </div>
                    <a href="tel:+263715091985" className="md:hidden flex items-center gap-1 text-sm text-[#0b4a8b] font-bold">
                        <Phone className="w-4 h-4" />
                        Call Us
                    </a>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent opacity-70"></div>
                    <div className="absolute top-40 right-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-100/20 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563eb] text-xs font-bold mb-6 border border-blue-100">
                            <Zap className="w-3 h-3 fill-current" />
                            <span>ZIMBABWE'S #1 COMPLIANCE PORTAL</span>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 text-slate-900">
                            Re-Register Your Company
                            <span className="block bg-gradient-to-r from-[#0b4a8b] to-[#2563eb] bg-clip-text text-transparent mt-2">100% Online. In 48h.</span>
                        </motion.h1>

                        <motion.p variants={fadeIn} className="text-xl lg:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                            Skip the ZIMRA queues and bureaucracy. Upload your documents today. Get your compliance certificate digitally by Thursday.
                        </motion.p>

                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 items-center">
                            <Link href="/apply" className="w-full sm:w-auto bg-[#2563eb] text-white px-10 py-5 rounded-xl font-bold text-lg text-center hover:bg-[#1d4ed8] transition-all shadow-xl shadow-blue-200/50 flex items-center justify-center gap-2 group active:scale-95">
                                Start Application
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/pricing" className="w-full sm:w-auto border border-slate-200 bg-white px-10 py-5 rounded-xl font-bold text-lg text-center hover:bg-slate-50 transition active:scale-95">
                                View Pricing
                            </Link>
                        </motion.div>

                        <motion.div variants={fadeIn} className="mt-12 flex items-center gap-6">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm text-slate-500 font-medium">
                                Joined by <span className="text-slate-900 font-bold">2,400+</span> Zimbabwean firms this month
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">
                        {[
                            { icon: Clock, value: "48h", label: "Average Processing", sub: "Most done in 2 business days" },
                            { icon: Globe, value: "100%", label: "Online Process", sub: "No queues. Track 24/7." },
                            { icon: ShieldCheck, value: "$150", label: "Fixed Price", sub: "All fees included. No surprises." },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                                    <stat.icon className="w-8 h-8 text-blue-400" />
                                </div>
                                <div className="text-5xl font-black mb-2 tracking-tight">{stat.value}</div>
                                <div className="text-blue-100 font-bold text-lg mb-2">{stat.label}</div>
                                <div className="text-sm text-slate-400">{stat.sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-extrabold mb-4 tracking-tight"
                        >
                            Get Compliant in <span className="text-[#0b4a8b]">4 Simple Steps</span>
                        </motion.h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">The entire process takes less than 5 minutes to initiate from your phone or laptop.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10 hidden lg:block"></div>
                        {[
                            { step: "01", icon: FileText, title: "Upload Documents", desc: "Company details and director IDs. Fully encrypted." },
                            { step: "02", icon: Zap, title: "We Process", desc: "Our team submits direct to ZIMRA and Companies Registry." },
                            { step: "03", icon: BarChart3, title: "Track Progress", desc: "Real-time updates via SMS, Email, and WhatsApp." },
                            { step: "04", icon: CheckCircle2, title: "Get Certificate", desc: "Receive your verified digital certificate within 48h." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all group lg:text-center"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center lg:mx-auto mb-6 group-hover:bg-[#0b4a8b] group-hover:text-white transition-colors">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <div className="text-xs font-black text-blue-300 mb-2 uppercase tracking-widest">{item.step}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link href="/apply" className="inline-flex items-center gap-2 bg-[#0f172a] text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition active:scale-95">
                            Start Now <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Our <span className="text-[#0b4a8b]">Products</span></h2>
                        <p className="text-xl text-slate-600">Enterprise-grade compliance solutions for every business stage.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "SI 108 Re-Registration",
                                price: "150",
                                desc: "Mandatory company re-registration before the April 2026 deadline.",
                                cta: "Get Started",
                                urgent: true,
                                features: ["Companies Registry Filing", "New Certificate Issuance", "Director Updates"]
                            },
                            {
                                title: "Tax Clearance (ITF263)",
                                price: "75",
                                desc: "Get your ZIMRA tax clearance certificate for tenders and banking.",
                                cta: "Apply Now",
                                urgent: false,
                                features: ["ZIMRA E-Filing", "Health Check", "Instant Digital Copy"]
                            },
                            {
                                title: "VAT Registration",
                                price: "250",
                                desc: "Scale your business with professional VAT registration and advisory.",
                                cta: "Book Advisory",
                                urgent: false,
                                features: ["Threshold Evaluation", "ZIMRA Application", "Initial Filing Guide"]
                            }
                        ].map((product, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className={cn(
                                    "bg-white rounded-3xl p-8 border-2 transition-all group",
                                    product.urgent ? "border-blue-200 shadow-2xl shadow-blue-500/10 scale-105 z-10" : "border-transparent hover:border-slate-200 shadow-lg shadow-slate-200/50"
                                )}
                            >
                                {product.urgent && (
                                    <div className="bg-amber-100 text-amber-800 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-[0.2em] mb-4 inline-block">
                                        Most Urgent
                                    </div>
                                )}
                                <h3 className="text-2xl font-black mb-3 text-slate-900">{product.title}</h3>
                                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{product.desc}</p>
                                <div className="mb-8 p-6 bg-slate-50 rounded-2xl">
                                    <span className="text-3xl font-black text-[#0b4a8b]">${product.price}</span>
                                    <span className="text-slate-400 text-sm ml-2">fixed fee</span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {product.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/apply"
                                    className={cn(
                                        "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition active:scale-[0.98]",
                                        product.urgent ? "bg-[#2563eb] text-white hover:bg-blue-600 shadow-lg shadow-blue-200" : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                                    )}
                                >
                                    {product.cta} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition duration-500">
                        <div className="flex items-center gap-2 font-bold text-slate-400">
                            <ShieldCheck className="w-5 h-5" />
                            AES-256 ENCRYPTED
                        </div>
                        <div className="flex items-center gap-2 font-bold text-slate-400">
                            <Globe className="w-5 h-5" />
                            NATIONWIDE SUPPORT
                        </div>
                        <Image
                            src="https://www.zoho.com/partners/images/partner-badges/authorized-partner-logo.png"
                            alt="Zoho Partner"
                            width={120}
                            height={60}
                            unoptimized
                        />
                    </div>
                </div>
            </section>

            {/* For Banks Section */}
            <section className="py-24 bg-[#0b4a8b] text-white relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="text-blue-300 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Institutional Solutions</span>
                        <h3 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">Turn compliance into your bank's secret weapon.</h3>
                        <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                            We provide banks and financial institutions with embedded compliance portals to accelerate SME onboarding and mitigate portfolio risk.
                        </p>
                        <Link href="/partners" className="inline-flex items-center gap-2 bg-white text-[#0b4a8b] px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-2xl active:scale-95">
                            Explore Enterprise APIs <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-50 pt-20 pb-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                            <Link href="/" className="text-xl font-black tracking-tight flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-[#0b4a8b] rounded-lg flex items-center justify-center text-white text-xs">MT</div>
                                <span><span className="text-[#0b4a8b]">My</span>TaxClearance</span>
                            </Link>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
                                Zimbabwe's leading digital infrastructure for business compliance and regulatory filings. 100% online, 100% secure.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 cursor-pointer hover:border-blue-200 hover:text-blue-500 transition">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Solutions</h4>
                            <ul className="space-y-4 text-sm font-medium text-slate-500">
                                <li><Link href="/apply" className="hover:text-[#0b4a8b] transition">SI 108 Re-Registration</Link></li>
                                <li><Link href="/services" className="hover:text-[#0b4a8b] transition">Tax Clearance (ITF263)</Link></li>
                                <li><Link href="/services" className="hover:text-[#0b4a8b] transition">VAT Registration</Link></li>
                                <li><Link href="/pricing" className="hover:text-[#0b4a8b] transition">Corporate Advisory</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Platform</h4>
                            <ul className="space-y-4 text-sm font-medium text-slate-500">
                                <li><Link href="/about" className="hover:text-[#0b4a8b] transition">Our Story</Link></li>
                                <li><Link href="/partners" className="hover:text-[#0b4a8b] transition">Legacy Partners</Link></li>
                                <li><Link href="/faq" className="hover:text-[#0b4a8b] transition">Help Center</Link></li>
                                <li><Link href="/privacy" className="hover:text-[#0b4a8b] transition">Privacy Policy</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Support</h4>
                            <ul className="space-y-4 text-sm font-medium text-slate-500">
                                <li className="flex items-center gap-3">
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    <span>76 McChlery Eastlea Ave, Harare</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-blue-500" />
                                    <span>+263 715 091 985</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-blue-500" />
                                    <span>info@mytaxclearance.co.zw</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-[0.1em]">
                        <span>© 2025 MyTaxClearance. Modern Compliance Infrastructure.</span>
                        <span>SECURELY BUILT IN ZIMBABWE</span>
                    </div>
                </div>
            </footer>

            {/* WhatsApp Float */}
            <motion.a
                href="https://wa.me/263715091985"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 bg-[#25d366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition overflow-hidden group"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 relative z-10">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </motion.a>
        </div>
    );
}
