import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Configure Geist fonts for the application
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update site metadata (Browser Tab Title, SEO Description, and Favicon)
export const metadata: Metadata = {
  title: "Sayed Nafisur Rahman Alif", 
  description: "Sayed Nafisur Rahman Alif's personal portfolio, showcasing projects built with Next.js, TypeScript, and modern web technologies.",
  // Manual link for favicon (required since auto-detection is failing)
  icons: {
    icon: '/Users/alif/Portfolio-website/public/profile.avif', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    {/* Apply body styles, dark mode transition, and font variables */}
    <body className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}>
        {/* Wrap the application with the Theme Context Provider */}
        <ThemeProvider>
          <Navbar />
          {/* Main content area, with padding to offset the fixed Navbar */}
          <main className="min-h-screen pt-24">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}