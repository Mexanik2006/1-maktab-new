import React, { useEffect, useState } from 'react';
import "./About.css"
import About_swiper from "./About_swiper/About_swiper"
import axios from "../../Api/Api"

function About() {
    const [about, setAbout] = useState([])
    useEffect(() => {
        const getApi = async () => {
            await axios.get("/about/get")
                .then(res => setAbout(res.data))
                .catch(err => console.log(err))
        }
        getApi()

    }, [])
    console.log(about.name)
    return (
        <div className='About'>
            <div className="About_title">
                <h1>Biz haqimizda</h1>
            </div>
            <div className="About_flex">
                <div className="About_left">
                    {
                        about.map((about, index) => (
                            <div className="" key={index}>
                                <span>{about.name}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="About_right"><About_swiper /></div>
            </div>

            <div className="About_flex_media">
                <div className="About_left_media"></div>
                <div className="About_right_media"><About_swiper /></div>
            </div>
        </div>
    )
}

export default About