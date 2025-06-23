"use client";
import { useQrwc } from './lib/QrwcProvider';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Main from './components/Main';
import SplashScreen from './components/SplashScreen';

export default function Home() {
  const { qrwc, isConnected } = useQrwc()
  const roomPower = qrwc?.components.roomPower.controls['btnPowerOn'];
  // Local state to trigger re-render on feedback change
  const [powerState, setPowerState] = useState(roomPower?.state.Bool);

  useEffect(() => {
    if (!roomPower) return;

    const handleStateChange = () => {
      setPowerState(roomPower.state.Bool);
      console.log(`Power state changed: ${roomPower.state.Bool}`);
    };

    if (roomPower.on) {
      roomPower.on('update', handleStateChange);
      console.log('Subscribed to roomPower updates');
    }

    setPowerState(roomPower.state.Bool);

  }, [roomPower]);

  console.log('Power state:', powerState);
  console.log('QRWC is connected:', isConnected);

  return (
    <main className="flex items-center justify-center h-screen">
      { isConnected ? 
        <div className="text-2xl font-bold">
          { powerState ?         
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
