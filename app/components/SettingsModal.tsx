"use client";

import { motion } from "framer-motion";
import { createPortal } from "react-dom";

type SettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Settings({ isOpen, onClose }: SettingsModalProps) {
  if (!isOpen) return null;
  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div>
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <div>
           <input type="range" min="0" max="100" className="w-64 mb-4"></input>
           <button>Mute</button>
         </div>
        
         <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Report a bug
         </button>
         <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
             System Power
         </button>
      </div>
    </div>,
    document.body
  );
}