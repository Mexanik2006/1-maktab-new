import React from 'react';
import "./Score.css"
import Score_swiper from "./Score_swipere/ielts/Score_swiper"
import { Link, Outlet } from 'react-router-dom';

function Score() {
    return (
        <div className='Score'>
            <div className="Score_title">
                <h1>Natijalarimmiz</h1>
            </div>
            <div className="Score_open">
                <div className="Score_left">
                    <div className="sertificate">
                        <h3>
                            <Link to={"/Score/Ielts"}>IELTS</Link>
                        </h3>
                    </div>
                    <div className="sertificate">
                        <h3>
                            <Link to={"/Score1/Dtm"}>DTM</Link>
                        </h3>
                    </div>
                    <div className="sertificate">
                        <h3>CEFR</h3>
                    </div>
                    <div className="sertificate">
                        <h3>OLIY TA'LIM</h3>
                    </div>
                    <div className="sertificate">
                        <h3>CHEMPIONLAR</h3>
                    </div>
                    <div className="sertificate">
                        <h3>CHEMPIONLAR</h3>
                    </div>
                    <div className="sertificate">
                        <h3>CHEMPIONLAR</h3>
                    </div>
                    <div className="sertificate">
                        <h3>CHEMPIONLAR</h3>
                    </div>
                </div>
                <div className="Score_right">
                    <Score_swiper />
                </div>
                {/* <Outlet /> */}
            </div>
        </div>
    )
}

export default Score