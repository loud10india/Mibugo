import "swiper/css";
import "../public/assets/css/styles.css";
import "jarallax/dist/jarallax.min.css";
import "swiper/css/effect-fade";
import "react-modal-video/css/modal-video.css";
import "photoswipe/dist/photoswipe.css";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";
import { MainLayout } from "@/components/layout/mainLayout/main.layout";
import "tippy.js/dist/tippy.css";
import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";
import Script from "next/script";

export const metadata = {
    title: "Mibugo Consulting - Unlock Your Business Potential",
    description:
        "Unleash your business's true potential with Mibugo Consulting, one of India's leading boutique consulting firms, dedicated to driving growth and innovation for SMEs and startups.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className='no-mobile no-touch'>
            <head>
                <link href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500&family=Poppins&display=swap' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' rel='stylesheet' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap'
                    rel='stylesheet'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap'
                    rel='stylesheet'
                />
                <link rel='icon' href='/favicon.ico' sizes='any' />
                {/* Google tag (gtag.js) */}
                <Script async src='https://www.googletagmanager.com/gtag/js?id=G-TJC0MHP81W'></Script>
                <Script id='google-analytics'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-TJC0MHP81W');
                    `}
                </Script>
            </head>
            <body className='appear-animate body'>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
