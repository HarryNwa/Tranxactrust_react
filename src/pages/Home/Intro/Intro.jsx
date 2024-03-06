import React from "react";
import { Link } from "react-router-dom";
import gif from "../../../images/mvp2.gif";
import Signup from "../../Signup/Signup";
import { useNavigate } from "react-router-dom";
import Brands from "../Brands/Brands";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Delivery from "../Delivery/Delivery";
import Individuals from "../Individual/Individuals";
import Choose from "../Choose/Choose";
import GetStarted from "../GetStarted/GetStarted";
import Footer from "../../../Components/Footer/Footer";
import Login from "../../Login/Login";
import style from "./Intro.module.css"

const Intro = () => {
    const navigate = useNavigate();

    const home = () => {
        navigate('/home');
    };
    const signup = () => {
        navigate('/signup');
    };

    return (
        <section className={style.welcome}>
            <div className={style.unlock}>
                {/* <div className={style.barrier}>
                            <span className={style.span}>Win customer trust, </span>
                            fuel your growth
                        </div> */}

                <div className={style.barrier}>
                    <span className={style.span}>Unlocking barriers </span>
                    for all payments
                </div>

                <p className={style.trust}>Accept payments from anywhere.
                    Pay vendors with a direct or escrow account. Retain control over payouts.
                    Never let trust cost you the deal.
                </p>
                {/* <p className={style.trust}>Accept fiat and crypto payments from anywhere.
                    Pay vendors with a fiat or crypto account. Retain control over payouts.
                    Never let trust cost you the deal.
                </p> */}

                <ul>
                    <li className={style.button}>
                        <Link to={'/signup'} >
                            <button className={style.account}>Create a free account</button>
                        </Link>
                        <Link to={'/signup'} >
                            <div className={style.contact} >Contact Sales
                                <svg className={style.contactSvg} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#068bf7" />
                                    <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#068bf7" />
                                </svg>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={style.gif}>

                <img src={gif} className={style.img} alt="Cinque Terre" />

            </div>
        </section>
    );

};

export default Intro;