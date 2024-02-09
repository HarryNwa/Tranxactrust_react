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
import Support from "./Support";




const Signup = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
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

    const [userData, setUserData] = useState({
        nationality: '',
        businessName: '',
        userName: `${'', '', ''}`,
        phoneNumber: '',
        email: '',
        password: ''
    });


    // const handleUserChange = (event) => {
    //      setUserData({ ...userData, email: e.target.value };

    // };

    const createUser = async (e) => {
        console.log("a click event happened");
        e.preventDefault();
        try {

            // const apiUrl = `${process.env.REACT_API_TRANXACTRUST}api/v1/create`;

            const url = `http://localhost:9001/api/users`;

            await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then(res => res.text())
            .then(resObject => {
                console.log(resObject);
            })

            setUserData({
                nationality: '',
                businessName: '',
                userName: `${'', '', ''}`,
                phoneNumber: '',
                emai: '',
                password: ''
            });
        }catch(error){
            console.error('Account not created:', error.message);
        }
    };

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

                        <select id="dropdown" value={userData.nationality}
                            onChange={(e) => setUserData({ ...userData, nationality: e.target.value })}
                            className="country_drop">
                            <option value="">Country...</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Tanzania">Tanzania</option>
                        </select>
                    </div>

                    <div className="email-con" >
                        Business Name
                        <div className="email-collector">
                            <input 
                            type="text" 
                            className="collector" 
                            name="email" 
                            placeholder="Business name" 
                            required 
                            value={userData.businessName}
                            onChange={(e) => setUserData({ ...userData, businessName: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="email-con" >
                        Account Name (Surname first)
                        <div className="email-collector">
                            <input 
                            type="text" 
                            className="collector" 
                            name="email" 
                            placeholder="first name" 
                            required 
                            value={userData.userName}
                            onChange={(e) => setUserData({ ...userData, userName: e.target.value })}

                            />
                        </div>
                    </div>

                    {/* <div className="email-con" >
                        Middle Name
                        <div className="email-collector">
                            <input 
                            type="text"  
                            className="collector" 
                            name="email" 
                            placeholder="middle name" 
                            required 
                            value={userData.userName}
                            onChange={(e) => setUserData({ ...userData, userName: e.target.value })}

                            />
                        </div>
                    </div>

                    <div className="email-con" >
                        Last Name
                        <div className="email-collector">
                            <input 
                            type="text" 
                            className="collector" 
                            name="email" 
                            placeholder="last name" 
                            required 
                            value={userData.userName}
                            onChange={(e) => setUserData({ ...userData, userName: e.target.value })}

                            />
                        </div>
                    </div> */}


                    <div className="phone-box">
                        <label>
                            Phone Number
                            <PhoneInput
                                country={'ng'}
                                className="collector"
                                name="phone"
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
                            <input 
                            type="text"
                            className="collector" 
                            name="email" 
                            placeholder="Email address" 
                            required 
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                            />
                        </div>
                    </div>


                    <div className="password-con1">
                        Password
                        <div className="password-con">
                            <img className="key-svg" src={key} />
                            <input 
                            className="collector" 
                            type={passwordVisible ? 'text' : 'password'} 
                            value={password} onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Password" />
                            <img className="eye-svg" 
                            src={passwordVisible ? (close) : (eye)} 
                            alt="Toggle Password Visibility" 
                            onClick={togglePasswordVisibility} />
                        </div>
                    </div>
                    <div className="question">Already have an account?
                        <Link to={'/login'}><b>Log In </b></Link>

                    </div>
                    <button className="signup-btn" onClick={createUser}><h2>Sign Up</h2></button>

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
            <Support />

        </div>
    );

}

export default Signup;