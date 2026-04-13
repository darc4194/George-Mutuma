import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-emerald-500 uppercase tracking-[0.2em] mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
              LET'S BUILD <br />
              <span className="text-zinc-500">SOMETHING GREAT.</span>
            </h3>
            
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
                  <Mail className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:georgemutuma06@gmail.com" className="text-lg font-bold hover:text-emerald-400 transition-colors">
                    georgemutuma06@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
                  <Phone className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Call Me</p>
                  <a href="tel:+254706669513" className="text-lg font-bold hover:text-emerald-400 transition-colors">
                    +254 706 669 513
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
                  <MapPin className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>
              <button className="w-full py-4 bg-emerald-500 text-zinc-950 font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
