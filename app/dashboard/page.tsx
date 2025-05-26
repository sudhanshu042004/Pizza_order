"use client";
import { useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { User, Pizza, Clock, Star, TrendingUp, Award, Heart, Sparkles } from 'lucide-react';
import React from 'react';
import Loading from '@/components/Loading';

const Dashboard = () => {
  const { data: session, status } = useSession();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const statsData = [
    { icon: Pizza, label: "Total Orders", value: "24", color: "from-orange-400 to-red-500" },
    { icon: Clock, label: "Avg Delivery", value: "28min", color: "from-blue-400 to-purple-500" },
    { icon: Star, label: "Rating", value: "4.9", color: "from-yellow-400 to-orange-500" },
    { icon: Heart, label: "Favorites", value: "12", color: "from-pink-400 to-rose-500" }
  ];

  const achievements = [
    { icon: Award, title: "Pizza Explorer", description: "Tried 10+ different pizzas" },
    { icon: TrendingUp, title: "Loyal Customer", description: "20+ orders completed" },
    { icon: Star, title: "Top Reviewer", description: "5-star rating streak" }
  ];

  if (status === "loading") {
    return (
      <Loading/>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-500/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-pink-500/10 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 pt-20 px-4 mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={cardVariants} className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              className="inline-block mb-4"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>
                {session?.user?.image ? (
                  <img
                    src={session.user.image}
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-4 border-purple-400 shadow-lg"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
                    <User className="w-10 h-10 text-white" />
                  </div>
                )}
              </div>
            </motion.div>

            <motion.h1
              variants={cardVariants}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-4"
            >
              Welcome Back!
            </motion.h1>

            <motion.p
              variants={cardVariants}
              className="text-xl text-white/80"
            >
              Hello, <span className="font-semibold text-white">{session?.user?.name || 'Pizza Lover'}</span>
            </motion.p>

            <motion.p
              variants={cardVariants}
              className="text-white/60 mt-2"
            >
              Ready to order some delicious pizza today?
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-3xl font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                </div>
                <p className="text-white/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              variants={cardVariants}
              className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Pizza className="w-7 h-7 text-orange-400" />
                Quick Actions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-semibold text-left hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Pizza className="w-6 h-6" />
                    <span className="text-lg">Order Pizza</span>
                  </div>
                  <p className="text-white/80 text-sm">Browse our delicious menu</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-semibold text-left hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-6 h-6" />
                    <span className="text-lg">Track Orders</span>
                  </div>
                  <p className="text-white/80 text-sm">Check your order status</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white font-semibold text-left hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-6 h-6" />
                    <span className="text-lg">Favorites</span>
                  </div>
                  <p className="text-white/80 text-sm">Your saved pizzas</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-semibold text-left hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-6 h-6" />
                    <span className="text-lg">Reviews</span>
                  </div>
                  <p className="text-white/80 text-sm">Rate your experience</p>
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="w-7 h-7 text-yellow-400" />
                Achievements
              </h2>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    variants={cardVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <motion.div
                      className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <achievement.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{achievement.title}</h3>
                      <p className="text-white/60 text-xs mt-1">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={cardVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-7 h-7 text-green-400" />
              Recent Activity
            </h2>

            <div className="space-y-4">
              {[
                { action: "Ordered Margherita Pizza", time: "2 hours ago", status: "delivered" },
                { action: "Rated Pepperoni Pizza", time: "1 day ago", status: "completed" },
                { action: "Added Hawaiian Pizza to favorites", time: "3 days ago", status: "saved" }
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div>
                    <p className="text-white font-medium">{activity.action}</p>
                    <p className="text-white/60 text-sm">{activity.time}</p>
                  </div>
                  <motion.div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'delivered' ? 'bg-green-500/20 text-green-400' :
                      activity.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {activity.status}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
