import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import {
  Sparkles,
  Globe,
  UserSearch,
  Zap,
  Database,
  BarChart3,
} from 'lucide-react'
import { BubblaVWidget } from '@bubblav/ai-chatbot-react'

const WEBSITE_ID = process.env.NEXT_PUBLIC_BUBBLAV_WEBSITE_ID || ''

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
      <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-200">
      {/* Header - Vercel-inspired clean, minimal header */}
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
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section - Vercel-inspired clean hero */}
      <section className="relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-foreground/5 opacity-20 blur-3xl dark:bg-foreground/10" />
        </div>

        <div className="container flex max-w-screen-2xl flex-col items-center gap-6 py-24 md:py-32">
          <div className="mx-auto flex max-w-[42rem] flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-xs text-muted-foreground mb-8">
              <span className="flex h-1.5 w-1.5 rounded-full bg-foreground mr-2 animate-pulse" />
              Next.js Starter Template
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-7xl text-foreground">
              Build AI Chatbots
              <span className="block text-foreground/60">in Minutes</span>
            </h1>
            <p className="mt-6 max-w-[42rem] leading-7 text-muted-foreground sm:text-lg">
              A fast, intelligent AI chatbot for your website. Deploy in 5 minutes
              with no coding required.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://www.bubblav.com"
                target="_blank"
                rel="noopener"
                className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background shadow transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
              >
                Get Started Free
              </Link>
              <Link
                href="https://docs.bubblav.com"
                target="_blank"
                rel="noopener"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-8 text-sm font-medium shadow-sm transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
              >
                Read the Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Vercel-inspired clean cards */}
      <section className="container py-24 max-w-screen-2xl">
        <div className="mx-auto max-w-[42rem] text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Everything you need
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features to automate customer support while keeping the
            human touch.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Sparkles}
            title="AI-Powered Intelligence"
            description="Powered by AI for fast, accurate responses that understand context and intent."
          />
          <FeatureCard
            icon={Globe}
            title="Omni-Channel Support"
            description="Engage customers across Messenger, Discord, Slack, WhatsApp, and Instagram from one dashboard."
          />
          <FeatureCard
            icon={UserSearch}
            title="Human Handoff"
            description="Seamlessly transfer complex conversations to your team with live support and context preservation."
          />
          <FeatureCard
            icon={Zap}
            title="Native Integrations"
            description="Works with Shopify, Zendesk, Zapier, Notion, and 5000+ apps. Connect your tools seamlessly."
          />
          <FeatureCard
            icon={Database}
            title="Knowledge Base"
            description="Train on your website content, Notion, Zendesk, and more. RAG-powered accuracy for domain-specific queries."
          />
          <FeatureCard
            icon={BarChart3}
            title="Analytics Dashboard"
            description="Track conversations, resolution rates, and customer satisfaction. Data-driven insights to improve support."
          />
        </div>
      </section>

      {/* CTA Section - Vercel-inspired minimal CTA */}
      <section className="container py-24 max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-muted/30 p-12 text-center md:p-16">
          {/* Subtle decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-foreground/5 blur-3xl dark:bg-foreground/10" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-foreground/5 blur-3xl dark:bg-foreground/10" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of businesses using BubblaV to provide instant,
              intelligent support 24/7.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center">
              <Link
                href="https://www.bubblav.com"
                target="_blank"
                rel="noopener"
                className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background shadow transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
              >
                Start Free Trial
              </Link>
              <Link
                href="https://docs.bubblav.com"
                target="_blank"
                rel="noopener"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-8 text-sm font-medium shadow-sm transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Vercel-inspired clean footer */}
      <footer className="border-t border-border/50 bg-muted/20 py-12">
        <div className="container max-w-screen-2xl">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="space-y-3">
              <Link
                href="https://www.bubblav.com"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2"
              >
                <div className="relative h-5 w-5">
                  <Image
                    src="/images/logos/logo32.png"
                    alt="BubblaV Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-semibold text-sm">BubblaV</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                AI-powered customer support for modern businesses.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-sm mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://www.bubblav.com"
                    target="_blank"
                    rel="noopener"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.bubblav.com/pricing"
                    target="_blank"
                    rel="noopener"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.bubblav.com/integrations"
                    target="_blank"
                    rel="noopener"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-sm mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://docs.bubblav.com"
                    target="_blank"
                    rel="noopener"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/bubblav-org/nextjs-template"
                    target="_blank"
                    rel="noopener"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} BubblaV. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* BubblaV Chatbot Component */}
      {WEBSITE_ID && <BubblaVWidget websiteId={WEBSITE_ID} />}
    </div>
  )
}
