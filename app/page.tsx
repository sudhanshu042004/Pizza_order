"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Pizza, ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative flex h-screen justify-center items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-violet-600/20 to-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-[25vh] left-[15vw] w-[50vw] h-[50vh] rounded-full bg-violet-500/30 blur-[120px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />

        <motion.div
          className="absolute bottom-[15vh] right-[5vw] w-[35vw] h-[35vh] rounded-full bg-purple-400/30 blur-[100px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        />

        <motion.div
          className="absolute top-[60vh] left-[60vw] w-[25vw] h-[25vh] rounded-full bg-pink-400/20 blur-[80px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.9, ease: "easeOut" }}
        />
      </div>
      <motion.div
        className="absolute top-20 left-20 text-orange-400/30"
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
        <Pizza size={40} />
      </motion.div>

      <motion.div
        className="absolute top-32 right-32 text-yellow-400/30"
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
        <Pizza size={32} />
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-40 text-red-400/30"
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
        <Pizza size={28} />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
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
            <Sparkles className="text-yellow-400 w-12 h-12" />
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Pizza Paradise
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-medium text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Order the perfect pizza here
          </motion.h2>
        </motion.div>
        <motion.p
          className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Experience the finest selection of artisanal pizzas, crafted with love and delivered fresh to your doorstep. Your culinary adventure begins here.
        </motion.p>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            onClick={() => router.push('/login')}
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl text-white font-semibold text-lg shadow-2xl overflow-hidden"
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

            <span className="relative flex items-center gap-3">
              Get Started
              <motion.div
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <ArrowRight size={20} />
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
          className="mt-16 flex flex-wrap justify-center gap-8 text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1, color: "#fbbf24" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-2xl font-bold text-orange-400">50+</div>
            <div className="text-sm">Pizza Varieties</div>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1, color: "#fbbf24" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-2xl font-bold text-pink-400">1000+</div>
            <div className="text-sm">Happy Customers</div>
          </motion.div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.1, color: "#fbbf24" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-2xl font-bold text-purple-400">30min</div>
            <div className="text-sm">Fast Delivery</div>
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
