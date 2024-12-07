import Faq from "@/components/common/Faq";
import Map from "@/components/common/Map";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Contact from "@/components/homes/home-7/Contact";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems } from "@/data/menu";

import { gradientMultipage } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
const onePage = false;
const dark = false;
export const metadata = {
    title: "Mibugo Consulting - Unlock Your Business Potential",
    description:
        "Unleash your business's true potential with Mibugo Consulting, one of India's leading boutique consulting firms, dedicated to driving growth and innovation for SMEs and startups.",
};
export default function PrivacyAndPolicy() {
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
                                            Privacy Policy
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
                                                    At <b>Mibugo Consulting</b>, we value your privacy and are committed to protecting your personal
                                                    information. This Privacy Policy outlines how we collect, use, and safeguard your data when you
                                                    interact with our website or services.
                                                </p>
                                                <b>Information We Collect</b>
                                                <p>
                                                    We may collect personal information, such as your name, email address, phone number, and any
                                                    details shared during consultations or inquiries. Non-personal data, such as browsing behavior and
                                                    IP addresses, may also be gathered for analytical purposes.
                                                </p>
                                                <b>How We Use Your Information</b>
                                                <p>We use the collected data to:</p>
                                                <ul>
                                                    <li>Provide consulting services and respond to inquiries.</li>
                                                    <li>Improve website functionality and user experience.</li>
                                                    <li>Share updates about our services and promotions (with your consent).</li>
                                                </ul>
                                                <b>Sharing Your Information</b>
                                                <p>
                                                    We do not sell or share your information with third parties unless required by law or to provide
                                                    essential services.
                                                </p>
                                                <b>Data Security</b>
                                                <p>
                                                    Your data is stored securely, and we implement robust measures to prevent unauthorized access,
                                                    loss, or misuse.
                                                </p>
                                                <b>Your Rights</b>
                                                {/* <p>
                                                    You have the right to access, update, or request the deletion of your personal information.
                                                    Contact us at info@mibugo.com for any such requests.
                                                </p> */}
                                                <p>
                                                    You have the right to access, update, or request the deletion of your personal information. Please
                                                    reach out to us at&nbsp;
                                                    <a href='mailto:info@mibugo.com' class='text-blue-500 hover:underline'>
                                                        info@mibugo.com
                                                    </a>
                                                    for any such requests.
                                                </p>

                                                <b>Updates to this Policy</b>
                                                <p>
                                                    We may update this Privacy Policy occasionally. Changes will be reflected on this page, and
                                                    significant updates will be communicated.
                                                </p>
                                                {/* <p>
                                                    If you have any questions or concerns about this policy, please reach out to us at
                                                    info@mibugo.com.
                                                </p> */}
                                                <p>
                                                    If you have any questions or concerns about this policy, please reach out to us at&nbsp;
                                                    <a href='mailto:info@mibugo.com' class='text-blue-500 hover:underline'>
                                                        info@mibugo.com
                                                    </a>
                                                    .
                                                </p>

                                                <b>Mibugo Consulting | Your Trusted Business Consulting Partner</b>
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
