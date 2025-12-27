"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Search,
    CheckCircle2,
    Clock,
    FileText,
    MessageCircle,
    ArrowRight,
    Building2,
    ShieldCheck,
    Zap,
    AlertCircle,
    Phone,
    ArrowUpRight,
    ChevronLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

const timelineData = [
    { title: "Application Received", status: "completed", date: "Dec 21, 2025", desc: "Digital submission successfully logged in our systems." },
    { title: "Document Verification", status: "completed", date: "Dec 21, 2025", desc: "Compliance officer verified director IDs and CR14 records." },
    { title: "Registry Filing", status: "currect", date: "In Progress", desc: "Application submitted to the Companies Registry (SI 108 Division)." },
    { title: "Certificate Issuance", status: "pending", date: "Pending", desc: "Digital certificate will be generated and signed." }
];

export default function TrackPage() {
    const [refNumber, setRefNumber] = useState("");
    const [tracking, setTracking] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (refNumber) setTracking(true);
    };

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
                        <Link href="/pricing" className="hover:text-slate-900 transition font-medium">Pricing</Link>
                        <Link href="/track" className="text-[#0b4a8b] font-bold">Track Application</Link>
                        <Link href="/about" className="hover:text-slate-900 transition font-medium">About</Link>
                        <Link href="/faq" className="hover:text-slate-900 transition font-medium">FAQ</Link>
                        <Link href="/apply" className="bg-[#2563eb] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1d4ed8] transition shadow-lg shadow-blue-200/50">
                            Get Compliant
                        </Link>
                    </div>
                </div>
            </nav>

            {!tracking ? (
                /* Search State */
                <section className="py-32">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-2xl mx-auto text-center"
                        >
                            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-[#0b4a8b]">
                                <Search className="w-10 h-10" />
                            </div>
                            <h1 className="text-5xl font-black mb-6 tracking-tight">Track <span className="text-[#0b4a8b]">Progress.</span></h1>
                            <p className="text-xl text-slate-500 mb-12 leading-relaxed">Enter your reference number to check the real-time status of your compliance filing.</p>

                            <form onSubmit={handleSearch} className="relative group">
                                <input
                                    type="text"
                                    value={refNumber}
                                    onChange={(e) => setRefNumber(e.target.value)}
                                    placeholder="MT-XXXX-XXXX"
                                    className="w-full bg-white border-2 border-slate-100 px-16 py-6 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-mono text-xl uppercase placeholder:text-slate-300 shadow-xl shadow-slate-200/50"
                                    required
                                />
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-[#0b4a8b] transition-colors" />
                                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#0b4a8b] text-white px-8 py-4 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition shadow-lg">
                                    Track Now
                                </button>
                            </form>

                            <div className="mt-12 p-8 border border-slate-200 bg-white rounded-3xl flex flex-col sm:flex-row items-center gap-6 text-left">
                                <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 flex-shrink-0">
                                    <AlertCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900 mb-1">Lost your reference?</div>
                                    <p className="text-sm text-slate-500 leading-relaxed">Reference numbers were sent to your registered WhatsApp and Email. Check your "Tax Clearance Update" message.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            ) : (
                /* Tracking View */
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
                            {/* Header Section */}
                            <div className="bg-[#0b4a8b] p-8 lg:p-12 text-white relative">
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/20 to-transparent"></div>
                                <div className="max-w-3xl relative z-10">
                                    <div className="flex flex-wrap items-center gap-4 mb-8">
                                        <div className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-white/20">Case: {refNumber}</div>
                                        <div className="bg-green-500 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                            <Zap className="w-3 h-3 fill-current" /> Priority Filing
                                        </div>
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-black mb-4">Modern Business Ltd.</h2>
                                    <p className="text-blue-100 text-lg opacity-80">SI 108 Company Re-registration (2025 Protocol)</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                {/* Timeline Column */}
                                <div className="lg:col-span-2 p-8 lg:p-12 border-r border-slate-100">
                                    <h3 className="text-xl font-black mb-10 flex items-center gap-3 italic">
                                        <Clock className="w-6 h-6 text-[#0b4a8b]" /> Case Timeline
                                    </h3>
                                    <div className="space-y-12">
                                        {timelineData.map((step, i) => (
                                            <div key={i} className="flex gap-8 relative group">
                                                {i < timelineData.length - 1 && (
                                                    <div className={cn(
                                                        "absolute left-[19px] top-[40px] w-0.5 h-[calc(100%+8px)]",
                                                        step.status === "completed" ? "bg-green-500" : "bg-slate-100"
                                                    )}></div>
                                                )}
                                                <div className={cn(
                                                    "w-10 h-10 rounded-full flex items-center justify-center z-10 flex-shrink-0 border-4",
                                                    step.status === "completed" ? "bg-green-500 border-green-100 text-white" :
                                                        step.status === "currect" ? "bg-white border-[#0b4a8b] text-[#0b4a8b] animate-pulse" :
                                                            "bg-white border-slate-100 text-slate-300"
                                                )}>
                                                    {step.status === "completed" ? <CheckCircle2 className="w-5 h-5" /> :
                                                        step.status === "currect" ? <Zap className="w-5 h-5" /> :
                                                            <div className="w-2 h-2 rounded-full bg-current" />}
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <h4 className={cn("font-black", step.status === "completed" ? "text-slate-900" : "text-slate-400")}>{step.title}</h4>
                                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded">{step.date}</span>
                                                    </div>
                                                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-16 pt-10 border-t border-slate-50">
                                        <button onClick={() => setTracking(false)} className="text-sm font-bold text-slate-400 hover:text-[#0b4a8b] transition flex items-center gap-2">
                                            <ChevronLeft className="w-4 h-4" /> Track Another Case
                                        </button>
                                    </div>
                                </div>

                                {/* Sidebar Info */}
                                <div className="bg-slate-50/50 p-8 lg:p-12 space-y-10 flex-shrink-0">
                                    <div>
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Assigned Officer</h4>
                                        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center font-black text-[#0b4a8b]">TM</div>
                                            <div>
                                                <div className="font-bold text-sm">Tawanda Mukandi</div>
                                                <div className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Compliance Lead</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">Case Documents</h4>
                                        {[
                                            { label: "Director ID Scans", size: "2.4 MB" },
                                            { label: "Registry Approval #4", size: "480 KB" }
                                        ].map((doc, i) => (
                                            <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 text-sm group cursor-pointer hover:border-blue-200 transition-all">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"><FileText className="w-4 h-4" /></div>
                                                    <span className="font-bold text-slate-700">{doc.label}</span>
                                                </div>
                                                <span className="text-[10px] font-bold text-slate-400">{doc.size}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-slate-200">
                                        <a href="https://wa.me/263715091985" className="w-full bg-[#25d366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition shadow-xl shadow-green-500/10">
                                            <MessageCircle className="w-5 h-5" /> Chat via WhatsApp
                                        </a>
                                        <p className="text-[10px] text-slate-400 text-center mt-4 font-bold uppercase tracking-widest italic">Fastest for case updates</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 pt-20 pb-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                        <div>
                            <Link href="/" className="text-xl font-black tracking-tight flex items-center justify-center md:justify-start gap-2 mb-4">
                                <div className="w-8 h-8 bg-[#0b4a8b] rounded-lg flex items-center justify-center text-white text-xs">MT</div>
                                <span><span className="text-[#0b4a8b]">My</span>TaxClearance</span>
                            </Link>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Digital Registry Infrastructure v4</p>
                        </div>
                        <div className="flex gap-8 text-sm font-bold text-slate-500">
                            <Link href="/services" className="hover:text-blue-600">Services</Link>
                            <Link href="/faq" className="hover:text-blue-600">Support</Link>
                            <Link href="/privacy" className="hover:text-blue-600">Vault Security</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
