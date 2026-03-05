'use client';

import Link from 'next/link';
import { ArrowRight, Target, Sparkles, Database, TrendingUp, Zap, Code2, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  sparkles: Sparkles,
  database: Database,
  trending: TrendingUp,
  zap: Zap,
  code: Code2
};

interface CaseStudyCardProps {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  category: string;
  slug: string;
  iconName: string;
  gradient: string;
}

export default function CaseStudyCard({
  title,
  description,
  metric,
  metricLabel,
  category,
  slug,
  iconName,
  gradient,
}: CaseStudyCardProps) {
  const Icon = iconMap[iconName] || Code2;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link
        href={`/case-studies/${slug}`}
        className="group relative block bg-white/70 backdrop-blur-md rounded-3xl shadow-sm border border-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-500 overflow-hidden h-full"
      >
        <div className={`h-1.5 w-full ${gradient} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

        <div className="p-8 md:p-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-8">
            <span className="inline-flex items-center px-4 py-1.5 text-xs font-bold text-slate-600 bg-slate-100/80 rounded-full border border-slate-200/50 uppercase tracking-wider">
              {category}
            </span>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-indigo-100 transition-colors">
              <Icon className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 transition-colors" />
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
            {title}
          </h3>

          <p className="text-slate-600 mb-8 leading-relaxed text-lg flex-grow">
            {description}
          </p>

          <div className="flex items-center justify-between pt-8 border-t border-slate-100/80 mt-auto">
            <div>
              <div className="text-4xl font-black text-slate-900 tracking-tight">{metric}</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide mt-1">{metricLabel}</div>
            </div>

            <div className="flex items-center gap-2 text-indigo-600 font-bold group-hover:gap-4 transition-all bg-indigo-50 px-5 py-2.5 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white">
              <span className="text-sm">Explore</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </Link>
    </motion.div>
  );
}
