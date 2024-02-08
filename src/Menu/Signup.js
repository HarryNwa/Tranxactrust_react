import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import login from "../images/Logo..Tranxact.png";
import email from "../images/ic_outline-email.svg";
import key from "../images/ic_round-key.svg";
import eye from "../images/ph_eye.svg";
import globe from "../images/jam_world.svg";
import arrow from "../images/keyboard_arrow_down.png";
import close from "../images/eye-close-svgrepo-com.svg"
import tranxact from "../images/Tranxact on.png"
import Home from "../Homepage/Home";
import { MdOutlineMail } from "react-icons/md";
import { BsKey } from "react-icons/bs";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);

    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));

    }

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{11,13}$/;
        return phoneNumberPattern.test(phoneNumber);
    }


    const dropCountries = () => {
        const drop = document.getElementById("dropdown");
        drop.click();
        drop.style.display = "flex"

    }

    return (
        <div>
            <Link to={'/'}>
                <img className="signup-logo" src={tranxact} height={70} />
            </Link>

            <div className="signup-box">
                <div className="login-option">
                    <h2 className="login-option1">Personal</h2>
                    <h2 className="login-option2">Business</h2>
                    <h2 className="login-option3">Logistics</h2>
                    <h2 className="login-option3">Developers</h2>
                </div>

                <div className="email">
                    <div className="email-con">
                        <div className="globe">
                            Country
                            <img className="globe-svg" src={globe} />
                        </div>

                        <select id="dropdown" value={selectedOption} onChange={handleSelectChange} className="country_drop">
                            <option value="">Country...</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Tanzania">Tanzania</option>
                        </select>
                    </div>

                    <div className="email-con" >
                        Business Name
                        <div className="email-collector">
                            <input type="text" className="collector" name="email" placeholder="Business name" required />
                        </div>
                    </div>


                    <div className="phone-box">
                        <label>
                            Phone Number
                            <PhoneInput
                                country={'ng'}
                                className="collector"
                                name="email"
                                placeholder="Phone number"
                                inputProps={{
                                    required: true,
                                }}
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                            />
                        </label>
                        {!valid && <p className="warning">Please enter a valid phone number.</p>}
                    </div>

                    <div className="email-con" >
                        Email address
                        <div className="email-collector">
                            <MdOutlineMail className="email-image" />
                            <input type="text" id="email1" className="collector" name="email" placeholder="Email address" required />
                        </div>
                    </div>


                    <div className="password-con1">
                        Password
                        <div className="password-con">
                            <img className="key-svg" src={key} />
                            <input className="collector" type={passwordVisible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            <img className="eye-svg" src={passwordVisible ? (close) : (eye)} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />
                        </div>
                    </div>
                    <div className="question">Already have an account?
                        <Link to={'/login'}><b>Log In </b></Link>

                    </div>
                    <button className="signup-btn" ><h2>Sign Up</h2></button>

                    <p className="agreement">By clicking the 
                    “Create my account” button, you agree to Tranxactrust’s 
                    <Link to={'/'} className="policy" > terms of acceptable use and 
                    Data Processing Agreement. </Link>
                    </p>
                    <p className="agreement">To learn more about how Paystack collects, 
                        uses and discloses your personal data, 
                        please read our <Link to={'/'} className="policy" >Privacy Policy.</Link></p>
                </div>
            </div>
            <Link to={'/signup'} >
                <p className="support">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="40" height="40">
                        <circle cx="50" cy="50" r="40" fill="#173c5a" />
                        <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle" fontSize="40" fill="white">?</text>
                    </svg>
                    Support</p>
            </Link>

        </div>
    );

}

export default Signup;