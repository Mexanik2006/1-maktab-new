import React from 'react'
import "./TopNavbar.css"
import logotip from "../../Logotip/logo.jpg"
import { AiOutlineLogin } from "react-icons/ai";

function TopNavbar() {
    return (
        <div className="Header">
            <div className="header_call">
                <div className="logotip">
                    <img src={logotip} alt="" />
                </div>
                <div className="phone">
                    <p>Call-markaz: <span>+998-00-000-00-00</span></p>
                </div>
            </div>


            <div className="login_btn">
                <a href="/login">
                    <div className="login_icon">
                        <AiOutlineLogin />
                    </div>
                    <span>Login</span>
                </a>
            </div>
        </div>
    )
}

export default TopNavbar