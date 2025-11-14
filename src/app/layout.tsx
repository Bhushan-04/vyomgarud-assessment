import './globals.css'
import React from 'react'
import { Poppins, Inter } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['600','700'], variable: '--font-poppins' })
const inter = Inter({ subsets: ['latin'], weight: ['300','400','600'], variable: '--font-inter' })

export const metadata = {
  title: 'VyomGarud — UAV Systems',
  description: 'Military-grade UAV systems — precision engineering and advanced autonomy.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased" style={{ fontFamily: 'Inter, Poppins, sans-serif' }}>
        <header className="py-6">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md flex items-center justify-center bg-[#111214] border border-[#1f2326]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L15 8l6 1-4.5 4 1 6L12 17 4.5 19l1-6L1 9l6-1 3-6z" stroke="#ff7b00" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="font-semibold text-lg tracking-widest">VyomGarud</span>
            </div>

            <nav className="hidden md:flex gap-6 items-center text-sm text-[#bfc8cf]">
              <a href="#about">About</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#highlights">Highlights</a>
              <a href="#contact">Contact</a>
              <a className="ml-4 px-4 py-2 rounded-md bg-[#ff7b00] text-black font-medium" href="#contact">Request Demo</a>
            </nav>

            <div className="md:hidden">
              <button aria-label="menu" className="p-2 rounded-md bg-[#0f1113] border border-[#1a1c1e]">☰</button>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="mt-20 py-8">
          <div className="container text-sm text-[#9aa3ad]">
            <div className="flex flex-col md:flex-row justify-between">
              <div> {new Date().getFullYear()} VyomGarud — All rights reserved</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
