import { motion } from 'motion/react';
import { Terminal, ChevronRight, Download, Github, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 contrast-150" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
            GEORGE <br />
            <span className="text-emerald-500">MUTUMA.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-lg mb-8 leading-relaxed">
            Full-stack developer specializing in building exceptional digital experiences. 
            Turning complex problems into elegant, high-performance solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="group px-8 py-4 bg-emerald-500 text-zinc-950 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-400 transition-all hover:scale-105"
            >
              View Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full font-bold hover:bg-zinc-800 transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 mt-12">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5 }}
                className="text-zinc-500 hover:text-emerald-400 transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block perspective-1000"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-zinc-800/50 px-4 py-3 flex items-center gap-2 border-b border-zinc-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex items-center gap-2 ml-4 text-xs font-mono text-zinc-500">
                  <Terminal className="w-3 h-3" />
                  george-mutuma — -zsh — 80x24
                </div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-8 font-mono text-sm leading-relaxed">
                <div className="flex gap-3 mb-4">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-zinc-300">~</span>
                  <span className="text-blue-400">whoami</span>
                </div>
                <div className="text-zinc-400 mb-6">
                  "I am a passionate developer from Nairobi, Kenya, dedicated to crafting 
                  clean code and intuitive user interfaces. My expertise spans from 
                  WordPress to modern React applications."
                </div>
                
                <div className="flex gap-3 mb-4">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-zinc-300">~</span>
                  <span className="text-blue-400">skills</span>
                  <span className="text-zinc-500">--list</span>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-zinc-400 mb-6">
                  <div>• React / Next.js</div>
                  <div>• TypeScript</div>
                  <div>• Node.js</div>
                  <div>• WordPress</div>
                  <div>• Python / SQL</div>
                  <div>• Tailwind CSS</div>
                </div>

                <div className="flex gap-3">
                  <span className="text-emerald-500">➜</span>
                  <span className="text-zinc-300">~</span>
                  <span className="animate-pulse w-2 h-5 bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
