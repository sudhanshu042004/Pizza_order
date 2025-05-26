import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
           <motion.div
             animate={{ rotate: 360 }}
             transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
             className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full"
           />
         </div>
  );
};

export default Loading;
