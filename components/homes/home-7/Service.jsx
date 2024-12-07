import React from "react";
import Image from "next/image";
import Blog from "@/components/homes/home-1/Blog";
import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";

export default function Service() {
    return (
        <div className='container position-relative'>
            <div className='row'>
                <div className='col-lg-8 offset-lg-2 text-center'>
                    <h2 className='section-caption-gradient mb-20 mb-xs-10'>Our Services</h2>
                    <div className='section-line-gradient mx-auto mb-20' />
                    <h3 className='section-title mb-40 mb-sm-30'>
                        At Mibugo Consulting, we provide specialized consulting services for SMEs and startups, focusing on growth and operational
                        excellence.{" "}
                    </h3>
                    <p className='text-gray mb-80 mb-sm-60'>
                        Our expertise covers business strategy, marketing, HR, and financial management. With a tailored approach, we aim to drive
                        measurable results, helping your business thrive in a competitive market. Discover how our comprehensive solutions can
                        transform your business success.
                    </p>
                </div>
            </div>
            <div className='row wow fadeInUp'>
                <section id='blog'>
                    <div className='container position-relative' style={{ marginTop: "50px" }}>
                        <Blog />
                    </div>
                </section>
            </div>
        </div>
    );
}
