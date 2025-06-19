"use client"

import Link from 'next/link';
import { useState, memo } from 'react';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import Image from "next/image";

const PageLayout = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-emerald-800 text-white shadow-md">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold">Propera</h1>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8 items-center">
                            <Link href="/" className="hover:text-emerald-200 transition">Home</Link>
                            <Link href="/properties" className="hover:text-emerald-200 transition">Properties</Link>
                            <Link href="/about-us" className="hover:text-emerald-200 transition">About</Link>
                            <Link href="/contact-us" className="hover:text-emerald-200 transition">Contact</Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className='flex items-center gap-4'>
                            <button
                                className="md:hidden text-2xl"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <FiX /> : <FiMenu />}
                            </button>
                            <Link href="/profile" className="ml-4 flex items-center hover:text-emerald-200 transition">
                                <FiUser className="text-2xl" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <nav className="md:hidden mt-4 pb-4 space-y-3">
                            <Link href="/" className="block hover:text-emerald-200 transition">Home</Link>
                            <Link href="/properties" className="block hover:text-emerald-200 transition">Properties</Link>
                            <Link href="/about-us" className="block hover:text-emerald-200 transition">About</Link>
                            <Link href="/contact-us" className="block hover:text-emerald-200 transition">Contact</Link>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            {children}

            {/* Footer */}
            <footer className="bg-emerald-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Propera</h3>
                            <p className="text-emerald-200">
                                Your trusted partner in finding the perfect property.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-emerald-200 hover:text-white transition">Home</Link></li>
                                <li><Link href="/properties" className="text-emerald-200 hover:text-white transition">Properties</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><Link href="/about-us" className="text-emerald-200 hover:text-white transition">About Us</Link></li>
                                <li><Link href="#" className="text-emerald-200 hover:text-white transition">Careers</Link></li>
                                <li><Link href="#" className="text-emerald-200 hover:text-white transition">Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2">
                                <li className="text-emerald-200">123 Property Lane</li>
                                <li className="text-emerald-200">info@propera.com</li>
                                <li className="text-emerald-200">(123) 456-7890</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-emerald-700 mt-8 pt-6 text-center text-emerald-300">
                        <p>© {new Date().getFullYear()} Propera. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default memo(PageLayout);