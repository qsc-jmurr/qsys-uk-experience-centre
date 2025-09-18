"use client";

import { useState, useEffect } from 'react';
import { useQrwc } from '../lib/QrwcProvider';

export default function SplashScreen() {
    const { qrwc } = useQrwc();
    const [isPowerOn, setIsPowerOn] = useState(false);

    const powerOnSystem = async () => {
        const roomPower = qrwc?.components.roomPower.controls['btnPowerOn'];
        if (roomPower) {
            const { Bool: newBool } = await roomPower.update(true);
        }
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">UK Experience Centre</h1>
            <h3 className="text-2xl mb-8">Companion App</h3>
            <button onClick={powerOnSystem} className = "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Power On
            </button>
        </div>
        </div>
    );
}