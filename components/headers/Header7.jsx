"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";
import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import LanguageSelect from "./components/LanguageSelect";

export default function Header7({ links }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className='main-nav-sub container'>
            <div className='nav-logo-wrap position-static pe-lg-4 me-lg-5 local-scroll'>
                <a href='#top' className='logo'>
                    <Image src='/assets/images/demo-gradient/logo.svg' alt='Your Company Logo' width={200} height={200} className='light-mode-logo' />
                    <Image
                        src='/assets/images/demo-gradient/logo-white.png'
                        alt='Your Company Logo'
                        width={160}
                        height={80}
                        className='dark-mode-logo'
                    />
                </a>
            </div>
            {/* Mobile Menu Button */}
            <div onClick={toggleMobileMenu} className='mobile-nav' role='button' tabIndex={0}>
                <i className='mobile-nav-icon' />
                <span className='visually-hidden'>Menu</span>
            </div>
            {/* Main Menu */}
            <div className='inner-nav desktop-nav'>
                {/* <ul className='clearlist scroll-nav local-scroll justify-content-start scrollspyLinks'>
                    <Nav links={links} animateY />
                </ul> */}
                <ul className='clearlist scroll-nav local-scroll justify-content-start scrollspyLinks'>
                    {links.map((link, index) => (
                        <li
                            key={index}
                            className='relative group'
                            onMouseEnter={() => link.submenu && setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <a href={link.href} className='hover:text-gray-300'>
                                {link.text}
                            </a>
                            {link.submenu && hoveredIndex === index && (
                                <ul className='absolute left-0 bg-gray-700 p-2 rounded shadow-lg justify-content-start'>
                                    {link.submenu.map((submenuItem, subIndex) => (
                                        <li key={subIndex} className='py-1 px-3 hover:bg-gray-600 rounded'>
                                            <a href={submenuItem.href}>{submenuItem.text}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <ul className='items-end clearlist local-scroll'>
                    {/* Languages */}
                    {/* <LanguageSelect /> */}
                    {/* End Languages */}
                    <li>
                        <a href='/contact' className='opacity-1 no-hover'>
                            <span className='btn btn-mod btn-border-grad btn-small btn-round'>
                                <span data-btn-animate='y'>Get in touch</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* End Main Menu */}
        </div>
    );
}
