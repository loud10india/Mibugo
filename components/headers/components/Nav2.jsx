"use client";

import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav2({ links }) {
    const [menuOpen, setMenuOpen] = useState([-1, -1]);

    const toggleMenu = (level, index) => {
        const tempMenuOpen = [...menuOpen];
        tempMenuOpen[level] = tempMenuOpen[level] === index ? -1 : index;
        setMenuOpen(tempMenuOpen);
    };

    const pathname = usePathname();

    useEffect(() => {
        setTimeout(() => {
            scrollToElement();
        }, 1000);
        init_classic_menu_resize();

        window.addEventListener("resize", init_classic_menu_resize);

        return () => {
            window.removeEventListener("resize", init_classic_menu_resize);
        };
    }, []);

    return (
        <>
            {links.map((item, index) => (
                <li className={menuOpen[0] === index ? "js-opened" : ""} key={index}>
                    {item.subMenu ? (
                        <>
                            <a
                                href='#'
                                onClick={() => toggleMenu(0, index)}
                                className={`mn-has-sub ${
                                    item.subMenu.some((sub) => sub.links.some((link) => pathname.includes(link.href))) ? "active" : ""
                                }`}
                            >
                                {item.title} <i className='mi-chevron-down' />
                            </a>
                            <ul className={`mn-sub ${menuOpen[0] === index ? "mobile-sub-active" : ""}`}>
                                {item.subMenu.map((sub, subIndex) =>
                                    sub.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link className={pathname.includes(link.href) ? "active" : ""} href={link.href}>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </>
                    ) : (
                        <Link className={pathname.includes(item.href) ? "active" : ""} href={item.href}>
                            {item.title}
                        </Link>
                    )}
                </li>
            ))}
        </>
    );
}
