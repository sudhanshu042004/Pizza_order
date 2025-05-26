"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Pizza, Search, MapPin } from 'lucide-react';

const NotFoundPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-orange-500/10 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-purple-500/10 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
          >
            <Pizza className="w-6 h-6 text-orange-400/30" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-4xl text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="relative">
            <motion.h1
              className="text-[12rem] md:text-[16rem] font-black bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent leading-none"
              animate={{
                textShadow: [
                  "0 0 20px rgba(251, 146, 60, 0.3)",
                  "0 0 40px rgba(251, 146, 60, 0.5)",
                  "0 0 20px rgba(251, 146, 60, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              404
            </motion.h1>

            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl">
                <Pizza className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Oops! This page got lost
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto"
            >
              Looks like this page went out for pizza delivery and never came back!
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3">
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 max-w-md mx-auto"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-white/80">The page you're looking for doesn't exist</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 max-w-md mx-auto"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <div className="flex items-center gap-3">
                <Search className="w-5 h-5 text-purple-400" />
                <span className="text-white/80">Maybe it's time to order some pizza instead?</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(251, 146, 60, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg group"
            >
              <motion.div
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.div>
              Go Back
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/'}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/30 text-white font-semibold rounded-xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Home className="w-5 h-5" />
              </motion.div>
              Go Home
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-12"
          >
            <motion.p
              className="text-white/50 text-sm"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🍕 Don't worry, our pizzas never get lost! 🍕
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
