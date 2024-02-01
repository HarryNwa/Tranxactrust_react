import React from "react";
import buyer from "../images/image 5.png"
import { Link } from "react-router-dom";

const Individuals = () => {
    return (
        <section class="forIndividuals">

            <div class="barrier1">
                <p>Unlocking boundless payment possibilities
                    <span class="span3">
                        <br/>
                        for consumers</span>
                </p>

                <p class="trust2">Whether you're paying to a social media vendor,
                    or investing in real estate, Tranxactrust offers simple tools for
                    smooth payments and protection from fraud.
                </p>
            </div>

            <div class="individauls">
                <img class="happy-buyer" src={buyer} alt="Happy buyer" />

                <div class="barrier1">
                    <p class="introHeader">Let's save the day from fraud, shall we? 
                    <br />
                        You<span class="span3"> get delivery</span> or <span class="span3">Reverse Payment</span>
                        when you pay into your vendor's Trustmonie escrow account.
                    </p>

                    <div class="ticker">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                            <path
                                d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                fill="#6B9BFC" />
                        </svg>
                        <p class="puncher">Full control over monies that already left your hands</p>
                    </div>

                    <div class="ticker">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                            <path
                                d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                fill="#6B9BFC" />
                        </svg>
                        <p class="puncher">Can reverse cash or crypto payouts</p>
                    </div>

                    <div class="ticker">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="10" fill="#EEF4FF" />
                            <path
                                d="M8.79995 15.9L4.59995 11.7L3.19995 13.1L8.79995 18.7L20.8 6.70005L19.4 5.30005L8.79995 15.9Z"
                                fill="#6B9BFC" />
                        </svg>
                        <p class="puncher">Send money to loved ones in seconds</p>
                    </div>

                    <Link to={'/trustmonie'}><button class="account3">Learn More
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.34788 8.75L7.29163 10.8062L13.9708 17.5L7.29163 24.1938L9.34788 26.25L18.0979 17.5L9.34788 8.75Z"
                                fill="#FCFCFD" />
                            <path
                                d="M18.9583 8.75L16.902 10.8062L23.5812 17.5L16.902 24.1938L18.9583 26.25L27.7083 17.5L18.9583 8.75Z"
                                fill="#FCFCFD" />
                        </svg>
                    </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}


export default Individuals;