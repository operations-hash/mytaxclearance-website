"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Lock,
    Eye,
    FileText,
    ArrowRight,
    Shield,
    Fingerprint,
    CheckCircle2,
    Phone,
    Mail,
    Scale
} from "lucide-react";
import { cn } from "@/lib/utils";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function PrivacyPage() {
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
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        className="max-w-3xl mx-auto"
                    >
                        <Shield className="w-16 h-16 text-blue-400 mx-auto mb-8" />
                        <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tight">Trust & <span className="text-blue-400 font-serif italic">Privacy.</span></h1>
                        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                            We treat your statutory data with bank-grade security protocols. Your privacy is our infrastructure's primary directive.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Standards */}
            <section className="py-24 border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Lock,
                                title: "Data Encryption",
                                desc: "All documents are encrypted using AES-256 at rest and TLS 1.3 in transit."
                            },
                            {
                                icon: Eye,
                                title: "Limited Access",
                                desc: "Only authorized compliance officers can view your documents during the filing window."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Auto-Purge",
                                desc: "Sensitive data is automatically permanently deleted 90 days after case completion."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-slate-50 flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-[#0b4a8b]">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Policy */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                                <Fingerprint className="w-8 h-8 text-blue-500" /> 1. Data Collection
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We collect only the information required by the Companies and Other Business Entities Act and the Income Tax Act of Zimbabwe. This includes:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Director Names & ID Numbers",
                                    "Business Physical Addresses",
                                    "Tax Identification (BP) Numbers",
                                    "Corporate Governance Records"
                                ].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 bg-slate-50 p-4 rounded-xl">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                                <Scale className="w-8 h-8 text-blue-500" /> 2. Statutory Disclosure
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                MyTaxClearance is a professional intermediary. By using our service, you authorize us to disclose your information to the following regulatory bodies solely for the purpose of your application:
                            </p>
                            <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                                <ul className="space-y-4 text-sm font-bold text-[#0b4a8b]">
                                    <li className="flex items-center gap-2">• The Registrar of Companies (Zimbabwe)</li>
                                    <li className="flex items-center gap-2">• Zimbabwe Revenue Authority (ZIMRA)</li>
                                    <li className="flex items-center gap-2">• Financial Institution Partners (for KYC only)</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-20 p-12 bg-slate-900 rounded-[2.5rem] text-white text-center">
                        <h3 className="text-2xl font-black mb-4">Questions about your data?</h3>
                        <p className="text-slate-400 mb-8 max-w-md mx-auto">Contact our Data Protection Officer for a full audit of your stored statutory records.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="mailto:privacy@mytaxclearance.co.zw" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition flex items-center justify-center gap-2">
                                <Mail className="w-4 h-4" /> privacy@mytaxclearance.co.zw
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-50 pt-20 pb-12">
                <div className="container mx-auto px-6 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div>
                            <Link href="/" className="text-xl font-black tracking-tight flex items-center justify-center md:justify-start gap-2 mb-4">
                                <div className="w-8 h-8 bg-[#0b4a8b] rounded-lg flex items-center justify-center text-white text-xs">MT</div>
                                <span><span className="text-[#0b4a8b]">My</span>TaxClearance</span>
                            </Link>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Digital Trust Infrastructure</p>
                        </div>
                        <div className="flex gap-8 text-xs font-black text-slate-400 uppercase tracking-widest">
                            <Link href="/faq" className="hover:text-slate-900">Help Center</Link>
                            <Link href="/about" className="hover:text-slate-900">Contact</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
