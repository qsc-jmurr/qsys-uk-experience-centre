"use client";
import { useQrwc } from './lib/QrwcProvider';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Main from './components/Main';
import SplashScreen from './components/SplashScreen';

export default function Home() {
  const { roomPowerOn, isConnected } = useQrwc()

  return (
    <main className="flex items-center justify-center h-screen">
      { isConnected ? 
        <div className="text-2xl font-bold">
          { roomPowerOn ?         
            <Main />
            :
            <SplashScreen />
          }
        </div>
        :
        <div className="text-2xl font-bold text-red-500">
          <LoadingScreen />
        </div>
      }
    </main>
  )
}
