"use client";

import { useRouter } from 'next/navigation';

export default function LandingSelector() {

    const router = useRouter();
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-6">
            <h1 className="text-3xl font-bold mb-4">UK Experience Centre</h1>
            <h2 className="text-2xl mb-8">What would you like to do today?</h2>
            <button
                onClick={() => router.push('/tour')}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700"
            >
                Tour Management
            </button>
            <button
                onClick={() => router.push('/manual')}
                className="px-6 py-3 bg-green-600 text-white rounded-xl text-lg hover:bg-green-700"
            >
                Manual Demos
            </button>
        </div>
    );

}
  