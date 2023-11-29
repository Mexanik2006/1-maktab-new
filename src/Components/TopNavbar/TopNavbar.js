import React from 'react'
import "./TopNavbar.css"
import logotip from "../../Logotip/logo.jpg"

function TopNavbar() {
    return (
        <div className="Header">
            <div className="logotip">
                <img src={logotip} alt="" />
            </div>
            <div className="phone">
                <p>Call-markaz: <span>+998-00-000-00-00</span></p>
            </div>
        </div>
    )
}

export default TopNavbar