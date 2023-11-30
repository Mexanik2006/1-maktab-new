import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';

import './About_swiper.css';

// import required modules
import { Autoplay, Scrollbar, EffectFade } from 'swiper/modules';

//Images import
import school1 from "../../../Images/1.jpg"
import school2 from "../../../Images/2.jpg"
import school3 from "../../../Images/3.jpg"
import school4 from "../../../Images/4.jpg"
import school5 from "../../../Images/5.jpg"
import school6 from "../../../Images/6.jpg"
import school7 from "../../../Images/7.jpg"
import school8 from "../../../Images/8.jpg"
import school9 from "../../../Images/9.jpg"

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
                spaceBetween={30}
                effect={'fade'}
                // centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                scrollbar={{
                    hide: true,
                }}
                // navigation={true}

                modules={[Autoplay, Scrollbar, EffectFade]}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide><img src={school1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={school2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={school3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={school4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={school5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={school6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={school7} alt="" /></SwiperSlide>
                <SwiperSlide><img src={school8} alt="" /></SwiperSlide>
                <SwiperSlide><img src={school9} alt="" /></SwiperSlide>

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
