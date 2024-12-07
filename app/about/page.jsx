"use client";

import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import { teamMembers } from "@/data/team";
import { useState } from "react";
// import { gradientMultipage } from "@/data/menu";
import Image from "next/image";
import Faq from "@/components/common/Faq";
import Header1Multipage from "@/components/headers/Header1Multipage";
import { menuItems } from "@/data/menu";

const onePage = false;
const dark = false;

// export const metadata = {
//     title: "Mibugo Consulting - Unlock Your Business Potential",
//     description:
//         "Unleash your business's true potential with Mibugo Consulting, one of India's leading boutique consulting firms, dedicated to driving growth and innovation for SMEs and startups.",
// };

export default function GradientAboutPage() {
    const [activeMember, setActiveMember] = useState(null); // Track the active member's modal

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
                        {/* About Us Section */}
                        <section className='page-section bg-gradient-gray-light-1 bg-scroll overflow-hidden'>
                            <div className='bg-shape-1 wow fadeIn'>
                                <Image src='/assets/images/demo-fancy/bg-shape-1.svg' width={1443} height={844} alt='' />
                            </div>
                            <div className='container position-relative pt-10 pt-sm-40 text-center'>
                                <div className='row'>
                                    <div className='col-lg-10 offset-lg-1'>
                                        <h1 className='hs-title-1 mb-10 wow fadeInUpShort' data-wow-duration='0.75s'>
                                            About Us
                                        </h1>
                                        <p className='section-descr mb-0 wow fadeIn' data-wow-delay='0.2s'>
                                            Meet the Minds Behind Mibugo
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* About Section */}
                        <section
                            className={`page-section scrollSpysection bg-scroll ${dark ? "bg-dark-1 bg-gradient-gray-dark-2 light-content" : ""}`}
                            id='about'
                        >
                            <div className='row container'>
                                <div className='col-lg-4 '>
                                    <div className='lead-alt wow linesAnimIn' data-wow-offset={0} data-splitting='lines'>
                                        Our mission is delivering innovative strategies for business growth.
                                    </div>
                                </div>
                                <div className='col-lg-8 wow linesAnimIn' data-wow-offset={0} data-splitting='lines'>
                                    <p className='mb-0'>
                                        At Mibugo Consulting, our team is the backbone of your business transformation. Comprising experts from
                                        diverse fields, we bring strategic insights, innovative solutions, and a shared commitment to your success.
                                        Together, we are passionate about helping SMEs and startups overcome challenges, seize opportunities, and
                                        achieve sustainable growth. Meet the people who make it happen!
                                    </p>
                                </div>
                            </div>
                        </section>
                        <hr className='mt-0 mb-20 mb-sm-10' />

                        {/* Team Section */}
                        <section className='page-section' id='team'>
                            <div className='container'>
                                <div className='row position-relative mt-n40 wow fadeInUp' data-wow-delay='0.1s'>
                                    {/* Team items */}
                                    {teamMembers.map((member, index) => (
                                        <div key={index} className='col-sm-6 col-lg-4 mt-40'>
                                            <a onClick={() => setActiveMember(member)}>
                                                <div className='team-item'>
                                                    <div className='team-item-image'>
                                                        <Image src={member.image} width={600} height={800} alt={member.name} />
                                                    </div>
                                                    <div className='team-item-descr'>
                                                        <div className='team-item-name'>{member.name}</div>
                                                        <div className='team-item-role'>{member.role}</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Modal for Active Member */}
                        {activeMember && (
                            <div className='mfp-bg mfp-fade mfp-ready' onClick={() => setActiveMember(null)}>
                                <div
                                    className='mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready'
                                    style={{ overflow: "hidden auto" }}
                                >
                                    <div className='mfp-container mfp-s-ready mfp-inline-holder'>
                                        <div className='mfp-content'>
                                            <div id='test-modal'>
                                                <h3>{activeMember.name}</h3>
                                                <p>{activeMember.text}</p>
                                                <button onClick={() => setActiveMember(null)} title='Close (Esc)' type='button' className='mfp-close'>
                                                    ×<span className='visually-hidden'>Close</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className='mfp-preloader'>Loading...</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* <hr className='container mt-0 mb-80 mb-sm-40' /> */}

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
                    <footer id='footer' className='page-section footer bg-dark-1 light-content overflow-hidden pb-30'>
                        <div className='bg-shape-4'>
                            <Image width='1443' height='644' src='/assets/images/demo-gradient/bg-shape-1.svg' alt='' />
                        </div>
                        <Footer7 />
                    </footer>
                </div>
            </div>
        </>
    );
}
