'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AskAiButton } from '@/components/ask-ai-button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  MessageSquare,
  Zap,
  Shield,
  Globe,
  Code2,
  ShoppingCart,
  HeadphonesIcon,
  Cpu,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Deploy in 5 Minutes',
    description: 'No coding required. Just copy-paste our snippet and you are ready to go.',
  },
  {
    icon: Cpu,
    title: 'Powered by Gemini 2.5 Flash',
    description: 'The latest AI technology for intelligent, contextual conversations.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Human Handoff',
    description: 'Seamlessly transfer to your support team when AI cannot help.',
  },
  {
    icon: Globe,
    title: 'Multi-Language',
    description: 'Support customers in 50+ languages automatically.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Ready',
    description: 'Native integrations with Shopify, WooCommerce, and more.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'GDPR compliant, SOC 2 certified, and EU data hosting available.',
  },
];

const integrations = [
  { name: 'Shopify', icon: ShoppingCart },
  { name: 'Zendesk', icon: HeadphonesIcon },
  { name: 'WordPress', icon: Code2 },
  { name: 'Webflow', icon: Globe },
  { name: 'Zapier', icon: Zap },
  { name: 'Custom', icon: Code2 },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              <span className="font-semibold text-lg">BubblaV</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="https://www.bubblav.com/features"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Features
              </Link>
              <Link
                href="https://www.bubblav.com/integrations"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Integrations
              </Link>
              <Link
                href="https://docs.bubblav.com"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Docs
              </Link>
              <Link
                href="https://www.bubblav.com/pricing"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Pricing
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <AskAiButton />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 dark:from-blue-950/20 to-transparent pointer-events-none" />

        {/* Animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-40 right-1/4 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Powered by Google Gemini 2.5 Flash</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            AI Chatbot for Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
              Website
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto"
          >
            The fastest, easiest way to add intelligent customer support to your
            website. Deploy in 5 minutes with no coding required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <AskAiButton />
            <a
              href="https://github.com/bubblav-org/nextjs-template"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              <Code2 className="w-4 h-4" />
              View on GitHub
            </a>
          </motion.div>

          {/* Deploy Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbubblav-org%2Fnextjs-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://vercel.com/button"
                alt="Deploy with Vercel"
                className="h-10 mx-auto hover:opacity-80 transition-opacity"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Powerful features to delight your customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Integrates With Your Tools
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Connect with your favorite platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:scale-105"
              >
                <integration.icon className="w-8 h-8 mx-auto mb-3 text-zinc-700 dark:text-zinc-300" />
                <p className="text-sm font-medium text-center">
                  {integration.name}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="https://www.bubblav.com/integrations"
              className="inline-flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:underline"
            >
              View all integrations
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Join thousands of businesses using BubblaV to provide better
              customer support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <AskAiButton />
              <Link
                href="https://www.bubblav.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold">BubblaV</span>
            </div>

            <div className="flex items-center gap-8 text-sm text-zinc-600 dark:text-zinc-400">
              <Link href="https://www.bubblav.com">Website</Link>
              <Link href="https://docs.bubblav.com">Documentation</Link>
              <Link href="https://www.bubblav.com/privacy">Privacy</Link>
              <Link href="https://www.bubblav.com/terms">Terms</Link>
            </div>

            <p className="text-sm text-zinc-500">
              © 2026 BubblaV. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
