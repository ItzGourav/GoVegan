import React from 'react';
import { useState } from 'react';
import { Link } from "react-scroll"
import "../Css/Navbar.css"

const Navbaar = () => {
    const [cls, setCls] = useState(false);
    const changeBurger = () => {
        setCls(!cls)
    }

    let toggleCls = cls ? ' active' : '';

    return (
        <>
            <div className={`navbar${toggleCls}`}>
                <div className="brand">
                    <Link to="Main"><img src="VeGanBG.png" alt="logo" /></Link>
                </div>
                <div className="navbar_links">
                    <ul className="navbar_list">
                        <li><Link className='links' smooth={true} duration={100} to="Benefits"> Benefits </Link></li>
                        <li><Link className='links'
                        smooth={true} duration={100} to="Environment"> Environment </Link></li>
                        <li><Link className='links'
                        smooth={true} duration={100} to="Dishes"> Dishes </Link></li>
                        <li><Link className='links'
                        smooth={true} duration={100} to="ContactUs"> ContactUS </Link></li>
                    </ul>
                </div>
                <div onClick={changeBurger} className="hamburger">

                    {cls ? <ion-icon style={{display:'none'}} name="menu-outline" /> : <ion-icon style={{display:'block',color:"white"}} name="menu-outline"/>}
                    
                    {/* <ion-icon name="menu-outline" className="hamburger_btn"></ion-icon> */}
                    { cls ? <ion-icon name="close-outline" style={{display:'block'}}/> : <ion-icon name="close-outline" style={{display:'none'}}/>}
                </div>
            </div>
        </>
    )
}

export default Navbaar
