"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Modal from './NavModal';
import { useRouter } from 'next/navigation';

type HeaderProps = {
    onOpenSettings: () => void;
}

export default function Header({onOpenSettings}: HeaderProps) {
    const router = useRouter();
    return(
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <button onClick={() => router.push('/main')} className="text-lg font-bold">
                <img src="/logo.png" alt="" className="w-80 h-18"/>
            </button>   
            <button
            onClick={onOpenSettings}>
                Settings
            </button>
        </header>
    );
}