# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BubblaV NextJS Starter Template - A Next.js 16 template showcasing the BubblaV AI Chatbot integration. This is a standalone template package designed for easy deployment to Vercel. The template includes dark/light theme support, responsive design, and is production-ready.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (port 3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Environment Setup

### Required Environment Variables

This project uses one environment variable for the BubblaV chatbot:

```env
# .env.local (or .env.production for production)
NEXT_PUBLIC_BUBBLAV_WEBSITE_ID=your-website-id-here
```

**How to get your Website ID:**
1. Sign up at [bubblav.com](https://www.bubblav.com)
2. Create a website/project
3. Copy the Website ID from the dashboard
4. Set `NEXT_PUBLIC_BUBBLAV_WEBSITE_ID` in your `.env.local` file

**Note**: The `NEXT_PUBLIC_` prefix means this variable is exposed to the browser (used by the chatbot widget).

## Tech Stack

- **Framework**: Next.js 16 (React 19) with App Router
- **Styling**: Tailwind CSS v4 with shadcn/ui (new-york style, neutral base color)
- **Theme**: next-themes for dark/light mode
- **Icons**: lucide-react
- **Chatbot SDK**: @bubblav/ai-chatbot-react
- **TypeScript**: Path alias `@/*` maps to project root

## Architecture

### Project Structure
```
app/
  layout.tsx        # Root layout with ThemeProvider setup
  page.tsx          # Home page
  globals.css       # Design tokens and Tailwind styles
components/
  Header.tsx        # Navigation with chatbot integration
  ui/               # shadcn/ui components (Button, etc.)
lib/
  utils.ts          # cn() helper for tailwind-merge
public/            # Static assets and logos
```

### Key Files

- **`app/layout.tsx`**: Sets up ThemeProvider with `suppressHydrationWarning` on html tag to prevent dark mode hydration mismatches
- **`app/globals.css`**: CSS custom properties for colors, spacing, and animations
- **`components/Header.tsx`**: Demonstrates BubblaV widget integration with `useBubblaVWidget` hook
- **`components.json`**: shadcn/ui configuration (new-york style, cssVariables enabled)

### Design System

The template uses Vercel-inspired design with CSS custom properties:

**Colors (oklch-based)**: Defined in `app/globals.css` with CSS variables for light/dark themes. Key colors include `--background`, `--foreground`, `--primary`, `--muted`, `--accent`, `--destructive`, plus Vercel brand colors (`--vercel-blue`, `--vercel-purple`, etc.)

**Radius**: `--radius: 0.625rem` (used with shadcn's radius utilities)

**Theming**: Dark mode via `prefers-color-scheme: dark` media query. The html tag uses `suppressHydrationWarning` to prevent hydration mismatch with next-themes.

### BubblaV Chatbot Integration

The chatbot widget is integrated globally and appears on all pages. Key patterns:

**Using the widget in components:**
```typescript
import { useBubblaVWidget } from '@bubblav/ai-chatbot-react'

export function MyComponent() {
  const widget = useBubblaVWidget()

  const handleOpenChat = () => {
    widget?.open()
  }

  return <button onClick={handleOpenChat}>Ask AI</button>
}
```

The widget is initialized automatically on page load and available throughout the app via the hook.

### ESLint Configuration

Uses `eslint-config-next` with:
- `core-web-vitals` preset (performance & accessibility)
- `typescript` preset
- Custom ignores for `.next/`, `out/`, `build/`, `next-env.d.ts`

## Common Patterns

### Adding shadcn/ui Components

The CLI is pre-configured:
```bash
npx shadcn add [component-name]
```

Components follow the new-york style variant with cssVariables enabled. Aliases are configured in `components.json`:
- `@/components` → components directory
- `@/components/ui` → UI components
- `@/lib` → utilities
- `@/lib/utils` → the `cn()` helper

### Using the Theme

Access next-themes context in client components:
```typescript
'use client'

import { useTheme } from 'next-themes'

export function MyComponent() {
  const { theme, setTheme } = useTheme()
  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle</button>
}
```

### Utility Helper

The `cn()` function merges Tailwind classes without conflicts:
```typescript
import { cn } from '@/lib/utils'

className={cn('px-4 py-2', isActive && 'bg-blue-500')}
```

## File Naming

Use kebab-case for file names. Keep files under 200 lines for maintainability.

## Deployment

### Vercel (Recommended)

This template is optimized for Vercel deployment:

1. **One-click deploy**: Use the "Deploy with Vercel" button in README
2. **Environment variables**: Set `NEXT_PUBLIC_BUBBLAV_WEBSITE_ID` in Vercel dashboard
3. **Automatic deploys**: Push to GitHub for automatic Vercel builds
4. **Preview deployments**: PR previews build automatically

### Manual Build

```bash
npm run build    # Creates .next production build
npm start        # Starts production server
```

## Troubleshooting

**Theme not applying or flashing on page load**
- Ensure `suppressHydrationWarning` is on the `<html>` tag in `app/layout.tsx`
- Check that ThemeProvider is wrapping children in layout.tsx

**Chatbot widget not appearing**
- Verify `NEXT_PUBLIC_BUBBLAV_WEBSITE_ID` is set correctly in `.env.local`
- Check browser console for errors from @bubblav/ai-chatbot-react
- Ensure the chatbot component is initialized (check Header.tsx)

**Tailwind styles not loading**
- Verify tailwind config includes Tailwind CSS v4 (@tailwindcss/postcss)
- Rebuild: `npm run build`

**Type errors on build**
- Run type check: TypeScript strict mode is enabled
- Check that all imports use the correct path aliases

## Build Notes

- Tailwind CSS v4 uses `@tailwindcss/postcss` plugin (no separate tailwind.config.js needed)
- PostCSS config loads the Tailwind PostCSS plugin automatically
- TypeScript paths: `@/*` = project root
- Next.js 16 uses the App Router (no Pages directory)
