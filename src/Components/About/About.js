import React from 'react';
import "./About.css"
import About_swiper from "./About_swiper/About_swiper"

function About() {
    return (
        <div className='About'>
            <div className="About_title">
                <h1>Biz haqimizda</h1>
            </div>
            <div className="About_flex">
                <div className="About_left"></div>
                <div className="About_right"><About_swiper /></div>
            </div>
        </div>
    )
}

export default About