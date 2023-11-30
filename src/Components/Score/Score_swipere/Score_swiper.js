import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Score_swiper.css';
//import ielts

import ielts from "../../../Images/IELTS.jpg"
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="ielst_score">
                        <div className="ielts_left">
                            <img src={ielts} alt="" />
                        </div>
                        <div className="ielts_right">
                            <div className="overveal">
                                <div className="overveal_title">
                                    <h2>overall</h2>
                                </div>
                                <div className="ball"><h1>7.0</h1></div>
                            </div>

                            <div className="exam">
                                <div className="">
                                    <h2>Listening:</h2>
                                </div>
                                <div className="balls">7.5</div>
                            </div>

                            <div className="exam">
                                <div className="">
                                    <h2>Reading:</h2>
                                </div>
                                <div className="balls">7.0</div>
                            </div>

                            <div className="exam">
                                <div className="">
                                    <h2>writing:</h2>
                                </div>
                                <div className="balls">6.0</div>
                            </div>

                            <div className="exam">
                                <div className="">
                                    <h2>Speaking:</h2>
                                </div>
                                <div className="balls">7.5</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
