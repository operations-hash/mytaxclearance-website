"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    ChevronRight,
    ShieldCheck,
    Building2,
    FileText,
    Zap,
    BarChart3,
    Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        icon: Building2,
        title: "Company Re-Registration (SI 108)",
        desc: "Mandatory compliance for all active companies. We handle the full filing process with the Companies Registry.",
        price: "$150",
        features: ["New Digital Certificate", "Standard Articles of Association", "CR14 & CR6 Update", "Tax Clearance Eligibility Check"]
    },
    {
        icon: FileText,
        title: "Tax Clearance (ITF 263)",
        desc: "Essential for bidding on tenders and avoiding 30% withholding tax. Valid for 3-6 months.",
        price: "$75",
        features: ["ZIMRA Account Health Check", "Returns Submission", "Immediate Certificate Issuance", "Renewal Reminders"]
    },
    {
        icon: BarChart3,
        title: "VAT Registration",
        desc: "For businesses crossing the annual turnover threshold. Includes introductory advisory session.",
        price: "$250",
        features: ["ZIMRA Interview Prep", "Fiscal Device Advice", "Initial Return Assistance", "Officer Representation"]
    },
    {
        icon: Globe,
        title: "PRAZ Registration",
        desc: "Get listed on the Procurement Regulatory Authority of Zimbabwe database for government tenders.",
        price: "$120",
        features: ["Category Selection Advice", "Document Certification", "Express Processing", "Bid Security Consulting"]
    },
    {
        icon: ShieldCheck,
        title: "NSSA Compliance",
        desc: "Register your employees and get your NSSA clearance letter for tender compliance.",
        price: "$100",
        features: ["Employer Registration", "Employee Data Capture", "Arrears Negotiation", "Clearance Certificate"]
    },
    {
        icon: Zap,
        title: "ZIDA License Advisory",
        desc: "For foreign investors looking to establish operations in Zimbabwe. Complete investment license support.",
        price: "Custom",
        features: ["Investment Application", "Immigration Support", "Bank Account Opening", "Tax Holiday Application"]
    }
];

export default function ServicesPage() {
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
                        <Link href="/services" className="text-[#0b4a8b] font-bold">Products</Link>
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
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold mb-6 shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Accepting Applications for 2026
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-black mb-8 tracking-tight text-slate-900"
                        >
                            Complete <span className="text-[#0b4a8b]">Compliance</span> Infrastructure.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 leading-relaxed"
                        >
                            From basic tax clearance to complex investment licensing, we build the regulatory rails for your business to run smoothly.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group flex flex-col"
                            >
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-[#0b4a8b] group-hover:scale-110 transition-transform">
                                    <service.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-[#0b4a8b] transition-colors">{service.title}</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed flex-grow">
                                    {service.desc}
                                </p>

                                <div className="border-t border-slate-100 pt-8 mt-auto">
                                    <ul className="space-y-4 mb-8">
                                        {service.features.map((f, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-black text-slate-900">{service.price}</div>
                                        <Link href="/apply" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#0b4a8b] transition flex items-center gap-2 group-hover:shadow-lg">
                                            Start Process <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#0b4a8b] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl font-black mb-8">Not sure what you need?</h2>
                    <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
                        Our compliance officers are available for a free 15-minute consultation to assess your business status.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="bg-white text-[#0b4a8b] px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 transition active:scale-95">
                            Book Consultation
                        </Link>
                        <Link href="/faq" className="bg-[#0f172a] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-900 transition active:scale-95 border border-white/10">
                            View Compliance FAQ
                        </Link>
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
