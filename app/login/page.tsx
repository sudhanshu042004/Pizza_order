"use client";
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { motion } from 'framer-motion';

const LoginPage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">

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

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 w-[90%] max-w-sm shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex justify-center mb-6"
        >
          <div className="p-4 bg-white rounded-full shadow-lg">
            <FcGoogle size={32} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-center text-xl font-semibold mb-4"
        >
          Continue with Google
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => signIn('google', { redirect: true, callbackUrl: "/dashboard" })}
          className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg py-3 text-white font-medium transition-all duration-300"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LoginPage;
