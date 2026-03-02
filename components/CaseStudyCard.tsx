import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  category: string;
  slug: string;
  icon: LucideIcon;
  gradient: string;
}

export default function CaseStudyCard({
  title,
  description,
  metric,
  metricLabel,
  category,
  slug,
  icon: Icon,
  gradient,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group block bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
    >
      <div className={`h-2 ${gradient}`}></div>
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full">
            {category}
          </span>
          <Icon className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        <p className="text-slate-600 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <div className="text-3xl font-bold text-slate-900">{metric}</div>
            <div className="text-sm text-slate-500">{metricLabel}</div>
          </div>

          <div className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
            Read More
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
