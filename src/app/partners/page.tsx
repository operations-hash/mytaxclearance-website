"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    BarChart3,
    Zap,
    Globe,
    ArrowRight,
    Handshake,
    Users2,
    Building2,
    Lock,
    Search,
    CheckCircle2,
    Mail
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

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            {/* Navigation */}
            <nav className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
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
                        <Link href="/apply" className="bg-[#2563eb] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1d4ed8] transition shadow-lg shadow-blue-200/50">
                            Get Compliant
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="py-24 text-center relative overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent opacity-70"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto"
                    >
                        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2563eb] text-[10px] font-black tracking-widest mb-6 border border-blue-100 uppercase">
                            Partnerships Division
                        </motion.div>
                        <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-tight">
                            Modern <span className="text-[#0b4a8b]">Fintech</span> Partnerships
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-xl text-slate-600 mb-12 leading-relaxed">
                            We partner with banks, MFIs, and financial institutions to digitize KYC, mitigate portfolio risk, and accelerate business onboarding through embedded compliance infrastructure.
                        </motion.p>
                        <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="mailto:partners@mytaxclearance.co.zw" className="bg-[#0f172a] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition shadow-2xl active:scale-95 flex items-center justify-center gap-2">
                                Request Partner Deck <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/about" className="bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition active:scale-95">
                                Our Impact
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Platform Benefits */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black mb-4 tracking-tight">Institutional <span className="text-[#0b4a8b]">Value</span></h2>
                        <p className="text-slate-500 max-w-xl mx-auto">Scalable infrastructure designed for the specific needs of lenders and banking institutions.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Mitigate Risk",
                                desc: "Stay compliant with real-time tracking of statutory status for your entire loan portfolio. Instant alerts for struck-off entities."
                            },
                            {
                                icon: Zap,
                                title: "Accelerated Onboarding",
                                desc: "Reduce business account opening from weeks to 48 hours with digital SI 108 and tax clearance integration."
                            },
                            {
                                icon: BarChart3,
                                title: "Portfolio Health",
                                desc: "Deep insights into the compliance health of your SME borrowers with automated reporting dashboards."
                            }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-[#0b4a8b] group-hover:text-white group-hover:border-[#0b4a8b] transition-all">
                                    <benefit.icon className="w-8 h-8 text-[#0b4a8b] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-2xl font-black mb-4">{benefit.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-sm">
                                    {benefit.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Embedded Solutions */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center text-center md:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">Embed compliance into your <span className="text-blue-400">banking app.</span></h2>
                            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                Our REST APIs and webhooks allow you to integrate SI 108 re-registration and tax clearance checks directly into your SME lending or banking portal.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Sandboxed REST API for testing",
                                    "Custom white-labeled portals",
                                    "Real-time registry webhooks",
                                    "Direct CRM (Zoho/Salesforce) integration"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center justify-center md:justify-start gap-4 text-sm font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link href="mailto:api@mytaxclearance.co.zw" className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition active:scale-95">
                                View API Documentation <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-800 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>
                            <div className="font-mono text-[10px] text-blue-400 mb-6 bg-black/30 p-4 rounded-xl border border-white/5">
                                <span className="text-slate-500">// GET /v1/entities/re-registration/status</span><br />
                                <span className="text-emerald-400">200 OK</span><br />
                                <span className="text-pink-400">"{"{"}"</span><br />
                                <span className="ml-4 text-slate-100">"entity_name": "Modern Business Ltd",</span><br />
                                <span className="ml-4 text-slate-100">"si_108_status": "COMPLIANT",</span><br />
                                <span className="ml-4 text-slate-100">"last_filing": "2025-12-20"</span><br />
                                <span className="text-pink-400">"{"}"}"</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-lg">MT</div>
                                <div className="w-full h-1 bg-white/10 rounded-full relative overflow-hidden">
                                    <div className="absolute left-0 top-0 h-full w-1/2 bg-blue-500 animate-[shimmer_2s_infinite]"></div>
                                </div>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-slate-900 text-lg">CBZ</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-100 pt-20 pb-12">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-slate-400 text-sm">
                        &copy; 2025 MyTaxClearance. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
