"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { blogs1 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper Navigation styles

export default function Blog() {
    const swiperRef = useRef(null);

    return (
        <div className='container mt-n50 position-relative'>
            <Swiper
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 1, // Medium screens: show 2 cards
                    },
                    1024: {
                        slidesPerView: 3, // Large screens: show 3 cards
                    },
                }}
                modules={[Navigation]}
                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
                watchSlidesProgress
                resizeObserver
                className='team-carousel overflow-hidden position-static'
            >
                {/* Blog Items */}
                {blogs1.slice(0, 5).map((elm, i) => (
                    <SwiperSlide key={i} className='post-prev'>
                        <div className='post-prev-container border rounded-lg overflow-hidden shadow-none'>
                            <div className='post-prev-img'>
                                <Link href={`${elm.href}`}>
                                    <Image width={650} height={412} src={elm.imgSrc} alt='Add Image Description' />
                                </Link>
                            </div>
                            <h4 className='post-prev-title'>
                                <Link href={`${elm.href}`}>{elm.title}</Link>
                            </h4>
                            <div className='post-prev-text'>{elm.text}</div>
                            <div className='post-prev-info clearfix'>
                                <div className='float-start'>
                                    <a className='text-blue-500' href={elm.href}>
                                        {elm.button}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className='owl-controls clickable  custom-controls'>
                    <div className='owl-buttons custom-prev'>
                        <div className='owl-prev snbp11' role='button' tabIndex='0'>
                            <span className='visually-hidden custom-prev'>Previous Slide</span>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='18px'
                                height='13px'
                                viewBox='0 0 18 13'
                                fill='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M17.995,6.998 L3.591,6.998 C5.630,8.221 7.000,10.447 7.000,12.998 L6.000,12.998 C6.000,9.684 3.313,6.998 -0.001,6.998 L-0.015,6.998 L-0.015,5.998 L-0.001,5.998 C3.313,5.998 6.000,3.312 6.000,-0.002 L7.000,-0.002 C7.000,2.549 5.630,4.775 3.591,5.998 L17.995,5.998 L17.995,6.998 Z'
                                ></path>
                            </svg>
                        </div>
                        <div className='owl-next snbn11 custom-next' role='button' tabIndex='0'>
                            <span className='visually-hidden custom-next'>Next Slide</span>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='18px'
                                height='13px'
                                viewBox='0 0 18 13'
                                fill='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M18.000,6.998 C14.687,6.998 12.000,9.684 12.000,12.998 L11.000,12.998 C11.000,10.447 12.370,8.221 14.409,6.998 L0.005,6.998 L0.005,5.998 L14.409,5.998 C12.370,4.775 11.000,2.549 11.000,-0.002 L12.000,-0.002 C12.000,3.312 14.687,5.998 18.000,5.998 L18.015,5.998 L18.015,6.998 L18.000,6.998 Z'
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </Swiper>
        </div>
    );
}
