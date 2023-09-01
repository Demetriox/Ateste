import React, { Component } from 'react';
import footerStyle from './SharedStyle/Nav.module.css';
import instagram from '../../Assets/Icons/instagram.svg';
import facebook from '../../Assets/Icons/facebook-1.svg';
import wa from '../../Assets/Icons/whatsapp.svg';
import { HiMail } from "react-icons/hi";

export default class Footer extends Component {



    render() {
        let iconStyles = { color: "white", fontSize: "1.5em" }
        return (

                <div className={footerStyle.footerStyle}>

                    <div></div>
                    <div className={footerStyle.footerDivicion}>


                        <div className={footerStyle.sep}>
                            <div>
                                <div> Ing. Jesús Karim Ortiz García,<br /> Cofundador.</div>
                                <div><img src={wa} className={footerStyle.wa}></img>+52 662 201 8550</div>
                            </div>
                            <div>
                                <div> Dr. Jesús Jaime Martínez Beilis,<br /> Cofundador.</div>
                                <div><img src={wa} className={footerStyle.wa}></img> +52 662 104 7835 </div>

                            </div>

                        </div>



                    </div>

                <div className={footerStyle.socialNetwork}>
                    <div className={footerStyle.iconMail}>
                        <div>
                            <HiMail style={iconStyles} /> atrevetehmo@gmail.com</div>
                    </div>
                    <div>Hermosillo , Sonora , Mexico </div>


                        <div><a href="https://instagram.com/fundacionatrevete?utm_medium=copy_link"><img className={footerStyle.iconStyle} src={instagram}></img> </a> <a href="https://www.facebook.com/fundacionatrevet"><img className={footerStyle.iconStyle} src={facebook}></img></a></div></div>

            </div>
        )
    }
}
