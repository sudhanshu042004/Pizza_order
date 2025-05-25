"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';

const Header = () => {
    const { data: session } = useSession();
    const pathname = usePathname();
    const isDashboard = pathname?.startsWith('/dashboard/order');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleAvatarClick = () => {
        setShowDropdown(prev => !prev);
    }

    return (
        <div className='fixed z-50 rounded-xl backdrop-blur-xl bg-black/5 left-0 right-0 mx-4 mt-6 sm:mx-6 sm:mt-6 lg:mx-40 lg:mt-6' >
            <div className='flex items-center justify-between text-sm h-[70px] px-4 py-2 font-medium ' >
                <div className='text-lg' >Order the Pizzas</div>
                <div className='flex space-x-6' >
                    <div className='flex items-center' >
                        <Link href={isDashboard ? '/dashboard' : '/dashboard/order'} className='text-black/60 hover:text-black transition-colors whitespace-nowrap relative group' >
                            {isDashboard ? 'Dashboard' : 'Pizza Orders'}
                            <span className="bg-black left-0 h-[2px] absolute -bottom-1 w-0 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                    <div>
                        <div onClick={handleAvatarClick} className='cursor-pointer' >
                            <Avatar>
                                <AvatarImage src={session?.user?.image!} />
                                <AvatarFallback>UN</AvatarFallback>
                            </Avatar>
                        </div>

                        {showDropdown && (
                            <div className='absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md p-2'>
                                <button
                                    onClick={() => signOut()}
                                    className='text-sm text-red-500 flex gap-2 py-2 px-3 hover:text-red-700 transition-colors'
                                >
                                    <div>
                                    <LogOut className='h-5 w-5' />
                                    </div>
                                    Sign out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
