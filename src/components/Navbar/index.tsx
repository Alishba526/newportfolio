"use client";

import { useState } from 'react';


import Link from 'next/link';
import { usePathname } from 'next/navigation'

import {
    MenuIcon,
    XIcon,
    DownloadIcon
} from 'lucide-react';



const Navbar = () => {

    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isHomeActive = pathname == '/' ? true : false;
    const isAboutActive = pathname == '/about' ? true : false;

    return (
        <>
            {/* Top bar */}
            <div className='bg-pink-600'></div>

            {/* Navbar */}
            <nav className="bg-background border-b border-pink-700 animate__animated animate__fadeInDown">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex justify-between h-16">

                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <Link href="/C:\Users\SS LAPTOP\Documents\alishbaimportantfailportfolio\my-work\public\image\alishba1.pdf" className="text-white text-2xl font-bold">
                                    ALISHBA <span className='text-pink-600'>M .REHMAN</span>
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <div className="flex items-baseline space-x-4">

                                    <Link href="/alishba1" className={isHomeActive ? "active [&.active]:bg-pink-600 [&.active]:text-background text-white transition-all duration-300 px-3 py-2 rounded-md text-lg font-bold cursor-pointer" : "text-white transition-all duration-300 hover:bg-pink-600 hover:text-background px-3 py-2 rounded-md text-lg font-bold cursor-pointer"}>
                                        Home
                                    </Link>

                                    <Link href="/about" className={isAboutActive ? "active [&.active]:bg-pink-600 [&.active]:text-background text-white transition-all duration-300 px-3 py-2 rounded-md text-lg font-bold cursor-pointer" : "text-white transition-all duration-300 hover:bg-pink-600 hover:text-background px-3 py-2 rounded-md text-lg font-bold cursor-pointer"}>
                                        About
                                    </Link>

                                    <Link href="alishbarehman" target={'_blank'} className="flex items-center gap-2 text-white transition-all duration-300 hover:bg-pink-600 hover:text-background px-3 py-2 rounded-md text-lg font-bold cursor-pointer">
                                        Resume <DownloadIcon className="h-4 w-4" />
                                    </Link>

                                </div>
                            </div>

                            <div className="md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                                >
                                    {isOpen ? (
                                        <XIcon className="h-6 w-6" />
                                    ) : (
                                        <MenuIcon className="h-6 w-6" />
                                    )}
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                            <Link href="/" className="text-white transition-all duration-300 hover:bg-pink-600 hover:text-background block px-3 py-2 rounded-md text-base font-bold">
                                Home
                            </Link>

                            <Link href="/about" className="text-white transition-all duration-300 hover:bg-pink-600 hover:text-background block px-3 py-2 rounded-md text-base font-bold">
                                About
                            </Link>

                            <Link href="/contact" className="text-white transition-all duration-300 hover:bg-pink-600 hover:text-background block px-3 py-2 rounded-md text-base font-bold">
                                Resume <DownloadIcon className="h-4 w-4 inline-block" />
                            </Link>

                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;