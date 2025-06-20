"use client";

import { useQrwc } from './lib/QrwcProvider';


export default function Home() {
  const { isConnected } = useQrwc()

  return (
    <main className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">
        {isConnected ? '✅ Connected to Core' : '❌ Not Connected'}
      </h1>
    </main>
  )
}
