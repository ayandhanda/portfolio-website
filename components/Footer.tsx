import { Linkedin, Mail, Github, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black">A</div>
              <h3 className="text-white font-black text-2xl tracking-tight">Ayan Dhanda</h3>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Building the next generation of AI-powered sales intelligence tools at Sprouts.ai.
            </p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-indigo-400" /> Shipped with AI
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Social</h4>
              <ul className="space-y-4">
                <li>
                  <a href="https://www.linkedin.com/in/ayan-dhanda-612050290/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-3 group">
                    <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-lg">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ayandhanda" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-3 group">
                    <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-lg">GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Get in Touch</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:ayandhanda87@gmail.com" className="hover:text-indigo-400 transition-colors flex items-center gap-3 group">
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-lg">Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-600">
          <p>&copy; 2026 Ayan Dhanda. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-700">
            Crafted with <span className="text-red-500">❤️</span> using Next.js & Tailwind
          </p>
        </div>
      </div>

      {/* Decorative background glow for footer */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>
    </footer>
  );
}
