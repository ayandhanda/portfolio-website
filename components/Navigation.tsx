'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <nav className="border-b border-white/20 bg-white/60 backdrop-blur-md sticky top-0 z-[100] transition-all">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg ring-4 ring-indigo-50 transition-all group-hover:rotate-12 group-hover:scale-110">
              A
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
              Ayan Dhanda
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-widest">
              Home
            </Link>
            <Link href="#case-studies" className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors uppercase tracking-widest">
              Case Studies
            </Link>
            <a
              href="https://www.linkedin.com/in/ayan-dhanda-612050290/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-2xl hover:bg-indigo-600 transition-all font-bold shadow-lg hover:shadow-indigo-500/20 active:scale-95"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
