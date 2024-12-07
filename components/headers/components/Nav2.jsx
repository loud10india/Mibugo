"use client";

import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { scrollToElement } from "@/utlis/scrollToElement";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuItems } from "@/data/menu";

export default function Nav2({ links }) {
    const [menuOpen, setMenuOpen] = useState([-1, -1]);

    const toggleMenu = (level, index) => {
        setMenuOpen((prev) => {
            const updated = [...prev];
            updated[level] = updated[level] === index ? -1 : index;
            return updated;
        });
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

    const isActive = (href) => pathname.split("/")[1] === href.split("/")[1];

    return (
        <>
            {/* <ul> */}
            {(menuItems || []).map((item, index) => (
                <li className={menuOpen[0] === index ? "js-opened" : ""} key={index}>
                    <a
                        href='#'
                        onClick={() => toggleMenu(0, index)}
                        className={`mn-has-sub ${item.subMenu?.some((sub) => sub.links?.some((link) => isActive(link?.href))) ? "active" : ""}`}
                    >
                        {item.text}
                        {/* Show dropdown icon only for "Services" */}
                        {item.text === "Services" && <i className='mi-dropdown-icon' style={{ marginLeft: "8px" }} />}
                    </a>
                    {item.subMenu && (
                        <ul className={`mn-sub ${menuOpen[0] === index ? "mobile-sub-active" : ""}`}>
                            {item.subMenu.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                    {subItem.text && <span className='mn-group-title'>{subItem.text}</span>}
                                    <ul>
                                        {subItem.links?.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <Link className={isActive(link.href) ? "active" : ""} href={link.href}>
                                                    {link.icon && <i className={link.icon} />} {link.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
            {/* </ul> */}
        </>
    );
}
