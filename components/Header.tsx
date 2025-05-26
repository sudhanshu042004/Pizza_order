"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { LogOut, Pizza, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const { data: session } = useSession();
    const pathname = usePathname();
    const isDashboard = pathname?.startsWith('/dashboard/order');
    const [showDropdown, setShowDropdown] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleAvatarClick = () => {
        setShowDropdown(prev => !prev);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.avatar-dropdown')) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const headerVariants = {
        hidden: {
            opacity: 0,
            y: -100,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2
            }
        }
    };

    const logoVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                delay: 0.4
            }
        }
    };

    const navVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                delay: 0.5
            }
        }
    };

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: -10,
            x: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: -10,
            transition: { duration: 0.2 }
        }
    };

    if (!mounted) return null;

    return (
        <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className='fixed z-50 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 left-0 right-0 mx-4 mt-6 sm:mx-6 sm:mt-6 lg:mx-40 lg:mt-6 shadow-2xl shadow-purple-500/10'
        >
            <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-pink-500/10"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.02, 1]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className='relative flex items-center justify-between text-sm h-[70px] px-6 py-2 font-medium'>
                <motion.div
                    variants={logoVariants}
                    className='flex items-center gap-3'
                >
                    <motion.div
                        whileHover={{
                            rotate: 360,
                            scale: 1.1
                        }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            stiffness: 200
                        }}
                        className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg"
                    >
                        <Pizza className="w-5 h-5 text-white" />
                    </motion.div>

                    <motion.div
                        className='text-lg font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent'
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        Order the Pizzas
                    </motion.div>

                    <motion.div
                        animate={{
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1
                        }}
                    >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={navVariants}
                    className='flex items-center space-x-6'
                >
                    <motion.div
                        className='flex items-center'
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <Link
                            href={isDashboard ? '/dashboard' : '/dashboard/order'}
                            className='text-white/80 hover:text-white transition-all duration-300 whitespace-nowrap relative group px-4 py-2 rounded-lg hover:bg-white/10'
                        >
                            {isDashboard ? 'Dashboard' : 'Pizza Orders'}
                            <motion.span
                                className="absolute left-4 right-4 h-[2px] bg-gradient-to-r from-orange-400 to-red-400 -bottom-1 origin-left"
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    </motion.div>

                    <div className='avatar-dropdown relative'>
                        <motion.div
                            onClick={handleAvatarClick}
                            className='cursor-pointer relative'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                animate={showDropdown ? {
                                    opacity: [0, 1, 0],
                                    scale: [1, 1.2, 1]
                                } : {}}
                                transition={{ duration: 1, repeat: Infinity }}
                            />

                            <motion.div className="relative ring-2 ring-white/20 rounded-full hover:ring-orange-400/50 transition-all duration-300">
                                <Avatar className="w-10 h-10">
                                    <AvatarImage src={session?.user?.image!} />
                                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">
                                        {session?.user?.name?.charAt(0)?.toUpperCase() || 'U'}
                                    </AvatarFallback>
                                </Avatar>
                            </motion.div>
                        </motion.div>

                        <AnimatePresence>
                            {showDropdown && (
                                <motion.div
                                    variants={dropdownVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className='absolute right-0 mt-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl p-2 min-w-[180px]'
                                >
                                    <motion.div
                                        className="p-3 border-b border-white/10"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <p className="text-white font-medium text-sm">
                                            {session?.user?.name || 'User'}
                                        </p>
                                        <p className="text-white/60 text-xs">
                                            {session?.user?.email}
                                        </p>
                                    </motion.div>

                                    <motion.button
                                        onClick={() => signOut()}
                                        className='w-full text-sm text-red-400 flex items-center gap-3 py-3 px-3 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300 rounded-lg mt-1'
                                        whileHover={{
                                            scale: 1.02,
                                            x: 5
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <motion.div
                                            whileHover={{ rotate: 180 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <LogOut className='h-4 w-4' />
                                        </motion.div>
                                        Sign out
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Header;
