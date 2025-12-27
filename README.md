# MyTaxClearance 🇿🇼

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **Digital Infrastructure for Zimbabwe's Statutory Compliance.**

MyTaxClearance is a fintech-enabled regulatory platform designed to digitize the interface between Zimbabwean businesses and the Companies Registry. We reduce compliance friction through automated workflows, real-time tracking, and a premium digital experience.

## ✨ Features

- **⚡ Accelerated Compliance**: End-to-end SI 108 re-registration and tax clearance in under 48 hours.
- **🔒 Bank-Grade Security**: AES-256 encryption for all statutory documents and director IDs.
- **🎨 Modern UX**: A frictionless, mobile-first interface built with Framer Motion for guided interactions.
- **📱 Real-Time Tracking**: WhatsApp and SMS integration for live case status updates.
- **🏦 Institutional API**: Embedded compliance infrastructure for banking partners and lenders.

## 🛠️ Tech Stack

This project is built on a modern, type-safe stack designed for performance and scale.

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + [clsx](https://github.com/lukeed/clsx)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Server Components + Client Hooks

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/operations-hash/mytaxclearance-website.git
   cd mytaxclearance-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the app**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```bash
src/
├── app/              # Next.js App Router pages
│   ├── apply/        # Multi-step application form
│   ├── track/        # Case tracking dashboard
│   └── ...
├── components/       # Reusable UI components
├── lib/              # Utility functions (cn, formatters)
└── styles/           # Global styles and Tailwind config
```

## 📄 License

&copy; 2025 MyTaxClearance. All rights reserved.
