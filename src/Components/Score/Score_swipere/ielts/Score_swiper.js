import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Score_swiper.css';
//import ielts

import ielts from "../../../../Images/IELTS.jpg"
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from "../../../../Api/Api"
import { Outlet } from 'react-router-dom';
export default function App() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    const [score, setScore] = useState([])
    useEffect(() => {
        const getApi = async () => {
            await axios.get("/score/get")
                .then(res => setScore(res.data))
                .catch(err => console.log(err))
        }
        getApi()

    }, [])
    console.log(score.overall)
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
                {
                    score.map((score, index) => (
                        <SwiperSlide>

                            <div className="ielst_score" key={index}>
                                <div className="ielts_left">
                                    <img src={ielts} alt="" />
                                </div>
                                <div className="ielts_right">
                                    <div className="overveal">
                                        <div className="overveal_title">
                                            <h2>overall</h2>
                                        </div>
                                        <div className="ball"><h1>{score.overall}</h1></div>
                                    </div>

                                    <div className="exam">
                                        <div className="">
                                            <h2>Listening:</h2>
                                        </div>
                                        <div className="balls">{score.listening}</div>
                                    </div>

                                    <div className="exam">
                                        <div className="">
                                            <h2>Reading:</h2>
                                        </div>
                                        <div className="balls">{score.reading}</div>
                                    </div>

                                    <div className="exam">
                                        <div className="">
                                            <h2>writing:</h2>
                                        </div>
                                        <div className="balls">{score.writing}</div>
                                    </div>

                                    <div className="exam">
                                        <div className="">
                                            <h2>Speaking:</h2>
                                        </div>
                                        <div className="balls">{score.speaking}</div>
                                    </div>
                                </div>
                            </div>

                        </SwiperSlide>

                    ))
                }
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20" className='circle'></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
                <Outlet />

            </Swiper>
        </>
    );
}
