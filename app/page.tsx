"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Pizza, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen justify-center items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-2 sm:px-4 md:px-8">
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 right-0 h-[20vh] sm:h-[30vh] md:h-[40vh] bg-gradient-to-b from-violet-600/20 to-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-[15vh] left-[5vw] w-[80vw] h-[20vh] sm:w-[60vw] sm:h-[30vh] md:w-[50vw] md:h-[50vh] rounded-full bg-violet-500/30 blur-[80px] md:blur-[120px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />

        <motion.div
          className="absolute bottom-[10vh] right-[2vw] w-[50vw] h-[15vh] sm:w-[40vw] sm:h-[25vh] md:w-[35vw] md:h-[35vh] rounded-full bg-purple-400/30 blur-[60px] md:blur-[100px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-[60vh] left-[60vw] w-[30vw] h-[10vh] sm:w-[25vw] sm:h-[15vh] md:w-[25vw] md:h-[25vh] rounded-full bg-pink-400/20 blur-[40px] md:blur-[80px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.9, ease: "easeOut" }}
        />
      </div>
      <motion.div
        className="absolute top-8 left-4 sm:top-20 sm:left-20 text-orange-400/30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Pizza size={32} className="sm:w-10 sm:h-10" />
      </motion.div>

      <motion.div
        className="absolute top-16 right-6 sm:top-32 sm:right-32 text-yellow-400/30"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Pizza size={24} className="sm:w-8 sm:h-8" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-8 sm:bottom-40 sm:left-40 text-red-400/30"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 8, 0]
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Pizza size={20} className="sm:w-7 sm:h-7" />
      </motion.div>

      <div className="relative z-10 text-center w-full max-w-2xl mx-auto px-2 sm:px-6">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-yellow-400 w-10 h-10 sm:w-12 sm:h-12" />
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Pizza Paradise
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-2xl md:text-3xl font-medium text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Order the perfect pizza here
          </motion.h2>
        </motion.div>
        <motion.p
          className="text-base sm:text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Experience the finest selection of artisanal pizzas, crafted with love and delivered fresh to your doorstep. Your culinary adventure begins here.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => router.push('/login')}
            className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl text-white font-semibold text-base sm:text-lg shadow-2xl overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 107, 107, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <span className="relative flex items-center gap-2 sm:gap-3">
              Get Started
              <motion.div
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </motion.div>
            </span>

            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 blur-xl opacity-0 group-hover:opacity-50 -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>
        <motion.div
          className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1, color: "#fbbf24" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-xl sm:text-2xl font-bold text-orange-400">50+</div>
            <div className="text-xs sm:text-sm">Pizza Varieties</div>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1, color: "#fbbf24" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-xl sm:text-2xl font-bold text-pink-400">1000+</div>
            <div className="text-xs sm:text-sm">Happy Customers</div>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1, color: "#fbbf24" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-xl sm:text-2xl font-bold text-purple-400">30min</div>
            <div className="text-xs sm:text-sm">Fast Delivery</div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
