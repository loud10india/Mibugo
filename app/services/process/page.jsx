import Faq5 from "@/components/common/Faq5";
import Map from "@/components/common/Map";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Contact from "@/components/homes/home-7/Contact";
import { features8 } from "@/data/features";
import { stepsItems6, stepsItems3 } from "@/data/steps";
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
export default function Process() {
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
                                            Streamlined Process Improvement
                                        </h1>

                                        <p className='section-descr mb-0 wow fadeIn' data-wow-delay='0.2s'>
                                            Simplify Operations, Enhance Productivity
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='page-section pt-80  mt-80 mt-sm-40' id='team'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-5 mb-md-50 mb-xs-30'>
                                        <div className='lead-alt wow linesAnimIn' data-wow-offset={0} data-splitting='lines'>
                                            Struggling to Optimize Your Business Workflows?
                                        </div>
                                    </div>
                                    <div className='col-lg-7 wow linesAnimIn' data-wow-offset={0} data-splitting='lines'>
                                        <p className='mb-0'>
                                            At Mibugo Consulting, we specialize in refining processes to help service- and product-based companies
                                            operate at peak efficiency. Whether it’s automating workflows or improving collaboration, our tailored
                                            solutions empower businesses to deliver better results, faster.
                                        </p>
                                    </div>
                                </div>
                                <hr className='mb-0 mt-80 mt-sm-40' />
                            </div>
                        </section>

                        <section className='page-section mb-80 mb-md-80'>
                            <div className='container position-relative'>
                                <div className='row'>
                                    {/* Section Text */}
                                    <div className='col-lg-5 col-xl-5 d-flex align-items-center '>
                                        <div className='w-100'>
                                            <h2 className='section-caption mb-30 mb-xs-10'>Core Offerings</h2>
                                            <h3 className='section-title mb-30'>Efficiency That Drives Results</h3>
                                            <p className='section-descr '>
                                                Our solutions are crafted to address key operational challenges, ensuring seamless execution across
                                                your business.
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Section Text */}
                                    {/* Image Column */}
                                    <div className='col-lg-7 col-xl-6 offset-xl-1 d-flex align-items-center'>
                                        <div className='position-relative'>
                                            {/* Image */}
                                            <div className='position-relative overflow-hidden'>
                                                <Image
                                                    src='/assets/images/Process 2.jpg'
                                                    className='image-fullwidth relative'
                                                    width={960}
                                                    height={700}
                                                    alt='Image Description'
                                                />
                                            </div>
                                            {/* End Image */}
                                        </div>
                                    </div>
                                    {/* End Image Column */}
                                    {features8.map((elm, i) => (
                                        <div key={i} className='col-sm-6 col-xl-3 d-flex align-items-stretch mt-40'>
                                            <div className='alt-features-item box-shadow text-center mt-30'>
                                                <div className='alt-features-icon mb-10 '>
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox='0 0 60 60'
                                                        fill='currentColor'
                                                        aria-hidden='true'
                                                        focusable='false'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        fillRule='evenodd'
                                                        clipRule='evenodd'
                                                    >
                                                        <path d={elm.svgPath} />
                                                    </svg>
                                                </div>
                                                <h4 className='alt-features-title'>{elm.title}</h4>
                                                <div className='alt-features-descr'>{elm.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* <section className='page-section z-index-1'>
                            <div className='container position-relative'>
                               
                                <div className='row mt-n30 wow fadeInUp'>
                                   
                                    {features8.map((elm, i) => (
                                        <div key={i} className='col-sm-6 col-xl-3 d-flex align-items-stretch'>
                                            <div className='alt-features-item box-shadow text-center mt-30'>
                                                <div className='alt-features-icon mb-10 '>
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox='0 0 60 60'
                                                        fill='currentColor'
                                                        aria-hidden='true'
                                                        focusable='false'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        fillRule='evenodd'
                                                        clipRule='evenodd'
                                                    >
                                                        <path d={elm.svgPath} />
                                                    </svg>
                                                </div>
                                                <h4 className='alt-features-title'>{elm.title}</h4>
                                                <div className='alt-features-descr'>{elm.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                    

                                    
                                </div>
                               
                            </div>
                        </section> */}

                        <div className='container position-relative'>
                            <div className='row mb-80 mb-sm-60'>
                                <div className='col-md-8 col-lg-6'>
                                    <h2 className='section-title mb-0'>Our Proven 3-Step Approach</h2>
                                </div>
                                <div className='col-lg-6 pt-20 pt-md-30'>
                                    <p className='text-gray mb-0'>
                                        We deliver measurable operational improvements with a focused and practical methodology designed to drive
                                        efficiency and business success.
                                    </p>
                                </div>
                            </div>
                            {/* Steps Grid */}
                            <div className='row mt-n30'>
                                {/* Gradient Settings for SVG Icons */}
                                <svg className='visually-hidden' aria-hidden='true'>
                                    <linearGradient id='gradient-horizontal'>
                                        <stop offset='0%' stopColor='var(--color-primary-4)' />
                                        <stop offset='33%' stopColor='var(--color-primary-3)' />
                                        <stop offset='67%' stopColor='var(--color-primary-2)' />
                                        <stop offset='100%' stopColor='var(--color-primary-1)' />
                                    </linearGradient>
                                </svg>
                                {/* End Gradient Settings for SVG Icons */}
                                {/* Steps Item */}

                                {stepsItems6.map((item, index) => (
                                    <div
                                        key={index}
                                        className={"col-md-6 col-lg-4 d-flex align-items-stretch mt-30 wow fadeIn"}
                                        data-wow-duration={item.dataWowDuration}
                                        data-wow-delay={item.dataWowDelay}
                                    >
                                        <div className='features-2-item pt-sm-40 pb-sm-40'>
                                            <div className='features-2-label'>{item.label}</div>
                                            <div className='features-2-icon'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width={24}
                                                    height={24}
                                                    viewBox='0 0 24 24'
                                                    fill='currentColor'
                                                    aria-hidden='true'
                                                >
                                                    <path d={item.iconPath} />
                                                </svg>
                                            </div>
                                            <h4 className='features-2-title'>{item.title}</h4>
                                            <div className='features-2-descr'>{item.description}</div>
                                        </div>
                                    </div>
                                ))}
                                {/* End Steps Items */}
                            </div>
                            {/* End Steps Grid */}
                        </div>

                        <section className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}>
                            <div className='container position-relative'>
                                <div className='row'>
                                    <div className='col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30'>
                                        <div className=''>
                                            <div className='mt-30'>
                                                <Image
                                                    width={650}
                                                    height={550}
                                                    src='/assets/images/Business Process Management.jpg'
                                                    alt='Image Description'
                                                    className='wow scaleOutIn'
                                                    data-wow-duration='1.2s'
                                                    data-wow-offset={134}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-lg-5 d-flex align-items-center'>
                                        <div className='wow fadeInUp' data-wow-duration='1.2s' data-wow-offset={255}>
                                            <h2 className='section-title mb-50 mb-sm-20'>Why Partner with Us?</h2>
                                            <Faq5 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={`small-section ${dark ? "bg-dark-1 bg-gradient-light-1 light-content" : " bg-gradient-light-1"}`}>
                            <div className='container position-relative'>
                                <div className='row'>
                                    <div className='col-lg-10 offset-lg-1'>
                                        <div className='row'>
                                            <div className='col-md-8 text-center text-md-start mb-sm-20 d-md-flex'>
                                                <div className='flex-shrink-0 me-md-4 pe-md-1 mb-sm-20'>
                                                    <Image
                                                        src='/assets/images/demo-gradient/mibugo-icon.png'
                                                        width='90'
                                                        height='90'
                                                        alt='Image Description'
                                                    />
                                                </div>
                                                <div className='d-flex align-items-center pt-2 pt-md-0'>
                                                    <p className='section-descr-medium w-100 mb-0'>
                                                        Streamline your operations for success—schedule a consultation with Mibugo Consulting today!
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='col-md-4 text-center text-md-end pt-20 local-scroll'>
                                                {
                                                    <>
                                                        {" "}
                                                        <Link
                                                            href={`/contact ${dark ? "-dark" : ""}`}
                                                            className='btn btn-mod btn-medium btn-grad btn-round'
                                                            data-btn-animate='y'
                                                        >
                                                            <span className='btn-animate-y'>
                                                                <span className='btn-animate-y-1'>
                                                                    Contact us
                                                                    <i className='mi-arrow-right size-24 align-center' aria-hidden='true'></i>
                                                                </span>
                                                                <span className='btn-animate-y-2' aria-hidden='true'>
                                                                    Contact us
                                                                    <i className='mi-arrow-right size-24 align-center' aria-hidden='true'></i>
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    </>
                                                }
                                            </div>
                                        </div>
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
