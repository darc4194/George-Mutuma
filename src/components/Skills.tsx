import { motion } from 'motion/react';
import { technologies } from '@/data/projects';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-zinc-950 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em] mb-4">Stack & Tools</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter">
            MY TECH <span className="text-zinc-500">ECOSYSTEM.</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="group relative flex flex-col items-center justify-center p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 cursor-default">
                    <tech.icon className={`w-10 h-10 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-800 border-zinc-700 text-zinc-200">
                  <p>Expertise in {tech.name}</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Frontend Development",
              desc: "Crafting responsive, high-performance user interfaces using React, Next.js, and modern CSS frameworks.",
              icon: "01"
            },
            {
              title: "Backend & Databases",
              desc: "Building robust server-side logic and managing data efficiently with Node.js, Python, and SQL.",
              icon: "02"
            },
            {
              title: "CMS & E-commerce",
              desc: "Developing custom WordPress themes and Shopify stores tailored to business needs.",
              icon: "03"
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl"
            >
              <span className="text-4xl font-black text-emerald-500/20 mb-6 block">{service.icon}</span>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-zinc-500 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
