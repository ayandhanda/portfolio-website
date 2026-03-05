'use client';

import Link from 'next/link';
import { ArrowLeft, Zap, DollarSign, Users, Code2, Database, Sparkles, CheckCircle2, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';


export default function RAGChatbotCaseStudy() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/50 to-indigo-50/30">
      {/* Navigation */}
      <nav className="border-b border-white/20 bg-white/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-purple-600 transition-colors font-medium">
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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm font-semibold text-purple-700 bg-purple-100/80 border border-purple-200 rounded-full mb-6 backdrop-blur-sm">
            <Code2 className="w-4 h-4" /> Technical Project
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            RAG QnA Chatbot for Developers
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl">
            Built a 100% free RAG-powered chatbot that answers developer questions about PRDs in real-time, reducing PM clarification requests by <strong>70%</strong>.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          <motion.div {...fadeIn} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-200/60 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-emerald-600" />
              <span className="text-4xl font-black text-slate-900 tracking-tight">70%</span>
            </div>
            <p className="text-slate-700 font-bold uppercase tracking-wider text-xs">Reduction in Requests</p>
            <p className="text-sm text-slate-500 mt-2">Engineers answer their own questions</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-200/60 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-6 h-6 text-blue-600" />
              <span className="text-4xl font-black text-slate-900 tracking-tight">$0</span>
            </div>
            <p className="text-slate-700 font-bold uppercase tracking-wider text-xs">Monthly Cost</p>
            <p className="text-sm text-slate-500 mt-2">100% free using free-tier tools</p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-slate-200/60 transition-all hover:shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-purple-600" />
              <span className="text-4xl font-black text-slate-900 tracking-tight">2+ hrs</span>
            </div>
            <p className="text-slate-700 font-bold uppercase tracking-wider text-xs">Weekly Time Saved</p>
            <p className="text-sm text-slate-500 mt-2">Per developer across the team</p>
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

          {/* Problem Statement */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">01</div>
              <h2 className="text-3xl font-bold text-slate-900">The Problem</h2>
            </div>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-6">
              <p>
                As a Product Manager working with 12+ developers, I noticed a recurring bottleneck: <strong>engineers spent 30% of their time asking clarification questions</strong> about dense technical documentation.
              </p>

              <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-red-500" />
                  Engineering Blockers
                </h3>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Waiting hours for PM availability during busy sprints.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Constant context-switching between code and long PRDs.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500 font-bold">•</span>
                    <span>PM burnout from answering the same questions repeatedly.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Solution */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl">02</div>
              <h2 className="text-3xl font-bold text-slate-900">The Technical Solution</h2>
            </div>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-6">
              <p>
                The platform works through a simple, automated document-to-chat workflow:
              </p>

              <ol className="list-decimal pl-6 space-y-4">
                <li><strong>PRD Upload:</strong> A Product Manager uploads a PRD (PDF, Markdown, or DOCX) to the system.</li>
                <li><strong>Auto-Processing:</strong> The backend automatically chunks the text and generates free embeddings using Pinecone's integrated <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm">llama-text-embed-v2</code> model.</li>
                <li><strong>Developer Query:</strong> Engineers ask technical questions about the requirements.</li>
                <li><strong>Intelligent Routing:</strong> A FastAPI + LangChain backend retrieves the exact PRD context and dynamically routes the query to the best LLM (Azure, Vertex, Anthropic, or Ollama).</li>
                <li><strong>Role-Specific Answer:</strong> The developer receives a step-by-step implementation plan with direct source citations from the uploaded PRD.</li>
              </ol>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Database className="w-4 h-4 text-indigo-600" /> Free Vector Storage
                  </h4>
                  <p className="text-sm text-slate-600">Utilizes Pinecone's free tier to automatically generate and store embeddings, indexing 20-page PRDs in ~30 seconds.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-600" /> Multi-LLM Router
                  </h4>
                  <p className="text-sm text-slate-600">Dynamic routing over Azure OpenAI, Vertex AI, Anthropic Bedrock, and Ollama to generate backend or frontend-specific tasks.</p>
                </div>
              </div>

              <div className="bg-slate-950 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden group flex justify-center">
                <pre className="relative z-10 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto whitespace-pre">
                  {`┌──────────────────────────────────────────┐
│      FASTAPI + LANGCHAIN BACKEND         │
├───────────────────┬──────────────────────┤
│ 1. PRD Uploaded   │ 4. Multi-LLM Router  │
│ 2. Chunk & Embed  │ (Azure/Vertex/Ollama)│
│ 3. Pinecone Search│                      │
└─────────┬─────────┴──────────┬───────────┘
          ▼                    ▼
     Vector Context       Role Prompts
          │                    │
          └─────────┬──────────┘
                    ▼
          Developer Answer Output`}
                </pre>
                {/* Visual decoration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl group-hover:bg-indigo-600/30 transition-colors"></div>
              </div>
            </div>
          </section>

          {/* Results */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl">03</div>
              <h2 className="text-3xl font-bold text-slate-900">Implementation Results</h2>
            </div>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-6">
              <p>
                By using Pinecone's free tier and existing LLM infrastructure, the system achieved a <strong className="text-emerald-600">$0/month operating cost</strong> while significantly improving sprint velocity.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-10 font-bold">
                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 flex items-center justify-between">
                  <span className="text-slate-700">Reduction in PM Clarifications</span>
                  <span className="text-3xl text-emerald-600">70%</span>
                </div>
                <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 flex items-center justify-between">
                  <span className="text-slate-700">Developer Time Saved / Wk</span>
                  <span className="text-3xl text-indigo-600">2+ hrs</span>
                </div>
              </div>
            </div>
          </section>

        </motion.div>
      </div>
    </div>
  );
}
