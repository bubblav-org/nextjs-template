'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useBubblaVWidget } from '@bubblav/ai-chatbot-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export function Header() {
  const widget = useBubblaVWidget()

  const handleOpenChat = () => {
    widget?.open()
  }

  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link
          href="https://www.bubblav.com"
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="relative h-6 w-6">
            <Image
              src="/images/logos/logo64.png"
              alt="BubblaV Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-semibold text-sm">BubblaV</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="https://www.bubblav.com/integrations"
            target="_blank"
            rel="noopener"
            className="transition-colors hover:text-foreground text-foreground/70"
          >
            Integrations
          </Link>
          <Link
            href="https://docs.bubblav.com"
            target="_blank"
            rel="noopener"
            className="transition-colors hover:text-foreground text-foreground/70"
          >
            Docs
          </Link>
          <Link
            href="https://github.com/bubblav-org/nextjs-template"
            target="_blank"
            rel="noopener"
            className="transition-colors hover:text-foreground text-foreground/70"
          >
            GitHub
          </Link>
          <button
            onClick={handleOpenChat}
            className="inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background shadow transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
          >
            Ask AI
          </button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
