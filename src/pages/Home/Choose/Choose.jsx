import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/image 2.png";
import style from "./Choose.module.css"



const Choose = () => {
    return (
        <section className="container mx-auto h-full w-screen text-center flex flex-col">
            {/* <div> */}
                <div className={style.choose}>Why choose <span className={style.span2}>
                    Tranxactrust</span> for your business?
                </div>
                <div className={style.row4}>

                    <div>
                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                    fill="#6B9BFC" />
                            </svg>

                            <p className={style.puncher}>
                                Cheaper rate for fiat and crypto conversion for your business profit.
                            </p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path
                                    d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                    fill="#6B9BFC" />
                            </svg>
                            <p className={style.puncher}>Payment and delivery are synchronized for
                                express delivery process.
                            </p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path
                                    d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                    fill="#6B9BFC" />
                            </svg>
                            <p className={style.puncher}>Reverse your payment for any confirmed failed delivery.</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path
                                    d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                    fill="#6B9BFC" />
                            </svg>
                            <p className={style.puncher}>Instant transfer of verified payments from your escrow
                                account to your business account. No unnecessary delay or protocol.</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path
                                    d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                    fill="#6B9BFC" />
                            </svg>
                            <p className={style.puncher}>Track and monitor your payment.</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path
                                    d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                    fill="#6B9BFC" />
                            </svg>
                            <p className={style.puncher}>Instant Business Verification.</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path
                                    d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                    fill="#6B9BFC" />
                            </svg>
                            <p className={style.puncher}>One-time payment link.</p>
                        </div>

                        <div className={style.ticker}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                                <path
                                    d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                    fill="#6B9BFC" />
                            </svg>
                            <p className={style.puncher}>Fast and secure payment.</p>
                        </div>
                        <ul>
                            <li className={style.button}>
                                <Link to={'/trustmonie'} >
                                    <button className={style.account}>Sign Up Now</button>
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

                    <img className={style.img} src={image} alt="image" />
                </div>
            {/* </div> */}
        </section>
    );
}

export default Choose;
