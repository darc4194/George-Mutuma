import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em] mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
              CRAFTING DIGITAL <br />
              <span className="text-zinc-500">EXCELLENCE.</span>
            </h3>
          </div>
          <p className="text-zinc-400 max-w-md text-lg">
            A collection of projects that demonstrate my technical expertise and commitment to quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group bg-zinc-900/50 border-zinc-800 overflow-hidden hover:border-emerald-500/50 transition-all duration-500">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                  
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-3 bg-zinc-950/80 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-emerald-500 hover:text-zinc-950"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <CardHeader className="p-6 pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="bg-emerald-500/5 text-emerald-500 border-emerald-500/20 px-3 py-1">
                      {project.category}
                    </Badge>
                    <project.icon className="w-5 h-5 text-zinc-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 py-2">
                  <p className="text-zinc-400 line-clamp-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>

                <CardFooter className="p-6 pt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 bg-zinc-900 border border-zinc-800 rounded-3xl flex flex-col items-center text-center"
        >
          <h4 className="text-2xl font-bold mb-4">Want to see more?</h4>
          <p className="text-zinc-400 mb-8 max-w-md">
            I've built dozens of other websites including those listed in my extended portfolio.
          </p>
          <a 
            href="https://autumn-agency.vercel.app" 
            target="_blank"
            className="inline-flex items-center gap-2 text-emerald-500 font-bold hover:underline"
          >
            Visit Autumn Agency <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
