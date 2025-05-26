"use client";
import { ExternalLink, Pizza, Heart, Code, Sparkles } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <motion.footer
      className='relative mt-auto bg-gradient-to-t from-slate-900 via-purple-900/50 to-transparent border-t border-white/10'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 left-1/4 w-40 h-40 rounded-full bg-orange-500/5 blur-[60px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-10 right-1/3 w-32 h-32 rounded-full bg-purple-500/5 blur-[40px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='py-12'
          variants={itemVariants}
        >
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>

            <motion.div
              className='flex flex-col items-center lg:items-start gap-4'
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg"
                >
                  <Pizza className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Order the Pizzas
                </h3>
              </motion.div>

              <motion.p
                className="text-white/60 text-center lg:text-left max-w-md"
                variants={itemVariants}
              >
                Delicious pizzas delivered with love, crafted with passion, and served with style.
              </motion.p>
            </motion.div>

            <motion.div
              className='flex flex-col sm:flex-row gap-8 lg:gap-12'
              variants={itemVariants}
            >
              {[
                { icon: Pizza, label: 'Fresh Pizzas', value: '100+' },
                { icon: Heart, label: 'Happy Customers', value: '500+' },
                { icon: Sparkles, label: 'Five Star Reviews', value: '50+' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${
                      index === 0 ? 'from-orange-500/20 to-red-500/20 border border-orange-500/30' :
                      index === 1 ? 'from-pink-500/20 to-red-500/20 border border-pink-500/30' :
                      'from-yellow-500/20 to-orange-500/20 border border-yellow-500/30'
                    } mb-2`}
                    whileHover={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className='text-center lg:text-right'
              variants={itemVariants}
            >
              <motion.p
                className='flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-2 text-white/70'
                whileHover={{ scale: 1.02 }}
              >
                <span className="flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Code className="w-4 h-4 text-orange-400" />
                  </motion.div>
                  Developed and Designed By The one and only
                </span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className='font-bold flex items-center gap-1 text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text hover:from-orange-300 hover:to-red-300 transition-all duration-300'
                    target='_blank'
                    href="https://me-seven-livid.vercel.app/"
                  >
                    <span>sudo</span>
                    <motion.div
                      whileHover={{
                        rotate: 45,
                        scale: 1.2
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ExternalLink className='h-3 w-3' />
                    </motion.div>
                  </Link>
                </motion.div>
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            className='mt-12 pt-8 border-t border-white/10'
            variants={itemVariants}
          >
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
              <motion.p
                className='text-white/50 text-sm'
                whileHover={{ color: 'rgba(255,255,255,0.7)' }}
              >
                © 2024 Order the Pizzas. Made with passion and lots of cheese.
              </motion.p>

              <motion.div
                className="flex items-center gap-2 text-white/50 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <span>Built with</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                </motion.div>
                <span>and Next.js</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
