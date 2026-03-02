# BubblaV NextJS Starter Template

A production-ready Next.js 16 starter template with built-in [BubblaV AI Chatbot](https://www.bubblav.com) integration. Deploy intelligent customer support in minutes—no coding required.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbubblav-org%2Fnextjs-template&env=NEXT_PUBLIC_BUBBLAV_WEBSITE_ID&envDescription=Website%20ID%20from%20BubblaV%20dashboard)

## Live Demo

- **NextJS Template**: https://bubblav-nextjs-template.vercel.app

## Features

- ⚡️ **Next.js 16** with React 19 and App Router
- 🎨 **Tailwind CSS v4** for modern styling
- 🌙 **Dark/Light Theme** with system detection
- 🤖 **AI Chatbot** fully integrated and ready to customize
- 📱 **Mobile-first** responsive design
- ♿ **Accessible** (WCAG compliant) components
- 🚀 **Vercel-optimized** for instant deployment

## Getting Started

### 🚀 Deploy to Vercel (30 seconds)

Click the button above to deploy with one click. Vercel will prompt you for the `NEXT_PUBLIC_BUBBLAV_WEBSITE_ID` environment variable.

**Next steps after deployment:**
1. Get your Website ID from [bubblav.com dashboard](https://www.bubblav.com)
2. Add it as an environment variable in Vercel
3. Your site redeploys automatically with the chatbot active

### 💻 Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local and add your Website ID
echo 'NEXT_PUBLIC_BUBBLAV_WEBSITE_ID=your-website-id-here' > .env.local

# 3. Start development server (runs on http://localhost:3000)
npm run dev

# 4. Make changes and see them instantly!
```

For production builds:
```bash
npm run build && npm start
```

## Setting Up Your AI Chatbot

### Step 1: Create a BubblaV Account

1. Go to [bubblav.com](https://www.bubblav.com) and sign up
2. Create a new website/project
3. Copy your Website ID from the dashboard

### Step 2: Add Your Website ID

Update your environment variable:

```env
# .env.local (development)
NEXT_PUBLIC_BUBBLAV_WEBSITE_ID=your-website-id

# In Vercel dashboard (production)
# Set the same variable in your project settings
```

### Step 3: Customize the Widget (Optional)

The chatbot widget is automatically initialized on all pages. To customize its behavior:

**Open chat programmatically:**
```typescript
import { useBubblaVWidget } from '@bubblav/ai-chatbot-react'

export function MyComponent() {
  const widget = useBubblaVWidget()

  return (
    <button onClick={() => widget?.open()}>
      Ask AI Assistant
    </button>
  )
}
```

The "Ask AI" button in the header (`components/Header.tsx`) already demonstrates this pattern.

## Customizing Your Template

### Change Colors & Theme

Edit CSS variables in `app/globals.css`:

```css
:root {
  /* Light mode colors */
  --background: #ffffff;
  --foreground: #171717;
  --primary: #0070f3;
  /* ... more colors */
}

@media (prefers-color-scheme: dark) {
  :root {
    /* Dark mode overrides */
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

### Add New Pages

Create files in the `app/` directory:

```typescript
// app/about/page.tsx
export default function About() {
  return <div>About page</div>
}
```

### Add UI Components

Use shadcn/ui:
```bash
npx shadcn add button
npx shadcn add card
npx shadcn add dialog
```

### Style Guide

The template uses:
- **Colors**: oklch-based CSS variables (light/dark mode support)
- **Typography**: Geist font family (sans & mono)
- **Spacing**: Tailwind's standard scale
- **Radius**: 0.625rem (rounded corners)

## Resources & Documentation

### Official Docs
- [BubblaV Docs](https://docs.bubblav.com) - Chatbot setup, features, API
- [Installation Guide](https://docs.bubblav.com/user-guide/installation) - Detailed setup steps
- [SDK Reference](https://docs.bubblav.com/developer-guide/sdk-reference) - React SDK API

### Related Docs
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

### Integration Options
- [BubblaV Integrations](https://www.bubblav.com/integrations) - Shopify, HubSpot, Zendesk, etc.

## Tech Stack

| Purpose | Technology |
|---------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org/) (React 19) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) |
| **Dark Mode** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Icons** | [lucide-react](https://lucide.dev/) |
| **Chatbot SDK** | [@bubblav/ai-chatbot-react](https://www.npmjs.com/package/@bubblav/ai-chatbot-react) |
| **Language** | TypeScript 5 |

## Development

For developers working on this template, see [CLAUDE.md](./CLAUDE.md) for:
- Development workflow and commands
- Architecture and code patterns
- Environment setup details
- Troubleshooting guide

## License

MIT License - see LICENSE file for details

## Getting Help

- 📖 **Docs**: [BubblaV Documentation](https://docs.bubblav.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/bubblav-org/nextjs-template/issues)
- 💬 **Contact**: [BubblaV Support](https://www.bubblav.com/contact)
- 🤖 **Use the chatbot**: Click the "Ask AI" button on the live demo site!

---

Made with ❤️ by [BubblaV](https://www.bubblav.com)
