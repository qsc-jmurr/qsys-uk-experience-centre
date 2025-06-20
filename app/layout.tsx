import { Qrwc } from '@q-sys/qrwc'
import './globals.css'
import { QrwcProvider } from './lib/QrwcProvider'
import localFont from 'next/font/local'

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

export const metadata = {
  title: 'QRWC App',
  description: 'Testing QRWC connection',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QrwcProvider>
          {children}
        </QrwcProvider>
      </body>
    </html>
  )
}
