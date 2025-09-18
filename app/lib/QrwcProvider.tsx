"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Qrwc } from '@q-sys/qrwc';

type QrwcContextType = {
  qrwc: Qrwc | null;
  isConnected: boolean;
  roomPowerOn: boolean;
};

const QrwcContext = createContext<QrwcContextType | undefined>(undefined);

export const QrwcProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  //QRWC Connection Logic
  const [qrwc, setQrwc] = useState<Qrwc | null>(null);   //State to hold the Qrwc instance
  const [isConnected, setIsConnected] = useState(false); //State to track connection status
  const [roomPowerOn, setRoomPowerOn] = useState<boolean>(false); // State to track room power
  const coreIP = process.env.NEXT_PUBLIC_CORE_IP;        //Get Core IP from environment variables

  
  useEffect(() => {
    let activeQrwc: Qrwc | null = null;
    let socket: WebSocket;

    const setUpQrwc = async () => {
      try {
        socket = new WebSocket(`ws://${coreIP}/qrc-public-api/v0`);

        const qrwcInstance = await Qrwc.createQrwc({
          socket,
          pollingInterval: 35
        });

        activeQrwc = qrwcInstance;
        setQrwc(qrwcInstance);

        
        //Room Power Parser
        const roomPower = qrwcInstance.components.roomPower.controls['ledPowerOn'];
        if (roomPower) {
          setRoomPowerOn(roomPower.state.Bool);
          
          const handlePowerStateChange = () => {
            setRoomPowerOn(roomPower.state.Bool);
            console.log(`Power state changed: ${roomPower.state.Bool}`);
          }

          if (roomPower.on) {
            roomPower.on('update', handlePowerStateChange);
            console.log('Subscribed to roomPower updates');
          }
        }





        qrwcInstance.on('update', (component, control, state) => {
          console.log(`Component ${component.name}.${control.name} updated:`, state);
          setIsConnected(true);
        });

        qrwcInstance.on('disconnected', () => {
          console.log('Disconnected from Core');
          setIsConnected(false);
          setTimeout(setUpQrwc, 5000); // Retry connection
        });

      } catch (err) {
        console.error('QRWC setup failed:', err);
      }
    };

    setUpQrwc();

    return () => {
      console.log('Cleaning up QRWC');
      if (activeQrwc) {
        activeQrwc.close();
      }
      if (socket) {
        socket.close();
      }
    };
  }, [coreIP]);

  return (
    <QrwcContext.Provider value={{ qrwc, isConnected, roomPowerOn }}>
      {children}
    </QrwcContext.Provider>
  );
};

export const useQrwc = () => {
  const context = useContext(QrwcContext);
  if (!context) {
    throw new Error("useQrwc must be used within a QrwcProvider");
  }
  return context;
};
