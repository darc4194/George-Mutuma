import { motion } from 'motion/react';

export default function Preloader() {
  const name = "GEORGE MUTUMA";
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
    >
      <div className="relative overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.76, 0, 0.24, 1],
            delay: 0.2 
          }}
          className="text-4xl md:text-6xl font-black tracking-tighter text-white flex gap-[0.1em]"
        >
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ 
                duration: 0.4, 
                delay: 0.5 + (i * 0.05) 
              }}
              className={char === " " ? "w-4" : ""}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ 
            duration: 1.5, 
            ease: "easeInOut",
            delay: 0.2
          }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500 origin-left"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500"
      >
        Initializing Portfolio
      </motion.div>
    </motion.div>
  );
}
