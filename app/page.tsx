import Hero from '@/components/Hero';
import CaseStudyCard from '@/components/CaseStudyCard';
import { Database, Sparkles, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Ayan Dhanda - AI Product Manager Portfolio',
  description: 'Associate Product Manager building AI products that drive measurable business impact. View case studies on Ask AI and RAG QnA Chatbot.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Key Metrics Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-slate-600">Time Reduction Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">70%</div>
              <div className="text-slate-600">Fewer Clarification Requests</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">$0</div>
              <div className="text-slate-600">Monthly Operating Cost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real products shipped, real impact measured. Here's how I solve problems for users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="Ask AI: Natural Language Data Query"
              description="Built an AI-powered query interface that reduced SDR data retrieval time from 1-2 hours to 5 minutes and enabled non-technical users to self-serve data."
              metric="95%"
              metricLabel="Time Reduction"
              category="Shipped Product"
              slug="ask-ai"
              icon={Sparkles}
              gradient="bg-gradient-to-r from-blue-500 to-purple-500"
            />

            <CaseStudyCard
              title="RAG QnA Chatbot for Developers"
              description="Built a $0/month RAG-powered chatbot that answers developer questions about PRDs in real-time, reducing PM clarification requests by 70%."
              metric="70%"
              metricLabel="Reduction in Clarifications"
              category="Technical Project"
              slug="rag-chatbot"
              icon={Database}
              gradient="bg-gradient-to-r from-purple-500 to-pink-500"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>
            <div className="prose prose-lg text-slate-600 max-w-3xl mx-auto text-left space-y-4">
              <p>
                I'm an <strong>Associate Product Manager at Sprouts.ai</strong>, where I build AI-powered products that help sales teams identify and engage high-intent prospects.
              </p>
              <p>
                My approach combines <strong>deep user research</strong> (15+ SDR interviews), <strong>technical depth</strong> (vector databases, RAG, semantic search), and <strong>ruthless prioritization</strong> to ship products that drive measurable business outcomes.
              </p>
              <p>
                I believe in <strong>solving real problems</strong> over adding features. That means talking to users, understanding their workflows, and building the simplest solution that creates tangible value.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/ayan-dhanda-612050290/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <TrendingUp className="w-5 h-5" />
                Connect on LinkedIn
              </a>
              <a
                href="mailto:ayandhanda87@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg border-2 border-slate-200 hover:border-slate-300 transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
