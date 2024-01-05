import React, { useEffect, useRef, useState } from 'react';
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
import DownloadImage from "../../../firebase/DownloadImage"
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { imageDb } from '../../../firebase/Config';

export default function App() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const [imgUrl, setImgUrl] = useState([])
    useEffect(() => {
        listAll(ref(imageDb, "files")).then(imgs => {
            console.log(imgs)
            imgs.items.forEach(val => {
                getDownloadURL(val).then(url => {
                    setImgUrl(data => [...data, url])
                })
            })
        })
    }, [])
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



                <div>
                    {
                        imgUrl.map(dataVal => <div>
                            <SwiperSlide>
                                <img src={dataVal} />
                            </SwiperSlide>
                        </div>)
                    }
                </div>


                <div className="Autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}
