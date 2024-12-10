import React from "react";
import About from "./About";
import Achievement from "./Achievement";
import Service from "./Service";
import Image from "next/image";
import Portfolio from "./Portfolio";

import Steps from "./Steps";
import Banner from "./Banner";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";
import Cta3 from "./Cta3";
import Contact from "./Contact";
import Link from "next/link";
import AnimatedText from "@/components/common/AnimatedText";

export default function Home7({ onePage = false, dark = false }) {
    return (
        <>
            <section
                className={`page-section  scrollSpysection  bg-scroll ${
                    dark ? "bg-dark-1 bg-gradient-gray-dark-2 light-content" : "bg-gradient-gray-light-2"
                }`}
                id='about'
            >
                <About />
            </section>
            <section className='full-wrapper'>
                <div className='position-relative'>
                    {/* Decorative Circle */}
                    <div className='decoration-18 d-none d-sm-block' />
                    {/* End Decorative Circle */}
                    {/* Decorative Circle */}
                    <div className='decoration-19 d-none d-sm-block' />
                    {/* End Decorative Circle */}
                    <div
                        className={`page-section bg-dark-1 bg-dark-alpha-80 bg-scroll light-content round-large overflow-hidden`}
                        style={{
                            backgroundImage: "url(/assets/images/demo-gradient/section-bg-1.jpg)",
                        }}
                    >
                        <div className='container position-relative'>
                            <div className='row'>
                                <div className='col-lg-4 mb-md-60 mb-xs-50'>
                                    <h2 className='section-title mb-20 wow fadeInUp'>Discover Our Impact.</h2>
                                    <p className='section-descr mb-40 wow fadeInUp' data-wow-delay='0.1s'>
                                        We deliver innovative solutions that empower our clients to achieve remarkable results.
                                    </p>
                                    <div className='local-scroll wow fadeInUp' data-wow-delay='0.2s'>
                                        {onePage ? (
                                            <>
                                                {" "}
                                                <a
                                                    href='https://calendly.com/mibugo-consulting/30min'
                                                    className='btn btn-mod btn-border-w-light btn-medium btn-round'
                                                    data-btn-animate='y'
                                                >
                                                    <span className='btn-animate-y'>
                                                        <span className='btn-animate-y-1'>
                                                            Book a Free Consultation
                                                            <i className='mi-arrow-right size-24 align-center' aria-hidden='true'></i>
                                                        </span>
                                                        <span className='btn-animate-y-2' aria-hidden='true'>
                                                            Book a Free Consultation
                                                            <i className='mi-arrow-right size-24 align-center' aria-hidden='true'></i>
                                                        </span>
                                                    </span>
                                                </a>
                                            </>
                                        ) : (
                                            <>
                                                {" "}
                                                <Link
                                                    href={`https://calendly.com/mibugo-consulting/30min ${dark ? "-dark" : ""}`}
                                                    className='btn btn-mod btn-border-w-light btn-medium btn-round'
                                                    data-btn-animate='y'
                                                >
                                                    <span className='btn-animate-y'>
                                                        <span className='btn-animate-y-1'>
                                                            Book a Free Consultation
                                                            <i className='mi-arrow-right size-24 align-center' aria-hidden='true'></i>
                                                        </span>
                                                        <span className='btn-animate-y-2' aria-hidden='true'>
                                                            Book a Free Consultation
                                                            <i className='mi-arrow-right size-24 align-center' aria-hidden='true'></i>
                                                        </span>
                                                    </span>
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <Achievement />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`page-section scrollSpysection  ${dark ? "bg-dark-1 light-content" : ""}`} id='services'>
                <Service />
                <div className='text-center mt-140 mt-md-70'>
                    <h3 className='section-title-repeat '>
                        <span className='section-title-repeat-left' aria-hidden='true'>
                            Unlock Growth
                        </span>
                        <span className='section-title-repeat-right' aria-hidden='true'>
                            Unlock Growth
                        </span>
                        <span className='wow charsAnimInLong-1' data-splitting='chars'>
                            <AnimatedText text='Unlock Growth' />
                        </span>
                    </h3>
                </div>
                <div className='row mb-140 mb-md-70'>
                    <div className='col-lg-8 offset-lg-2 text-center'>
                        <p className='text-gray '>
                            Ready to take your business to the next level? Let us provide the strategic insight and guidance you need to fuel
                            sustainable growth. Contact us today for a free consultation!
                        </p>
                    </div>
                </div>
                <div>
                    <Contact />
                </div>
            </section>
            {/* <section className={`page-section scrollSpysection  overflow-hidden  ${dark ? "bg-dark-1 light-content" : ""}`} id='portfolio'>
                <div className='container position-relative'>
                    <div className='text-center'>
                        <h3 className='section-title-repeat '>
                            <span className='section-title-repeat-left' aria-hidden='true'>
                                Unlock Growth
                            </span>
                            <span className='section-title-repeat-right' aria-hidden='true'>
                                Unlock Growth
                            </span>
                            <span className='wow charsAnimInLong-1' data-splitting='chars'>
                                <AnimatedText text='Unlock Growth' />
                            </span>
                        </h3>
                    </div>
                    <div className='row'>
                        <div className='col-lg-8 offset-lg-2 text-center'>
                            <p className='text-gray '>
                                Ready to take your business to the next level? Let us provide the strategic insight and guidance you need to fuel
                                sustainable growth. Contact us today for a free consultation!
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <section className={`page-section  scrollSpysection   ${dark ? "bg-dark-1 light-content" : ""}`} id='contact'>
                <Contact />
            </section> */}
        </>
    );
}
