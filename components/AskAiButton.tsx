'use client'

import { useBubblaVWidget } from '@bubblav/ai-chatbot-react'
import { MessageCircle } from 'lucide-react'

export function AskAiButton() {
  const widget = useBubblaVWidget()

  return (
    <button
      onClick={() => widget?.open()}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border bg-background px-8 text-sm font-medium shadow-sm transition-all hover:bg-muted hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 h-11"
    >
      <MessageCircle className="h-4 w-4" />
      <div className="w-px h-4 bg-foreground/20 mx-1" />
      Ask AI
    </button>
  )
}
