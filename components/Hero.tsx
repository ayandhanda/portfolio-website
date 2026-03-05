'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

const TYPING_PHRASES = [
  'designing agentic workflows...',
  'reducing friction with AI...',
  'shipping high-impact features...',
  'building intuitive AI experiences...',
];

function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 60);
    } else if (!isDeleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % TYPING_PHRASES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex]);

  return (
    <span className="font-mono text-indigo-400">
      {`> `}{displayed}<span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 min-h-[90vh] flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Terminal typing badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-slate-300 px-4 py-2 rounded-full text-xs font-mono mb-4 border border-slate-700 shadow-md whitespace-nowrap">
              <TypingEffect />
            </motion.div>

            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md text-indigo-700 px-4 py-2 rounded-full text-xs font-semibold mb-6 border border-white shadow-sm ring-1 ring-indigo-50/50 ml-0 lg:ml-0 whitespace-nowrap">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              Associate Product Manager @ Sprouts.ai
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              I don&apos;t just manage products, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                I build them.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium">
              Shipping AI-powered products that drive measurable impact. From doubling conversion rates to building NLP interfaces with zero learning curve, I solve real problems with intelligent, cost-optimized solutions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#case-studies"
                className="group inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg font-medium w-full sm:w-auto"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://www.linkedin.com/in/ayan-dhanda-612050290/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md text-slate-900 px-8 py-4 rounded-full border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all text-lg font-medium w-full sm:w-auto"
              >
                Connect on LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 relative"
          >
            {/* Animated glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-70 animate-spin-slow scale-105" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-2 ring-indigo-200">
              <Image
                src="/ayan-profile.jpg"
                alt="Ayan Dhanda - AI Product Manager"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-2"
            >
              <span className="text-emerald-500 text-xl">🚀</span>
              <div>
                <div className="text-xs font-bold text-slate-900">$20K+ ARR</div>
                <div className="text-xs text-slate-500">Shipped in Q1</div>
              </div>
            </motion.div>
            {/* Second floating badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 flex items-center gap-2"
            >
              <span className="text-indigo-500 text-xl">⚡</span>
              <div>
                <div className="text-xs font-bold text-slate-900">95% Faster</div>
                <div className="text-xs text-slate-500">Research Time</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-pink-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>
    </section>
  );
}
