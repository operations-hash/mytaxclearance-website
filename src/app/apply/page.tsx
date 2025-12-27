"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle2,
    ChevronRight,
    ChevronLeft,
    Upload,
    Building2,
    Users2,
    ShieldCheck,
    FileText,
    Clock,
    ArrowRight,
    MapPin,
    Building,
    Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    { id: 1, title: "Company Details", icon: Building2 },
    { id: 2, title: "Directors", icon: Users2 },
    { id: 3, title: "Documents", icon: FileText }
];

export default function ApplyPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-white flex flex-col">
                <nav className="border-b border-slate-100 p-6">
                    <Link href="/" className="text-xl font-black tracking-tight flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#0b4a8b] rounded-lg flex items-center justify-center text-white text-xs">MT</div>
                        <span><span className="text-[#0b4a8b]">My</span>TaxClearance</span>
                    </Link>
                </nav>
                <div className="flex-grow flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md w-full text-center"
                    >
                        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle2 className="w-12 h-12 text-green-500" />
                        </div>
                        <h1 className="text-4xl font-black mb-4 tracking-tight">Application <span className="text-[#0b4a8b]">Pending</span></h1>
                        <p className="text-slate-500 mb-10 leading-relaxed">
                            Your application for SI 108 Re-registration has been received. Our compliance team will review your documents within the next 4 hours.
                        </p>
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 mb-10 text-left">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">What happens next?</div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-[#0b4a8b] rounded-full flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0 mt-0.5">1</div>
                                    <p className="text-sm text-slate-600 font-medium">Payment link sent via WhatsApp & Email.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-[#0b4a8b] rounded-full flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0 mt-0.5">2</div>
                                    <p className="text-sm text-slate-600 font-medium">Document verification by a compliance officer.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-[#0b4a8b] rounded-full flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0 mt-0.5">3</div>
                                    <p className="text-sm text-slate-600 font-medium">Statutory filing at the Companies Registry.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/track" className="flex-1 bg-[#2563eb] text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg shadow-blue-100 flex items-center justify-center gap-2">
                                Track My Case <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/" className="flex-1 border border-slate-200 py-4 rounded-xl font-bold hover:bg-slate-50 transition text-slate-600">
                                Back to Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            {/* Split Layout Navigation */}
            <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
                <Link href="/" className="text-xl font-black tracking-tight flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#0b4a8b] rounded-lg flex items-center justify-center text-white text-xs">MT</div>
                    <span><span className="text-[#0b4a8b]">My</span>TaxClearance</span>
                </Link>
                <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:flex">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    256-bit SSL Secure
                </div>
            </nav>

            <div className="flex-grow flex flex-col lg:flex-row shadow-2xl overflow-hidden">
                {/* Right Sidebar */}
                <aside className="w-full lg:w-[400px] bg-[#0b4a8b] text-white p-12 lg:min-h-full relative overflow-hidden flex-shrink-0 order-last lg:order-first">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                            <Clock className="w-3 h-3" /> 5 Min Process
                        </div>
                        <h2 className="text-4xl font-black mb-6 leading-tight">Start Your <br />Compliance <br />Journal.</h2>
                        <p className="text-blue-100 text-sm leading-relaxed mb-12 opacity-80">
                            We've simplified the SI 108 re-registration process into three logical steps. Our system will guide you through the requirements.
                        </p>

                        <div className="space-y-8">
                            {steps.map(s => (
                                <div key={s.id} className={cn(
                                    "flex gap-6 transition-all duration-300",
                                    currentStep === s.id ? "opacity-100 translate-x-2" : "opacity-40"
                                )}>
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all",
                                        currentStep === s.id ? "bg-white text-[#0b4a8b] border-white" : "border-white/20 text-white"
                                    )}>
                                        <s.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-widest mb-1">Step 0{s.id}</div>
                                        <div className="font-bold text-lg">{s.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Form Area */}
                <main className="flex-grow bg-white p-6 lg:p-20 overflow-y-auto">
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit}>
                            <AnimatePresence mode="wait">
                                {currentStep === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <div className="mb-12">
                                            <h2 className="text-3xl font-black mb-2 tracking-tight">Company <span className="text-[#0b4a8b]">Identity.</span></h2>
                                            <p className="text-slate-500 font-medium">Please enter your company's registered details exactly as they appear on your CR14.</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-2 col-span-1 md:col-span-2">
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                    <Building className="w-3 h-3" /> Registered Company Name
                                                </label>
                                                <input type="text" placeholder="e.g. Modern Business Zimbabwe (Pvt) Ltd" className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-medium" required />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Initial Registration #</label>
                                                <input type="text" placeholder="e.g. 1234/2020" className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-medium" required />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">BP Number (ZIMRA)</label>
                                                <input type="text" placeholder="200XXXXXX" className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-medium" required />
                                            </div>
                                            <div className="space-y-2 col-span-1 md:col-span-2">
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                    <MapPin className="w-3 h-3" /> Business Address
                                                </label>
                                                <textarea placeholder="Physical address for statutory records" className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-medium min-h-[120px]" required></textarea>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <div className="mb-12">
                                            <h2 className="text-3xl font-black mb-2 tracking-tight">Directorship <br /><span className="text-[#0b4a8b]">Governance.</span></h2>
                                            <p className="text-slate-500 font-medium">Add details for at least one primary director. We will verify these against registry records.</p>
                                        </div>

                                        <div className="p-8 border-2 border-dashed border-slate-100 rounded-[2rem] bg-slate-50/50 mb-10">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                                                    <input type="text" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-medium" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">ID / Passport Number</label>
                                                    <input type="text" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-medium" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest text-[#2563eb]">Primary Email</label>
                                                    <input type="email" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-medium" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest text-[#25d366]">WhatsApp Number</label>
                                                    <input type="tel" className="w-full bg-white border border-slate-200 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition font-medium" required />
                                                </div>
                                            </div>
                                        </div>

                                        <button type="button" className="text-[#0b4a8b] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                                            <Plus className="w-4 h-4" /> Add Another Director
                                        </button>
                                    </motion.div>
                                )}

                                {currentStep === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <div className="mb-12">
                                            <h2 className="text-3xl font-black mb-2 tracking-tight">Statutory <span className="text-[#0b4a8b]">Vault.</span></h2>
                                            <p className="text-slate-500 font-medium">Upload high-quality scans or photos. We accept PDF, PNG, and JPG (max 10MB per file).</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {[
                                                { label: "Original CR14 / CR6", desc: "Proof of directorship" },
                                                { label: "Director ID Copy", desc: "Front & back of national ID" },
                                                { label: "Proof of Address", desc: "Council bill or bank statement" },
                                                { label: "Articles of Association", desc: "Mandatory for re-registration" }
                                            ].map((doc, i) => (
                                                <div key={i} className="group relative border-2 border-dashed border-slate-100 hover:border-blue-200 hover:bg-blue-50/20 rounded-3xl p-8 transition-all flex flex-col items-center text-center">
                                                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                                                        <Upload className="w-5 h-5" />
                                                    </div>
                                                    <div className="text-sm font-black text-slate-900 mb-1">{doc.label}</div>
                                                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-6">{doc.desc}</div>
                                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" required />
                                                    <div className="bg-slate-900 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest group-hover:bg-[#2563eb] transition-colors">Choose File</div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Controls */}
                            <div className="mt-20 pt-10 border-t border-slate-100 flex justify-between items-center">
                                {currentStep > 1 && (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="flex items-center gap-2 text-slate-400 font-black text-xs uppercase tracking-[0.2em] hover:text-slate-900 transition"
                                    >
                                        <ChevronLeft className="w-4 h-4" /> Back
                                    </button>
                                )}
                                <div className="flex-1"></div>
                                {currentStep < 3 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="bg-[#0b4a8b] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition active:scale-95 flex items-center gap-2 shadow-2xl shadow-blue-900/10"
                                    >
                                        Next Step <ChevronRight className="w-5 h-5" />
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-green-700 transition active:scale-95 flex items-center gap-2 shadow-2xl shadow-green-900/10"
                                    >
                                        Submit Case <CheckCircle2 className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}
