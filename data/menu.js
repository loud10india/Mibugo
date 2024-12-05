// export const gradientMultipage = [
//     { href: "/", text: "Home", active: true },
//     { href: "/about", text: "About", active: false },
//     { href: "/services", text: "Services", active: false },
//     { href: "/contact", text: "Contact", active: false },
// ];
export const gradientMultipage = [
    { href: "/", text: "Home", active: true },
    { href: "/about", text: "About", active: false },
    {
        href: "/services",
        text: "Services",
        active: false,
        submenu: [
            { href: "/services/strategy", text: "Strategy" },
            { href: "/services/marketing", text: "Marketing" },
            { href: "/services/people", text: "People" },
            { href: "/services/process", text: "Process" },
            { href: "/services/profit", text: "Profit" },
        ],
    },
    { href: "/contact", text: "Contact", active: false },
];

export const gradientMultipageDark = [
    { href: "/gradient-multi-page-dark", text: "Home", active: true },
    { href: "/gradient-about-dark", text: "About", active: false },
    { href: "/gradient-services-dark", text: "Services", active: false },
    { href: "/gradient-portfolio-dark", text: "Portfolio", active: false },
    { href: "/gradient-blog-dark", text: "Blog", active: false },
    { href: "/gradient-contact-dark", text: "Contact", active: false },
];

export const gradientOnePage = [
    { href: "#home", text: "Home", className: "active", dataBtnAnimate: "y" },
    { href: "#about", text: "About", dataBtnAnimate: "y" },
    { href: "#services", text: "Services", dataBtnAnimate: "y" },
    { href: "#portfolio", text: "Portfolio", dataBtnAnimate: "y" },
    { href: "#blog", text: "Blog", dataBtnAnimate: "y" },
    { href: "#contact", text: "Contact", dataBtnAnimate: "y" },
];
