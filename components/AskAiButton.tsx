'use client'

import { useBubblaVWidget } from '@bubblav/ai-chatbot-react'

export function AskAiButton() {
  const widget = useBubblaVWidget()

  return (
    <button
      onClick={() => widget?.open()}
      className="inline-flex items-center justify-center rounded-md border border-border bg-background px-8 text-sm font-medium shadow-sm transition-all hover:bg-muted hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 h-11"
    >
      Ask AI
    </button>
  )
}
