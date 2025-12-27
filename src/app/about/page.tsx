"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Users2,
    Target,
    TrendingUp,
    Award,
    Globe,
    ArrowRight,
    MapPin,
    Linkedin,
    Twitter,
    Mail
} from "lucide-react";
import Image from "next/image";

const stats = [
    { label: "Companies Registered", value: "12,000+" },
    { label: "Compliance Rate", value: "99.8%" },
    { label: "Processing Time", value: "48h" },
    { label: "Cities Covered", value: "14" }
];

const team = [
    {
        name: "Tawanda Mukandi",
        role: "Head of Compliance",
        image: "https://i.pravatar.cc/300?u=tm",
        bio: "Former ZIMRA senior officer with 12 years of regulatory experience."
    },
    {
        name: "Sarah Ndlovu",
        role: "Legal Operations",
        image: "https://i.pravatar.cc/300?u=sn",
        bio: "Specialist in Corporate Law and efficient statutory filing systems."
    },
    {
        name: "David Chengeta",
        role: "Client Success",
        image: "https://i.pravatar.cc/300?u=dc",
        bio: "Ensures every client gets their certificate on time, every time."
    }
];

export default function AboutPage() {
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
                        <Link href="/about" className="text-[#0b4a8b] font-bold">About</Link>
                        <Link href="/faq" className="hover:text-slate-900 transition font-medium">FAQ</Link>
                        <Link href="/apply" className="bg-[#2563eb] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#1d4ed8] transition shadow-lg shadow-blue-200/50">
                            Get Compliant
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight">
                            We are digitizing <br />
                            <span className="text-[#0b4a8b]">Zimbabwe's Registry.</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed mb-12">
                            MyTaxClearance was built to solve a single problem: the friction of business compliance. We believe entrepreneurs should spend time building their businesses, not queuing at government offices.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Stats */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <div className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-200/50 rotate-3 transform hover:rotate-0 transition duration-500 border border-slate-100">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                                    alt="Office Team"
                                    className="rounded-2xl grayscale hover:grayscale-0 transition duration-500"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0b4a8b] text-[10px] font-black uppercase tracking-widest mb-6">
                                <Target className="w-4 h-4" /> Our Mission
                            </div>
                            <h2 className="text-4xl font-black mb-6">To make compliance invisible.</h2>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                We are building the API layer between Zimbabwean businesses and the regulatory state. By automating specific filings like SI 108 and Tax Clearance, we are reducing the cost of doing business in Zimbabwe.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 font-bold text-slate-700">
                                    <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600"><TrendingUp className="w-5 h-5" /></div>
                                    Accelerating Economic Formalization
                                </li>
                                <li className="flex items-center gap-4 font-bold text-slate-700">
                                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600"><Award className="w-5 h-5" /></div>
                                    Certified by Institute of Chartered Secretaries
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-3xl border border-slate-100 text-center hover:border-blue-200 transition group"
                            >
                                <div className="text-3xl lg:text-4xl font-black text-[#0b4a8b] mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-black mb-4">The Compliance <span className="text-[#0b4a8b]">Experts</span></h2>
                        <p className="text-slate-500">Led by certified chartered secretaries and tax practitioners.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="relative overflow-hidden rounded-3xl mb-6 bg-slate-100">
                                    <img src={member.image} alt={member.name} className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition duration-500 grayscale group-hover:grayscale-0" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-8">
                                        <div className="flex gap-4">
                                            <a href="#" className="p-2 bg-white rounded-full hover:bg-blue-500 hover:text-white transition"><Linkedin className="w-4 h-4" /></a>
                                            <a href="#" className="p-2 bg-white rounded-full hover:bg-sky-500 hover:text-white transition"><Twitter className="w-4 h-4" /></a>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-black mb-1">{member.name}</h3>
                                <div className="text-sm font-bold text-[#0b4a8b] uppercase tracking-widest mb-3">{member.role}</div>
                                <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-[#0b4a8b] text-white">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-4xl font-black mb-8">Ready to get compliant?</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/apply" className="bg-white text-[#0b4a8b] px-10 py-5 rounded-xl font-black text-lg hover:bg-blue-50 transition active:scale-95 shadow-2xl">
                                Start Application
                            </Link>
                            <Link href="/contact" className="border border-white/20 hover:bg-white/10 px-10 py-5 rounded-xl font-bold text-lg transition active:scale-95">
                                Visit Our Offices
                            </Link>
                        </div>
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
