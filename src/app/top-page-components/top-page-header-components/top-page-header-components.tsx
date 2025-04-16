'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { Typography } from '@mui/material';

import LanguageSwitching from './language-switching-components'
import SignUpButton from './sign-up-components';
import SignInButton from './sign-in-components';
import SignOutButton from './sign-out-components';

function TopPageHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white text-[#4F772D] shadow-md fixed top-0 w-full z-50">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Left side: Logo */}
                    <Link href="/#" className="text-xl font-bold hover:text-[#364b24] transition-colors duration-300">
                        <Typography fontSize={{ xs: '16px', sm: '18px', md: '20px' }} fontWeight="bold">
                            Soccer-e-Learning
                        </Typography>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex space-x-4 lg:space-x-8 ml-8 font-bold overflow-x-auto">
                        {[
                            { href: '/Home', label: 'Home' },
                            { href: '/CourseOverview', label: 'Course Overview' },
                            { href: '/Features', label: 'Features' },
                            { href: '/Instructors', label: 'Instructors' },
                            { href: '/Pricing', label: 'Pricing' },
                            { href: '/FAQ', label: 'FAQ' },
                            { href: '/Contact', label: 'Contact' }
                        ].map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="relative group text-m transition duration-300 hover:text-[#364b24]"
                            >
                                {label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4F772D] transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right side: Auth + Language */}
                    <div className="hidden xl:flex items-center space-x-4">
                        <SignInButton />
                        <SignOutButton />
                        <SignUpButton />
                        <LanguageSwitching />
                    </div>

                    {/* Mobile hamburger menu */}
                    <div className="xl:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                            {menuOpen ? '✕' : '☰'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`xl:hidden ${menuOpen ? 'block' : 'hidden'} bg-white shadow px-4 pb-4 space-y-2`}>
                {[
                    { href: '/Home', label: 'Home' },
                    { href: '/CourseOverview', label: 'Course Overview' },
                    { href: '/Features', label: 'Features' },
                    { href: '/Instructors', label: 'Instructors' },
                    { href: '/Pricing', label: 'Pricing' },
                    { href: '/FAQ', label: 'FAQ' },
                    { href: '/Contact', label: 'Contact' }
                ].map(({ href, label }) => (
                    <Link key={href} href={href} className="block py-2 text-sm hover:text-[#364b24]">
                        {label}
                    </Link>
                ))}
                <div className="pt-2 border-t">
                    <SignInButton />
                    <SignOutButton />
                    <SignUpButton />
                    <LanguageSwitching />
                </div>
            </div>
        </header>
    );
}

export default TopPageHeader;
