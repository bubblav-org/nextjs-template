# BubblaV NextJS Starter Template

A fast, beautiful NextJS starter template showcasing the [BubblaV AI Chatbot](https://www.bubblav.com). This template demonstrates how to integrate intelligent customer support into your NextJS application.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbubblav-org%2Fnextjs-template&env=NEXT_PUBLIC_BUBBLAV_WEBSITE_ID&envDescription=Website%20ID%20from%20BubblaV%20dashboard)

## Live Demo

- **NextJS**: https://bubblav-nextjs-template.vercel.app

## Features

- ⚡️ **Next.js 16** with App Router
- 🎨 **Tailwind CSS** for styling
- 🌙 **Dark/Light Theme** support with next-themes
- 🤖 **BubblaV AI Chatbot** integration
- 🎭 **Framer Motion** animations
- 📱 **Responsive** design for mobile, tablet, and desktop
- ♿ **Accessible** components
- 🎨 **Vercel-inspired** design system

## Quick Start

### Deploy to Vercel

Click the button above to deploy this template to Vercel in one click.

### Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Integrating BubblaV Chatbot

This template includes the BubblaV chatbot widget. To customize:

1. Sign up at [bubblav.com](https://www.bubblav.com)
2. Create a website and get your Website ID
3. Update the `websiteId` in `components/bubblav-chatbot.tsx`:

```typescript
<BubblaVChatbot websiteId="your-website-id" />
```

### Ask AI Button

The template includes an "Ask AI" button in the header that opens the chat widget:

```tsx
import { AskAiButton } from '@/components/ask-ai-button';
import { openChat } from '@/components/bubblav-chatbot';

<AskAiButton onClick={openChat} />
```

## Documentation

- [BubblaV Documentation](https://docs.bubblav.com)
- [Installation Guide](https://docs.bubblav.com/user-guide/installation)
- [SDK Reference](https://docs.bubblav.com/developer-guide/sdk-reference)
- [Integrations](https://www.bubblav.com/integrations)

## Customization

### Theme Colors

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --vercel-blue: #0070f3;
  /* ... */
}
```

### Styling

The template follows Vercel's design guidelines:
- Clean, minimal aesthetic
- Smooth animations
- Responsive breakpoints
- Dark/light mode support

## Skills Used

This template follows best practices from these Claude Code skills:

- [web-design-guidelines](https://github.com/vercel-labs/agent-skills)
- [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- [vercel-react-best-practices](https://github.com/vercel-labs/agent-skills)

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [lucide-react](https://lucide.dev/) - Icons
- [@bubblav/ai-chatbot-react](https://www.npmjs.com/package/@bubblav/ai-chatbot-react) - Chatbot SDK

## License

MIT

## Support

- [Documentation](https://docs.bubblav.com)
- [GitHub Issues](https://github.com/bubblav-org/nextjs-template/issues)
- [Contact](https://www.bubblav.com/contact)

---

Made with ❤️ by [BubblaV](https://www.bubblav.com)
