import Faq from "@/components/common/Faq";
import Map from "@/components/common/Map";
import Footer7 from "@/components/footers/Footer7";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Header7 from "@/components/headers/Header7";
import Contact from "@/components/homes/home-7/Contact";
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
export default function GradientContactPage() {
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
                                            Contact Us
                                        </h1>

                                        <p className='section-descr mb-0 wow fadeIn' data-wow-delay='0.2s'>
                                            Reach out and let's bring your vision to life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={`page-section  scrollSpysection   ${dark ? "bg-dark-1 light-content" : ""}`} id='contact'>
                            <Contact />
                        </section>
                        {/* <div className='google-map'>
                            <Map />
                        </div> */}
                        {/* <!-- End Google Map --> */}

                        {/* <!-- FAQ Section --> */}
                        <section className='page-section z-index-1'>
                            <div className='container position-relative'>
                                <div className='row position-relative'>
                                    <div className='col-md-6 col-lg-5 mb-md-50 mb-sm-30'>
                                        <h3 className='section-title mb-30'>Frequently Asked Questions</h3>

                                        <p className='text-gray mb-0'>
                                            Curious about how a business consulting firm can help your growth? Our FAQs provide insights into our
                                            services, process, and expertise. Discover how Mibugo Consulting empowers businesses to overcome
                                            challenges and achieve success.
                                        </p>
                                    </div>

                                    <div className='col-md-6 offset-lg-1 pt-10 pt-sm-0'>
                                        {/* <!-- Accordion --> */}
                                        <Faq />
                                        {/* <!-- End Accordion --> */}
                                    </div>
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
