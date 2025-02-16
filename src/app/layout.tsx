import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Socially",
  description: "A modern social media application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="min-h-screen">
            <Navbar />
            <main className="py-8">
              <div className="px-4 mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                  <div className="hidden lg:block lg:col-span-3">
                    <Sidebar />
                  </div>
                  <div className="lg:col-span-9">{children}</div>
                </div>
              </div>
              <Toaster />
              {/* container to center the content */}
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
