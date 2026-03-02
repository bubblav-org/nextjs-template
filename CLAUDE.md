# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BubblaV NextJS Starter Template - A Next.js 16 template showcasing the BubblaV AI Chatbot integration. This is a standalone template package designed for easy deployment to Vercel.

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

## Tech Stack

- **Framework**: Next.js 16 (React 19) with App Router
- **Styling**: Tailwind CSS v4 with shadcn/ui (new-york style, neutral base color)
- **Theme**: next-themes for dark/light mode
- **Animations**: Framer Motion 12.34+
- **Icons**: lucide-react
- **Chatbot SDK**: @bubblav/ai-chatbot-react
- **TypeScript**: Path alias `@/*` maps to project root

## Architecture

### Project Structure
```
app/              # Next.js App Router (layout.tsx, page.tsx, globals.css)
lib/              # Utilities (cn() helper for tailwind-merge)
components/        # React components
  ui/             # shadcn/ui components
public/           # Static assets
```

### Design System

The template uses Vercel-inspired design with CSS custom properties:

**Colors (oklch-based)**: Defined in `app/globals.css` with CSS variables for light/dark themes. Key colors include `--background`, `--foreground`, `--primary`, `--muted`, `--accent`, `--destructive`, plus Vercel brand colors (`--vercel-blue`, `--vercel-purple`, etc.)

**Radius**: `--radius: 0.625rem` (used with shadcn's radius utilities)

**Theming**: Dark mode via `prefers-color-scheme: dark` media query. The `<html>` tag uses `suppressHydrationWarning` to prevent hydration mismatch with next-themes.

### Key Integrations

**BubblaV Chatbot**: The template demonstrates chatbot integration. To customize:
1. Create a website account at bubblav.com
2. Get a Website ID
3. Update `websiteId` prop in the chatbot component

### ESLint Configuration

Uses `eslint-config-next` with:
- `core-web-vitals` preset
- `typescript` preset
- Custom ignores for `.next/`, `out/`, `build/`, `next-env.d.ts`

## Component Patterns

When adding shadcn/ui components, use the installed CLI (already configured):
```bash
npx shadcn add [component-name]
```

Components follow the new-york style variant with cssVariables enabled.

## File Naming

Use kebab-case for file names. Keep files under 200 lines for maintainability.

## Build Notes

- Tailwind CSS v4 uses `@tailwindcss/postcss` plugin (no separate tailwind.config.js needed)
- PostCSS config loads the Tailwind PostCSS plugin
- TypeScript paths: `@/*` = project root
