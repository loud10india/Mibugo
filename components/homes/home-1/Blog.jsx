// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { blogs1 } from "@/data/blogs";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useRef } from "react";

// import "swiper/css"; // Import Swiper styles
// import "swiper/css/navigation"; // Import Swiper Navigation styles

// export default function Blog() {
//     const swiperRef = useRef(null);

//     return (
//         <div className='container mt-n50 position-relative'>
//             <Swiper
//                 ref={swiperRef}
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 breakpoints={{
//                     768: {
//                         slidesPerView: 2, // Medium screens: show 2 cards
//                     },
//                     1024: {
//                         slidesPerView: 3, // Large screens: show 3 cards
//                     },
//                 }}
//                 modules={[Navigation]}
//                 navigation={{
//                     prevEl: ".custom-prev",
//                     nextEl: ".custom-next",
//                 }}
//                 watchSlidesProgress
//                 resizeObserver
//                 className='team-carousel overflow-hidden position-static'
//             >
//                 {/* Blog Items */}
//                 {blogs1.slice(0, 5).map((elm, i) => (
//                     <SwiperSlide key={i} className='post-prev'>
//                         <div className='post-prev-container'>
//                             <div className='post-prev-img'>
//                                 <Link href={`/main-blog-single-sidebar-right/${elm.id}`}>
//                                     <Image width={650} height={412} src={elm.imgSrc} alt='Add Image Description' />
//                                 </Link>
//                             </div>
//                             <h4 className='post-prev-title'>
//                                 <Link href={`/main-blog-single-sidebar-right/${elm.id}`}>{elm.title}</Link>
//                             </h4>
//                             <div className='post-prev-text'>{elm.text}</div>
//                             <div className='post-prev-info clearfix'>
//                                 <div className='float-start'>
//                                     <a href='#'>{elm.authorName}</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>

//             {/* Navigation Buttons */}
//             <div className='custom-controls'>
//                 <div
//                     className='custom-prev flex items-center justify-center w-20 h-20 rounded-full  shadow-lg hover:bg-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-110'
//                     role='button'
//                     tabIndex='0'
//                     style={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "-20px",
//                         transform: "translateY(-50%)",
//                     }}
//                 >
//                     <span className='visually-hidden'>Previous Slide</span>
//                     <i className='mi-arrow-left text-black text-xl' aria-hidden='true'></i>
//                 </div>
//                 <div
//                     className='custom-next flex items-center justify-center w-12 h-12 rounded-full  shadow-lg hover:bg-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-110'
//                     role='button'
//                     tabIndex='0'
//                     style={{
//                         position: "absolute",
//                         top: "50%",
//                         right: "-20px",
//                         transform: "translateY(-50%)",
//                     }}
//                 >
//                     <span className='visually-hidden'>Next Slide</span>
//                     <i className='mi-arrow-right text-black text-xl' aria-hidden='true'></i>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { blogs1 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";

import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper Navigation styles

export default function Blog() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;
            swiperInstance.navigation.update();
        }
    }, []);

    return (
        <div className='container mt-n50 position-relative'>
            <Swiper
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 2, // Medium screens: show 2 cards
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
                        <div className='post-prev-container !border-2 !border-gray-300 !rounded-lg !overflow-hidden'>
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
                    className='custom-prev flex items-center justify-center !w-20 !h-20 !rounded-full !bg-orange-500 !text-white !shadow-lg hover:!bg-orange-400 hover:!shadow-xl transition-all duration-300 transform hover:!scale-110'
                    role='button'
                    tabIndex='0'
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "-20px",
                        transform: "translateY(-50%)",
                    }}
                >
                    <span className='visually-hidden'>Previous Slide</span>
                    <i className='mi-arrow-left !text-white !text-xl' aria-hidden='true'></i>
                </div>
                <div
                    className='custom-next flex items-center justify-center !w-12 !h-12 !rounded-full !bg-orange-500 !text-white !shadow-lg hover:!bg-orange-400 hover:!shadow-xl transition-all duration-300 transform hover:!scale-110'
                    role='button'
                    tabIndex='0'
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "-20px",
                        transform: "translateY(-50%)",
                    }}
                >
                    <span className='visually-hidden'>Next Slide</span>
                    <i className='mi-arrow-right !text-white !text-xl' aria-hidden='true'></i>
                </div>
            </div>
        </div>
    );
}
