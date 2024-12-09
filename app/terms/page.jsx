import Faq from "@/components/common/Faq";
import Map from "@/components/common/Map";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Contact from "@/components/homes/home-7/Contact";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems } from "@/data/menu";

// import { gradientMultipage } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = false;
export const metadata = {
    title: "Mibugo Consulting - Unlock Your Business Potential",
    description:
        "Unleash your business's true potential with Mibugo Consulting, one of India's leading boutique consulting firms, dedicated to driving growth and innovation for SMEs and startups.",
};
export default function TermsAndConditions() {
    return (
        <>
            <div className='theme-gradient'>
                <div className='page' id='top'>
                    {/* <nav className='main-nav transparent stick-fixed wow-menubar'>
                        <Header1Multipage links={menuItems} />
                    </nav> */}
                    <nav className='main-nav transparent stick-fixed wow-menubar'>
                        <Header7 links={menuItems} />
                    </nav>
                    <main id='main'>
                        <section className='page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden'>
                            <div className='bg-shape-1 wow fadeIn'>
                                <Image src='/assets/images/demo-fancy/bg-shape-1.svg' width={1443} height={844} alt='' />
                            </div>

                            <div className='container position-relative pt-10 pt-sm-40 text-center'>
                                <div className='row'>
                                    <div className='col-lg-10 offset-lg-1'>
                                        <h1 className='hs-title-1 mb-10 wow fadeInUpShort' data-wow-duration='0.75s'>
                                            Terms & Conditions
                                        </h1>

                                        {/* <p className='section-descr mb-0 wow fadeIn' data-wow-delay='0.2s'>
                                            Reach out and let's bring your vision to life.
                                        </p> */}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className='page-section'>
                            <div className='container relative'>
                                <div className='row'>
                                    {/* Content */}
                                    <div className='col-lg-8 offset-lg-2'>
                                        {/* Post */}
                                        <div className='blog-item mb-80 mb-xs-40'>
                                            <div className='blog-item-body'>
                                                {/* Media Gallery */}
                                                <p className='lead'>
                                                    Welcome to Mibugo Consulting. By using our website and services, you agree to the following Terms
                                                    & Conditions. Please read them carefully.
                                                </p>
                                                <b>Services Provided</b>
                                                <p>
                                                    Mibugo Consulting offers professional consulting services tailored to SMEs and startups. All
                                                    services are subject to agreements and scopes defined during consultations.
                                                </p>
                                                <b>User Responsibilities</b>
                                                <p>
                                                    Users are responsible for providing accurate information and complying with all applicable laws
                                                    when using our services.
                                                </p>
                                                <b>Intellectual Property</b>
                                                <p>
                                                    All content, including text, graphics, and branding, is owned by Mibugo Consulting and is
                                                    protected under intellectual property laws. Unauthorized use is prohibited.
                                                </p>
                                                <b>Payment Terms</b>
                                                <p>
                                                    Payment for services is due as per agreed terms. Refunds or cancellations are addressed on a
                                                    case-by-case basis in compliance with our policies.
                                                </p>
                                                <b> Limitation of Liability</b>
                                                <p>
                                                    Mibugo Consulting is not liable for indirect or consequential losses arising from the use of our
                                                    services or website.
                                                </p>
                                                <b>Privacy</b>
                                                <p>Our use of personal information is governed by our Privacy Policy.</p>
                                                <b>Changes to Terms</b>
                                                <p>
                                                    We reserve the right to update these Terms & Conditions at any time. Continued use of our services
                                                    implies acceptance of these changes.
                                                </p>
                                                <b>Contact Information</b>
                                                <p>
                                                    For questions or concerns regarding these Terms, please reach out to us at&nbsp;
                                                    <a href='mailto:info@mibugo.com' class='text-blue-500 hover:underline'>
                                                        info@mibugo.com
                                                    </a>
                                                    .
                                                </p>

                                                <b>Thank you for choosing Mibugo Consulting.</b>
                                                <p>
                                                    <b>Effective Date:</b> Dec 5, 2024
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Content */}
                                </div>
                            </div>
                        </section>
                    </main>
                    <footer className='page-section footer bg-dark-1 light-content overflow-hidden pb-30'>
                        <div className='bg-shape-4'>
                            <Image width='1443' height='644' src='/assets/images/demo-gradient/bg-shape-1.svg' alt='' />
                        </div>
                        <Footer7 />
                    </footer>
                </div>{" "}
            </div>
        </>
    );
}
