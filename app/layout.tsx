'use client';

import './globals.css'
import { QrwcProvider } from './lib/QrwcProvider'
import localFont from 'next/font/local'
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'

const myFont = localFont({
  src: [
    {
      path: '../public/fonts/Söhne-Extrafett.otf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-custom',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QrwcProvider>
          <Header />
            {children}
          <Footer />
        </QrwcProvider>
      </body>
    </html>
  )
}
