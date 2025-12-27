import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyTaxClearance | SI 108 Company Re-Registration Zimbabwe",
  description: "Re-register your company under SI 108 of 2025 - 100% online. Skip the queues and get compliant in 48 hours. Trusted by Zimbabwean businesses.",
  keywords: "SI 108, company re-registration, Zimbabwe, tax clearance, ITF263, ZIMRA, compliance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
