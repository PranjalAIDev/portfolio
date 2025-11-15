import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const FuturisticHero: React.FC = () => {
  const name = "AI/ML Engineer";
  const words = name.split(" ");

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-7 order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="max-w-4xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-lg md:text-xl mb-4 tracking-tight opacity-80">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-600 dark:from-neutral-300 dark:to-neutral-400">
                    Welcome to my portfolio
                  </span>
                </h2>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tighter">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="block mb-2"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
                    Hi, I'm{" "}
                  </span>
                </motion.span>
                {words.map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className="inline-block mr-3 last:mr-0"
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={`${wordIndex}-${letterIndex}`}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.9 + wordIndex * 0.1 + letterIndex * 0.03,
                          type: "spring",
                          stiffness: 150,
                          damping: 25,
                        }}
                        className="inline-block text-transparent bg-clip-text 
                        bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                        dark:from-white dark:to-white/80"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
              >
                Passionate about transforming data into intelligent solutions. Building innovative AI applications to solve real-world problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Button
                    variant="ghost"
                    asChild
                    className="rounded-[1.15rem] px-8 py-6 text-base font-semibold backdrop-blur-md 
                    bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
                    text-black dark:text-white transition-all duration-300 
                    group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                    hover:shadow-md dark:hover:shadow-neutral-800/50"
                  >
                    <a href="#projects">
                      <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                        View My Work
                      </span>
                      <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                        →
                      </span>
                    </a>
                  </Button>
                </div>

                <div className="inline-block group relative bg-gradient-to-b from-black/5 to-white/5 dark:from-white/5 dark:to-black/5 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Button
                    variant="ghost"
                    asChild
                    className="rounded-[1.15rem] px-8 py-6 text-base font-semibold backdrop-blur-md 
                    bg-white/80 hover:bg-white/90 dark:bg-black/80 dark:hover:bg-black/90 
                    text-black dark:text-white transition-all duration-300 
                    border border-black/5 dark:border-white/5"
                  >
                    <a href="#contact">Contact Me</a>
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.9 }}
                className="flex space-x-4"
              >
                <motion.a 
                  href="https://github.com/PranjalAIDev" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/pranjal-upadhyay-b26b30322/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  href="mailto:pranjalupadhyay2911@gmail.com" 
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <motion.div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src="/Profile pic.JPG" 
                  alt="Pranjal Upadhyay" 
                  className="w-full h-full object-cover object-center scale-125"
                  initial={{ scale: 1.3 }}
                  animate={{ scale: 1.25 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
              <motion.div 
                className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-neutral-400/20 to-neutral-600/20 dark:from-neutral-500/20 dark:to-neutral-300/20 opacity-50 blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3] 
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 2.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.a 
          href="#about" 
          className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          whileHover={{ scale: 1.2 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default FuturisticHero;
