'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, Users, TrendingUp, Database, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';


export default function SDICaseStudy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <div className="mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-100/80 border border-blue-200 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" /> Shipped Product
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            SDI: Salesforce Data Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">
            Built an AI-powered query interface that replaced complex database filtering with Natural Language Processing, creating a radically simplified user experience for data access.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <motion.div {...fadeIn} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-200/60 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-6 h-6 text-emerald-600" />
              <span className="text-4xl font-black text-slate-900 tracking-tight">NLP</span>
            </div>
            <p className="text-slate-700 font-bold uppercase tracking-wider text-xs">Query Interface</p>
            <p className="text-sm text-slate-500 mt-2">Zero learning curve functionality</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-200/60 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-blue-600" />
              <span className="text-4xl font-black text-slate-900 tracking-tight">50+</span>
            </div>
            <p className="text-slate-700 font-bold uppercase tracking-wider text-xs">Teams Empowered</p>
            <p className="text-sm text-slate-500 mt-2">Adopted by sales teams across enterprise organizations</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-200/60 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              <span className="text-4xl font-black text-slate-900 tracking-tight">100%</span>
            </div>
            <p className="text-slate-700 font-bold uppercase tracking-wider text-xs">Self-service rate</p>
            <p className="text-sm text-slate-500 mt-2">Zero technical dependency</p>
          </motion.div>
        </div>
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

          {/* Context */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">01</div>
              <h2 className="text-3xl font-bold text-slate-900">Context</h2>
            </div>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-6">
              <p>
                At Sprouts.ai, my company acts as both a B2B data provider and a sales intelligence platform. Users needed a way to seamlessly query our massive proprietary "Golden Database" to find highly-targeted contacts and accounts for their prospect lists, but <strong>building structured queries to access this data pool required deep technical knowledge.</strong>
              </p>
            </div>
          </section>

          {/* Problem discovery */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-bold text-xl">02</div>
              <h2 className="text-3xl font-bold text-slate-900">The Problem</h2>
            </div>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-6">
              <p>
                While our platform (like many competitors) offered extensive database filtering, the sheer volume of parameters made building queries incredibly tedious and friction-heavy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-xl">
                    <Database className="w-5 h-5 text-red-500" /> Friction-Heavy UX
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Users experienced massive cognitive overhead trying to mentally map their abstract prospecting goals to concrete database field properties.</p>
                </div>
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-xl">
                    <Users className="w-5 h-5 text-orange-500" /> Steep Learning Curve
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">The cognitive load of mastering complex boolean logic and structured filter properties deterred many non-technical users from self-serving data.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Solution strategy */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">03</div>
              <h2 className="text-3xl font-bold text-slate-900">Technical Strategy</h2>
            </div>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-6">
              <p>
                To build a reliable <strong>natural language interface</strong>, a simple vector similarity search wasn't enough. We needed to ensure precision when querying our structured Golden Database. My approach was to build a core platform feature that orchestrates an intelligent agent to safely bridge unstructured intent with structured data layers.
              </p>

              <div className="bg-slate-950 rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="relative z-10 space-y-8 font-mono text-sm leading-relaxed">
                  <div className="flex items-center gap-4 text-blue-400">
                    <span className="opacity-50">01</span> [Natural Language] "Show me healthcare companies with $10M+ funding"
                  </div>
                  <div className="flex flex-col gap-2 text-purple-400 ml-9 border-l border-purple-800 pl-4 py-2">
                    <span className="text-slate-400 text-xs uppercase tracking-widest font-sans">Agentic Orchestration (LangChain & LangGraph)</span>
                    <div className="flex items-center gap-4">
                      <span className="opacity-50">02</span> [Prompt Chaining] Disambiguate intent and validate against definitions
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="opacity-50">03</span> [DSL Mapping] Convert intent into a Schema-aware DSL Query
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-emerald-400">
                    <span className="opacity-50">04</span> [Elasticsearch] Apply DSL Query on the proprietary Golden DB
                  </div>
                  <div className="flex items-center gap-4 text-blue-400">
                    <span className="opacity-50">05</span> [Presentation] Return an accurate, actionable prospecting list
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-colors"></div>
              </div>

              <p>
                By utilizing LangChain and LangGraph, we built an agent capable of complex reasoning via prompt chaining. Instead of generating risky SQL directly, the agent translates intent into a <strong>Schema-aware DSL</strong> which is then executed against <strong>Elasticsearch</strong>. This architecture drastically increased query accuracy, safeguarded operations, and provided a radically intuitive user experience.
              </p>
            </div>
          </section>

          {/* Impact */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">04</div>
              <h2 className="text-3xl font-bold text-slate-900">Business Impact</h2>
            </div>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-6">
              <p>
                SDI was rolled out to the entire SDR team, significantly increasing the adoption of the Golden Database by shifting users away from complex, friction-heavy filter logic to a seamless NLP-based interface.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-10 font-bold">
                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 flex items-center justify-between">
                  <span className="text-slate-700">Database Adoption Growth</span>
                  <span className="text-3xl text-emerald-600">3x</span>
                </div>
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 flex items-center justify-between">
                  <span className="text-slate-700">Self-Service Ratio</span>
                  <span className="text-3xl text-blue-600">100%</span>
                </div>
              </div>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
