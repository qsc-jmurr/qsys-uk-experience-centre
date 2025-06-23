"use client";

import { ReactNode} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SettingsModal from '../components/SettingsModal';

interface LayoutProps {
  children: ReactNode;
}

import { useState } from 'react';

export default function Layout({ children }: LayoutProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleOpenSettings = () => setIsSettingsOpen(true);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenSettings={handleOpenSettings} />
      <main className="flex-grow">
        {children}
      </main>
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)}
      /> 
      <Footer />
    </div>
  );
}