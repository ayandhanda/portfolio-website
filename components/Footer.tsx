import { Linkedin, Mail, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Ayan Dhanda</h3>
            <p className="text-slate-400 text-sm">Associate Product Manager | AI Products</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/ayan-dhanda-612050290/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:ayandhanda87@gmail.com"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Email</span>
            </a>
            <a
              href="https://github.com/ayandhanda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; 2026 Ayan Dhanda. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
