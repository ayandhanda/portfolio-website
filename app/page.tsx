import Hero from '@/components/Hero';
import CaseStudyCard from '@/components/CaseStudyCard';
import { Database, Sparkles, TrendingUp, Zap, Target } from 'lucide-react';

export const metadata = {
  title: 'Ayan Dhanda - AI Product Manager Portfolio',
  description: 'Associate Product Manager building AI products that drive measurable business impact. Specialized in GenAI, RAG, and Product Analytics.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />

      {/* Key Metrics Section */}
      <section className="bg-white py-24 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="text-6xl font-black text-indigo-600 mb-3 group-hover:scale-110 transition-transform">95%</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm text-balance">Reduction in Account Research Time</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-black text-emerald-600 mb-3 group-hover:scale-110 transition-transform">15%</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm text-balance">Boosted Email Conversion Rate</div>
            </div>
            <div className="text-center group">
              <div className="text-6xl font-black text-purple-600 mb-3 group-hover:scale-110 transition-transform">43%</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm text-balance">Lowered Feature Unit Economics</div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Featured Case Studies</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed text-balance">
              Real products shipped, real impact measured. Deep dives into how I solve complex problems with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="AI Signals: Automated Personalization"
              description="Led end-to-end product ownership of an engine that automates signal discovery, doubling conversion rates and driving $20K+ ARR in Q1."
              metric="15%"
              metricLabel="Final Conv. Rate"
              category="Product Ownership"
              slug="ai-signals"
              iconName="target"
              gradient="bg-gradient-to-r from-indigo-500 to-blue-500"
            />

            <CaseStudyCard
              title="SDI (Salesforce Data Intelligence)"
              description="Developed a LangChain-powered NLP layer that allows sales reps to query the Golden Database seamlessly, completely eliminating the need for complex database filters."
              metric="3x"
              metricLabel="Database Adoption"
              category="Shipped Product"
              slug="sdi"
              iconName="sparkles"
              gradient="bg-gradient-to-r from-blue-500 to-emerald-500"
            />

            <CaseStudyCard
              title="RAG QnA Chatbot for Devs"
              description="Engineered a $0/month RAG-powered chatbot that answers developer questions about PRDs in real-time, accelerating design decisions."
              metric="70%"
              metricLabel="Fewer Clarifications"
              category="Technical Project"
              slug="rag-chatbot"
              iconName="database"
              gradient="bg-gradient-to-r from-emerald-500 to-teal-500"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-slate-900 py-32 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">I don't just manage products, I build them.</h2>
            <div className="prose prose-invert prose-lg text-slate-300 max-w-3xl mx-auto text-left space-y-8 font-medium leading-relaxed">
              <p>
                I build AI systems that eliminate friction. As an Associate Product Manager at Sprouts.ai, I specialize in transforming complex cognitive workflows into intuitive AI driven experiences.
              </p>
              <p>
                My approach combines deep technical understanding with obsessive user research. Instead of just wrapping LLMs in chat interfaces, I design agentic workflows that solve core business bottlenecks, whether that is increasing sales outreach volume or making proprietary databases instantly accessible.
              </p>
              <p>
                I am passionate about scaling AI responsibly, focusing heavily on evaluation, cost efficiency, and user trust.
              </p>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/ayan-dhanda-612050290/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl hover:bg-slate-100 transition-all font-bold shadow-lg hover:-translate-y-1"
              >
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                Connect on LinkedIn
              </a>
              <a
                href="mailto:ayandhanda87@gmail.com"
                className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-2xl border border-slate-700 hover:bg-slate-700 transition-all font-bold shadow-lg hover:-translate-y-1"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements for Dark Section */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      </section>
    </main>
  );
}
