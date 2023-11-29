import React from 'react'
import "./Footer.css"
import logotip from "../../Logotip/logo.jpg"
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { RiTelegramFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Footer() {
    return (
        <div className='Footer'>
            <div className="Footer_top">
                <div className="footer_left">
                    <div className="footer_logo">
                        <img src={logotip} alt="" />
                    </div>
                    <div className="footer_call">
                        <div className="info">
                            <IoMdCall />
                            <a href="a">+998 00 000-00-00</a>
                        </div>
                        <div className="info">
                            <IoIosMail />
                            <a href="a">1maktab@gmail.com</a>
                        </div>
                        <div className="footer_media">
                            <div className="telegram">
                                <a href="telegram" title='Bizni telegramda tomosha qiling'>
                                    <RiTelegramFill />
                                </a>
                            </div>
                            <div className="instagram" title='Bizni instagramda tomosha qiling'>
                                <a href="instagram">
                                    <FaInstagramSquare />
                                </a>
                            </div>
                            <div className="facebook" title='Bizni facebookda tomosha qiling'>
                                <a href="facebook">
                                    <FaFacebook />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_center">
                    <div className="footer_link"><a href="a">Biz haqimmizda</a></div>
                    <div className="footer_link"><a href="a">O'qituvchilarimmiz</a></div>
                    <div className="footer_link"><a href="a">Natijalarimmiz</a></div>
                    <div className="footer_link"><a href="a">Biz bilan bog'lanish</a></div>
                </div>

                <div className="footer_center">
                    <div className="footer_link"><a href="a">Yangiliklarimmiz</a></div>
                    <div className="footer_link"><a href="a">Ro'yxatdan otish</a></div>
                    <div className="footer_link"><a href="a">Kirish</a></div>
                </div>
            </div>
            <div className="Footer_bottom">
                <p>Barcha huquqlar himoyalangan © 2023</p>
            </div>
        </div>
    )
}

export default Footer