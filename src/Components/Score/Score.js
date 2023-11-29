import React from 'react';
import "./Score.css"

function Score() {
    return (
        <div className='Score'>
            <div className="Score_title">
                <h1>Natijalarimmiz</h1>
            </div>
            <div className="Score_left">
                <div className="sertificate">
                    <h3>IELTS</h3>
                </div>
                <div className="sertificate">
                    <h3>DTM</h3>
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
            </div>
        </div>
    )
}

export default Score