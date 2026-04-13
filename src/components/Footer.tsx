import { Code2, Github, Linkedin, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <Code2 className="w-5 h-5 text-zinc-950" />
            </div>
            <span>GM<span className="text-emerald-500">.</span></span>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium text-zinc-500">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="p-2 text-zinc-500 hover:text-emerald-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-zinc-500 hover:text-emerald-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-zinc-500 hover:text-emerald-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600">
          <p>© {currentYear} GEORGE MUTUMA. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1">
            BUILT WITH <Heart className="w-3 h-3 text-red-500 fill-red-500" /> IN NAIROBI
          </p>
        </div>
      </div>
    </footer>
  );
}
