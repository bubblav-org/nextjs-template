'use client';

import { useEffect } from 'react';

const WIDGET_SRC = 'https://www.bubblav.com/widget.js';
const SCRIPT_ATTR = 'data-bubblav-widget';

interface BubblaVChatbotProps {
  websiteId?: string;
}

export function BubblaVChatbot({ websiteId }: BubblaVChatbotProps) {
  const id = websiteId || process.env.NEXT_PUBLIC_BUBBLAV_WEBSITE_ID || '';

  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (!id) {
      console.warn('BubblaV: No website ID provided. Set NEXT_PUBLIC_BUBBLAV_WEBSITE_ID env var.');
      return;
    }

    // Avoid injecting the script twice
    if (document.querySelector(`script[${SCRIPT_ATTR}]`)) return;

    const script = document.createElement('script');
    script.src = WIDGET_SRC;
    script.async = true;
    script.setAttribute('data-site-id', id);
    script.setAttribute(SCRIPT_ATTR, 'true');
    document.body.appendChild(script);

    return () => {
      // Only remove during development
      if (process.env.NODE_ENV === 'development') {
        const s = document.querySelector<HTMLScriptElement>(`script[${SCRIPT_ATTR}]`);
        if (s) s.remove();
      }
    };
  }, [id]);

  return null;
}
