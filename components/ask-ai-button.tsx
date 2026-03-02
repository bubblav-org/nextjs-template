'use client';

import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    BubblaV?: {
      open: () => void;
    };
  }
}

interface AskAiButtonProps {
  className?: string;
}

export function AskAiButton({ className = '' }: AskAiButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.BubblaV?.open) {
      window.BubblaV.open();
    }
  };

  return (
    <motion.button
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition-opacity ${className}`}
    >
      <MessageSquare className="w-4 h-4" />
      Ask AI
    </motion.button>
  );
}
