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
import tranxact from "../images/Tranxact only.png"
import Home from "../Homepage/Home";
import { MdOutlineMail } from "react-icons/md";
import { BsKey } from "react-icons/bs";


const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const dropCountries = () => {
        const drop = document.getElementById("dropdown");
        drop.click();
        drop.style.display = "flex"

    }


    return (
        // <>
        <div>

            <div className="login-box">
                <div className="login-option">
                    <h2 className="login-option1">Personal</h2>
                    <h2 className="login-option2">Business</h2>
                    <h2 className="login-option3">Logistics</h2>

                </div>

                <div className="email">

                    <div className="first-section-email">
                        <img className="login-logo" src={login} height={70} />
                        <div className="globe">
                            <img className="globe-svg" src={globe} />
                            <select id="dropdown" value={selectedOption} onChange={handleSelectChange} className="country_drop">
                                <option value="">Country...</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Tanzania">Tanzania</option>
                            </select>
                        </div>
                    </div>


                    <div className="email-con" >
                        Email address
                        <div className="email-collector">
                            <MdOutlineMail className="email-image" />
                            <input type="text" id="email1" className="collector" name="email" placeholder="Email address" required />
                        </div>


                        <div className="password-con1">
                            Password
                            <div className="password-con">
                                <img className="key-svg" src={key} />
                                <input className="collector" type={passwordVisible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                <img className="eye-svg" src={passwordVisible ? (eye) : (close)} alt="Toggle Password Visibility" onClick={togglePasswordVisibility} />

                            </div>

                        </div>
                        <button className="login-btn" ><h2>Log In</h2></button>
                        <div className="question">New to Tranxactrust?
                            <Link to={'/signup'}>Sign Up </Link>
                        
                        </div>
                        <Link to={'/'}>Forgot your password?</Link>
                    </div>
                </div>

            </div>
        </div>
            );

};

            export default Login;