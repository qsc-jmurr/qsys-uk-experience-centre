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
            <h1 className="text-4xl font-bold mb-4">Welcome to Our App!</h1>
            <button onClick={powerOnSystem}>
                Power On
            </button>
        </div>
        </div>
    );
}