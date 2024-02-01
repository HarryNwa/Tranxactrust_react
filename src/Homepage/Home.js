import React from "react";
import { Link } from "react-router-dom";
import gif from "../images/mvp2.gif";
import Signup from "../Menu/Signup";
import { useNavigate } from "react-router-dom";
import Brands from "./Brands";
import Products from "./Products";
import Services from "./Services";
import Delivery from "./Delivery";
import Individuals from "./Individuals";
import Choose from "./Choose";
import GetStarted from "./GetStarted";
import Footer from "./Footer";
import Login from "../Menu/Login";

const Home = () => {
    const navigate = useNavigate();

    const home = () => {
        navigate('/home');
    };
    const signup = () => {
        navigate('/signup');
    };

    return (
        <div>
            <div class="intro-wrapper">
                <section class="welcome">
                    <div class="unlock">

                        <div class="barrier">
                            <span class="span">Unlocking barriers </span>
                            for all payments
                        </div>

                        <p class="trust">Accept fiat and crypto payments from anywhere.
                            Pay vendors with a fiat or crypto account. Retain control over payouts.
                            Never let trust cost you the deal.
                        </p>

                        <ul>
                            <li class="button">
                                <Link to={'/signup'} >
                                    <button class="account">Create a free Account</button>
                                </Link>
                                <Link to={'/signup'} >
                                    <div className="contact" >Contact Sales
                                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z" fill="#068bf7" />
                                            <path d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z" fill="#068bf7" />
                                        </svg></div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div class="gif">

                        <img src={gif} class="img-globe" alt="Cinque Terre" />

                    </div>
                </section>
            </div>
          
            <div>
                <Brands />
            </div>
            <div>
                <Products />
            </div>
            <div>
                <Services />
            </div>
            <div>
                <Delivery />
            </div>
            <div>
                <Individuals />
            </div>
            <div>
                <Choose />
            </div>
            <div>
                <GetStarted />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );

};

export default Home;