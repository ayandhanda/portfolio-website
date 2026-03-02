import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Associate Product Manager at Sprouts.ai
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Building AI Products That Solve Real Business Problems
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            I ship AI-powered products that drive measurable impact. From reducing data retrieval time by 95% to cutting PM clarification requests by 70%, I focus on solving real user problems with smart technical solutions.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="#case-studies"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              View Case Studies
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://www.linkedin.com/in/ayan-dhanda-612050290/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg border-2 border-slate-200 hover:border-slate-300 transition-colors text-lg font-medium"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
}
