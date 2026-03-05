'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, TrendingUp, Database, Sparkles, Target, Zap, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';


export default function AISignalsCaseStudy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30">
      {/* Navigation */}
      <nav className="border-b border-white/20 bg-white/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        initial="initial" animate="animate" variants={staggerChildren}
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <motion.div variants={fadeIn} className="mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100/80 border border-indigo-200 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" /> End-to-End Product Ownership
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            AI Signals: Automated Personalization Engine
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">
            Powered personalized messaging that boosted email conversion rates from 8% to 15%, driving <strong className="text-slate-800">$20K+ ARR</strong> in the first quarter while cutting account research time from <strong>1-2 hours to 5 minutes</strong>.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-4 gap-6 my-16">
          <motion.div variants={fadeIn} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
              <span className="text-3xl font-bold text-slate-900">87%</span>
            </div>
            <p className="text-slate-700 font-medium">Conversion Lift</p>
            <p className="text-sm text-slate-500 mt-1">From 8% to 15% rate</p>
          </motion.div>
          <motion.div variants={fadeIn} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-emerald-600" />
              <span className="text-3xl font-bold text-slate-900">95%</span>
            </div>
            <p className="text-slate-700 font-medium">Time Saved</p>
            <p className="text-sm text-slate-500 mt-1">Hours down to minutes</p>
          </motion.div>
          <motion.div variants={fadeIn} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-amber-500" />
              <span className="text-3xl font-bold text-slate-900">43%</span>
            </div>
            <p className="text-slate-700 font-medium">Cost Reduction</p>
            <p className="text-sm text-slate-500 mt-1">Unit economics improved</p>
          </motion.div>
          <motion.div variants={fadeIn} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-6 h-6 text-blue-600" />
              <span className="text-3xl font-bold text-slate-900">$20K+</span>
            </div>
            <p className="text-slate-700 font-medium">Q1 ARR Impact</p>
            <p className="text-sm text-slate-500 mt-1">Directly attributed</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 space-y-16 border border-white"
        >

          {/* Context & Discovery */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">01</div>
              <h2 className="text-3xl font-bold text-slate-900">The Discovery</h2>
            </div>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-6">
              <p>
                As an Associate Product Manager at <strong>Sprouts.ai</strong>, I led the user research to understand the bottlenecks in our clients' sales pipelines. Through <strong>15+ in-depth SDR interviews</strong>, I uncovered a systemic issue scaling personalized outreach.
              </p>

              <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-500" />
                  The Growth Ceiling
                </h3>
                <p className="text-slate-700">
                  Sales teams were physically limited to researching only <strong>10-12 accounts per day</strong>. The manual process of scouring the web for relevant company news, funding rounds, and executive changes to craft a custom message was simply too slow. This hard cap on daily activity stifled pipeline growth and prevented scaling outreach volume.
                </p>
              </div>
            </div>
          </section>

          {/* Solution Architecture */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">02</div>
              <h2 className="text-3xl font-bold text-slate-900">Architecting the Solution</h2>
            </div>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-6">
              <p>
                From ideation to launch, I owned the development of <strong>AI Signals</strong>: an automated engine that discovers actionable insights across the web and synthesizes them into personalized messaging hooks.
              </p>

              <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-6">Optimizing AI Unit Economics</h3>
              <p>
                Building LLM features often introduces unsustainable API costs. Early prototypes of AI Signals were effective but expensive.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">The Challenge</h4>
                  <p className="text-sm text-slate-600">
                    Aggregating web data and passing massive context windows to advanced LLMs for summarization resulted in high latency and prohibitively high per-signal costs.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                  <h4 className="font-bold text-slate-900 mb-2">The Architecture Fix</h4>
                  <p className="text-sm text-slate-600">
                    I re-architected the data retrieval pipeline and optimized our embedding model selection. By cascading smaller, cheaper models for initial classification and reserving heavy LLMs only for final generation, we slashed costs.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-8 text-slate-100 shadow-inner">
                <h4 className="font-bold mb-6 flex items-center gap-2 text-xl">
                  <Database className="w-6 h-6 text-indigo-400" />
                  Cost-Optimized Pipeline
                </h4>
                <div className="space-y-4 text-sm font-mono bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-4"><span className="text-slate-400 w-24">Scraping:</span> <span className="text-blue-300">Targeted Web & News APIs</span></div>
                  <div className="flex items-center gap-4"><span className="text-slate-400 w-24">Filtering:</span> <span className="text-emerald-400">Lightweight Keyword/Embedding Match</span></div>
                  <div className="flex items-center gap-4"><span className="text-slate-400 w-24">Synthesis:</span> <span className="text-amber-300">Optimized Prompt on Tier 2 LLM</span></div>
                  <div className="flex items-center gap-4"><span className="text-slate-400 w-24">Result:</span> <span className="text-purple-400">Highly personalized email hook</span></div>
                </div>
                <p className="mt-6 text-emerald-400 font-medium">
                  Result: Reduced feature unit economics by 43%, saving $2,430/month at scale.
                </p>
              </div>
            </div>
          </section>

          {/* Launch & Impact */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">03</div>
              <h2 className="text-3xl font-bold text-slate-900">Launch & Business Impact</h2>
            </div>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-6">
              <p>
                AI Signals shipped as our most cost-efficient and highest-impact feature of the quarter. By automating the arduous research phase, we fundamentally changed the SDR workflow.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-lg shadow-indigo-200">
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-2">Metrics That Matter</h4>
                    <ul className="space-y-4 mt-6">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 bg-white/20 p-1 rounded-full"><TrendingUp className="w-4 h-4" /></div>
                        <span>Boosted email conversion rates from <strong>8% to 15%</strong>.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 bg-white/20 p-1 rounded-full"><Clock className="w-4 h-4" /></div>
                        <span>Cut account research time from <strong>1-2 hours to 5-6 mins</strong>.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                </div>

                <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-lg">
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-2">The Bottom Line</h4>
                    <p className="mt-4 text-slate-300 leading-relaxed">
                      AI Signals directly contributed to <strong>$20K+ in Annual Recurring Revenue (ARR)</strong> pipeline generation in its very first quarter post-launch, proving that deep personalization at scale is the future of outbound sales.
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                </div>
              </div>

            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
