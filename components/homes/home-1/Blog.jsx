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
                                <Link href={`/main-blog-single-sidebar-right/${elm.id}`}>
                                    <Image width={650} height={412} src={elm.imgSrc} alt='Add Image Description' />
                                </Link>
                            </div>
                            <h4 className='post-prev-title'>
                                <Link href={`/main-blog-single-sidebar-right/${elm.id}`}>{elm.title}</Link>
                            </h4>
                            <div className='post-prev-text'>{elm.text}</div>
                            <div className='post-prev-info clearfix'>
                                <div className='float-start'>
                                    <a href='#'>{elm.authorName}</a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className='custom-controls'>
                <div
                    className='custom-prev flex items-center justify-center w-20 h-20 rounded-full hover:bg-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-110'
                    role='button'
                    tabIndex='0'
                    style={{
                        position: "absolute",
                        backgroundColor: "orange",
                        text: "white",
                        borderRadius: "50%",
                        height: "45px",
                        width: "45px",
                        top: "50%",
                        left: "-2px",
                        transform: "translateY(-50%)",
                        zIndex: "1",
                    }}
                >
                    <span className='visually-hidden'>Previous Slide</span>
                    <i
                        className='mi-arrow-left text-white text-xl'
                        style={{ fontSize: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}
                        aria-hidden='true'
                    ></i>
                </div>

                <div
                    className='custom-next flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-110'
                    role='button'
                    tabIndex='0'
                    style={{
                        position: "absolute",
                        backgroundColor: "orange",
                        text: "white",
                        borderRadius: "50%",
                        height: "45px",
                        width: "45px",
                        top: "50%",
                        right: "-2px",
                        transform: "translateY(-50%)",
                        zIndex: "1",
                    }}
                >
                    <span className='visually-hidden'>Next Slide</span>
                    <i
                        className='mi-arrow-right text-white text-2xl'
                        style={{ fontSize: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}
                        aria-hidden='true'
                    ></i>
                </div>
            </div>
        </div>
    );
}
