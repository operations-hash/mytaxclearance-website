"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    HelpCircle,
    ArrowRight,
    CreditCard,
    Building,
    Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Starter Compliance",
        price: "150",
        desc: "Perfect for new companies needing standard re-registration.",
        icon: Building,
        features: [
            "Name Search & Reservation",
            "CR6 & CR14 Filing",
            "Articles of Association",
            "Digital Certificate (48h)",
            "1 Director Included"
        ],
        popular: false
    },
    {
        name: "Growth Package",
        price: "220",
        desc: "Complete compliance including tax clearance and initial returns.",
        icon: Briefcase,
        features: [
            "Everything in Starter",
            "ZIMRA Tax Clearance (ITF263)",
            "BP Number Registration",
            "VAT Threshold Advisory",
            "3 Directors Included",
            "Priority Processing (24h)"
        ],
        popular: true
    },
    {
        name: "Enterprise",
        price: "450",
        desc: "Full statutory management for mature businesses and tenders.",
        icon: CreditCard,
        features: [
            "Everything in Growth",
            "PRAZ Registration",
            "NSSA Registration",
            "ZIDA Advisory Hour",
            "Unlimited Directors",
            "Dedicated Account Manager"
        ],
        popular: false
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* Navigation */}
            <nav className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0b4a8b] rounded-lg flex items-center justify-center text-white text-xs">MT</div>
                        <span><span className="text-[#0b4a8b]">My</span>TaxClearance</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
                        <Link href="/services" className="hover:text-slate-900 transition font-medium">Products</Link>
                        <Link href="/pricing" className="text-[#0b4a8b] font-bold">Pricing</Link>
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
            <section className="pt-24 pb-20 text-center">
                <div className="container mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl lg:text-7xl font-black mb-6 tracking-tight"
                    >
                        Transparent <span className="text-[#0b4a8b]">Pricing.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 max-w-2xl mx-auto mb-16"
                    >
                        No hidden registry fees. No surprise "consultant costs". What you see is exactly what you pay for complete compliance.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "relative bg-white rounded-3xl p-8 border hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center",
                                    plan.popular ? "border-[#2563eb] shadow-xl shadow-blue-500/10 scale-105 z-10" : "border-slate-100 shadow-lg hover:border-blue-100"
                                )}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 -translate-y-1/2 bg-[#2563eb] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg shadow-blue-500/30">
                                        Most Popular
                                    </div>
                                )}

                                <div className={cn(
                                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors",
                                    plan.popular ? "bg-blue-50 text-[#2563eb]" : "bg-slate-50 text-slate-400"
                                )}>
                                    <plan.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-sm font-bold text-slate-400">$</span>
                                    <span className="text-5xl font-black text-slate-900 tracking-tight">{plan.price}</span>
                                </div>
                                <p className="text-sm text-slate-500 mb-8 leading-relaxed min-h-[40px]">{plan.desc}</p>

                                <ul className="space-y-4 mb-8 text-left w-full border-t border-slate-50 pt-8">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm font-medium text-slate-600">
                                            <CheckCircle2 className={cn("w-4 h-4 flex-shrink-0 mt-0.5", plan.popular ? "text-[#2563eb]" : "text-green-500")} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/apply"
                                    className={cn(
                                        "w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition active:scale-[0.98]",
                                        plan.popular ? "bg-[#2563eb] text-white hover:bg-blue-600 shadow-lg shadow-blue-200" : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                                    )}
                                >
                                    Get Started <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bulk Discount */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="bg-slate-900 rounded-[2.5rem] p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none"></div>
                        <div className="relative z-10 max-w-xl">
                            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Are you a Consultant or Asset Manager?</h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Get bulk discounts when you process 5+ entities at once. Perfect for holding companies and accounting firms.
                            </p>
                            <Link href="/partners" className="text-white font-bold border-b border-blue-500 pb-1 hover:text-blue-400 transition inline-flex items-center gap-2">
                                View Partner Rates <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="relative z-10 bg-white/10 p-2 rounded-2xl border border-white/10 backdrop-blur-md rotate-3 hover:rotate-0 transition duration-500">
                            <div className="bg-gradient-to-br from-slate-800 to-black p-8 rounded-xl border border-white/5 w-80">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-10 h-6 rounded bg-white/20"></div>
                                    <div className="text-white/50 font-mono text-xs">PREMIER</div>
                                </div>
                                <div className="text-white/50 text-xs mb-2 font-mono">**** **** **** 4289</div>
                                <div className="flex justify-between items-end">
                                    <div className="text-white font-bold text-sm">PARTNER</div>
                                    <div className="w-8 h-8 rounded-full bg-red-500/80"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="py-24 container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-6" />
                    <h2 className="text-3xl font-black mb-4">Common Questions</h2>
                    <div className="space-y-4 text-left mt-10">
                        {[
                            "Do you accept ZiG payments?",
                            "How long does the name search take?",
                            "Can I pay after the job is done?"
                        ].map((q, i) => (
                            <Link key={i} href="/faq" className="flex items-center justify-between p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/20 transition group">
                                <span className="font-bold text-slate-700">{q}</span>
                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#0b4a8b] group-hover:text-white transition-colors">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        ))}
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
