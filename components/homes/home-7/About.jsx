import React from "react";
import Image from "next/image";
export default function About() {
    return (
        <>
            <div className='container position-relative'>
                <div className='row'>
                    <div className='col-lg-8 offset-lg-2 text-center'>
                        <div className='wow fadeInUp'>
                            <h2 className='section-caption-gradient mb-20 mb-xs-10'>Mibugo Consulting</h2>
                            <div className='section-line-gradient mx-auto mb-20' />
                            <h3 className='section-title mb-40 mb-sm-30'>Your Strategic Success Partners</h3>
                        </div>
                        <div className='row text-start text-gray mb-80 mb-sm-60'>
                            <div className='col-md-6 mb-sm-20 wow linesAnimInLong' data-splitting='lines'>
                                At Mibugo Consulting, we specialize in empowering SMEs and startups throughout their growth journey. Our expertise
                                covers business strategy, marketing, HR, finance, and operations—offering tailored solutions to meet your unique
                                challenges. We are committed to helping you navigate complexities and achieve sustainable success.
                            </div>
                            <div className='col-md-6 wow linesAnimInLong' data-splitting='lines'>
                                Our dedicated team works closely with you to understand your goals, providing strategic guidance and actionable
                                financial insights. We focus on delivering real results, helping you optimize processes and strengthen your financial
                                stability. Together, we’ll take your business to new heights.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Images Composition */}
            <div className='possition-relaive'>
                {/* Decorative Line */}
                <div className='bg-line-1 z-index-1'>
                    <Image src='/assets/images/demo-gradient/decoration-2.png' width={1920} height={616} alt='' />
                </div>
                {/* End Decorative Line */}
                <div className='container position-relative'>
                    <div className='row'>
                        <div className='col-lg-10 offset-lg-1'>
                            <div className='composition-7'>
                                <div className='composition-7-image-1'>
                                    <div className='composition-7-border' />
                                    <div className='composition-7-inner'>
                                        <Image src='/assets/images/demo-gradient/1.jpg' alt='Image Description' width={238} height={296} />
                                    </div>
                                </div>
                                <div className='composition-7-image-2'>
                                    <div className='composition-7-border' />
                                    <div className='composition-7-inner'>
                                        <Image src='/assets/images/demo-gradient/2.jpg' alt='Image Description' width={398} height={482} />
                                    </div>
                                </div>
                                <div className='composition-7-image-3'>
                                    <div className='composition-7-border' />
                                    <div className='composition-7-inner'>
                                        <Image src='/assets/images/demo-gradient/3.jpg' alt='Image Description' width={460} height={308} />
                                    </div>
                                </div>
                                <div className='composition-7-image-4'>
                                    <div className='composition-7-border' />
                                    <div className='composition-7-inner'>
                                        <Image src='/assets/images/demo-gradient/4.jpg' alt='Image Description' width={368} height={456} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
