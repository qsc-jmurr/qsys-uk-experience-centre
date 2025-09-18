 "use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQrwc } from '../lib/QrwcProvider';
import Settings from './SettingsModal';

export default function Header() {
    const router = useRouter();
    const { qrwc, isConnected } = useQrwc();
    const roomPower = qrwc?.components.roomPower.controls['ledPowerOn']

    const handleOpenSettings = () => {
        console.log('Settings button clicked');
    
        Settings({ isOpen: true, onClose: () => {} });
    }

    if (!(isConnected && roomPower?.state.Bool === true)) {
        return null; // Don't render the header if not connected
    }

    return(
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <button onClick={() => router.push('/')} className="text-lg font-bold">
                <img src="/logo.png" alt="" className="w-80 h-18"/>
            </button>   
            <button
            onClick={handleOpenSettings}>
                Settings
            </button>
        </header>
    );
}