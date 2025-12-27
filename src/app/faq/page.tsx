"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Plus,
    Minus,
    HelpCircle,
    ArrowRight,
    MessageCircle,
    Phone,
    Mail,
    Clock,
    Search,
    CheckCircle2,
    FileText,
    Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        category: "SI 108 Process",
        icon: FileText,
        questions: [
            {
                q: "How long does SI 108 re-registration take?",
                a: "Most applications are processed within 48-72 hours after complete documents are received. Complex cases with missing statutory data may take up to 5 business days."
            },
            {
                q: "What documents do I need for SI 108?",
                a: "You need: Director ID copies (front and back), CR14 certificate, proof of company address (utility bill or bank statement less than 3 months old), and your current tax clearance (if available)."
            },
            {
                q: "Can I do the entire process online?",
                a: "Yes, our portal is 100% digital. Simply upload your documents, and we handle the filing with the Companies Registry and ZIMRA remotely."
            }
        ]
    },
    {
        category: "Payments & Fees",
        icon: Zap,
        questions: [
            {
                q: "Are the prices fixed or are there 'extra' registry fees?",
                a: "Our prices are 100% all-inclusive. The $150 fee includes the registry filing fee, name search (if required), and our professional processing services."
            },
            {
                q: "Do you accept ZiG payments?",
                a: "Yes, we accept ZiG bank transfers at the prevailing bank rate. We also accept EcoCash, Mukuru, and USD cash deposits."
            }
        ]
    },
    {
        category: "Security",
        icon: CheckCircle2,
        questions: [
            {
                q: "Is my data secure?",
                a: "We use bank-grade AES-256 SSL encryption for all data transfers. Your documents are stored in secure cloud environments and are automatically purged 90 days after case completion."
            }
        ]
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>("0-0");

    const toggle = (idx: string) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

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
                        <Link href="/faq" className="text-[#0b4a8b] font-bold">FAQ</Link>
                        <Link href="/apply" className="bg-[#2563eb] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1d4ed8] transition shadow-lg shadow-blue-200/50">
                            Get Compliant
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-2xl mx-auto"
                    >
                        <HelpCircle className="w-12 h-12 text-blue-500 mx-auto mb-8" />
                        <h1 className="text-5xl font-black mb-6 tracking-tight">How can we <span className="text-[#0b4a8b]">Help?</span></h1>
                        <p className="text-xl text-slate-600 mb-10 leading-relaxed">Everything you need to know about the re-registration process and our compliance services.</p>

                        <div className="relative max-w-lg mx-auto">
                            <input
                                type="text"
                                placeholder="Search questions..."
                                className="w-full bg-white border border-slate-200 px-12 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm placeholder:text-slate-400 font-medium"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {faqs.map((cat, catIdx) => (
                            <div key={catIdx} className="mb-16 last:mb-0">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#0b4a8b]">
                                        <cat.icon className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-black tracking-tight">{cat.category}</h2>
                                </div>
                                <div className="space-y-4">
                                    {cat.questions.map((item, qIdx) => {
                                        const idx = `${catIdx}-${qIdx}`;
                                        const isOpen = openIndex === idx;
                                        return (
                                            <div
                                                key={qIdx}
                                                className={cn(
                                                    "border rounded-2xl transition-all duration-300 overflow-hidden",
                                                    isOpen ? "border-blue-200 bg-blue-50/10 shadow-lg shadow-blue-500/5" : "border-slate-100 hover:border-blue-100"
                                                )}
                                            >
                                                <button
                                                    onClick={() => toggle(idx)}
                                                    className="w-full px-8 py-6 flex justify-between items-center text-left gap-4"
                                                >
                                                    <span className={cn("font-bold transition-colors", isOpen ? "text-[#0b4a8b]" : "text-slate-800")}>
                                                        {item.q}
                                                    </span>
                                                    <div className={cn(
                                                        "w-6 h-6 rounded-full flex items-center justify-center transition-all",
                                                        isOpen ? "bg-[#0b4a8b] text-white rotate-180" : "bg-slate-100 text-slate-400"
                                                    )}>
                                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                                    </div>
                                                </button>
                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        >
                                                            <div className="px-8 pb-6 text-slate-600 text-sm leading-relaxed border-t border-blue-50 pt-6">
                                                                {item.a}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support CTA */}
            <section className="py-24 bg-slate-900 text-white relative">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl font-black mb-8">Still have questions?</h2>
                        <p className="text-slate-400 text-lg mb-12">Our compliance officers are active on WhatsApp and Email to help you with specific registry errors or case requirements.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="https://wa.me/263715091985" className="flex items-center gap-3 bg-[#25d366] text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition active:scale-95 shadow-xl shadow-green-500/10">
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Chat
                            </a>
                            <a href="mailto:support@mytaxclearance.co.zw" className="flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition active:scale-95">
                                <Mail className="w-5 h-5" />
                                Email Support
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-slate-100 pt-20 pb-12">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <p className="text-slate-400 text-sm">
                            &copy; 2025 MyTaxClearance. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
