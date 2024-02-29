import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import tranxact from "../../images/Tranxact on.png";
import key from "../../images/ic_round-key.svg";
import eye from "../../images/ph_eye.svg";
import close from "../../images/eye-close-svgrepo-com.svg";
import { MdOutlineMail } from "react-icons/md";
import Support from "../Support/Support";
import style from "./Login.module.css";


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

    const navigate = useNavigate();

    // const login = () => {
    //     navigate('/login');
    //   };

    const dropCountries = () => {
        const drop = document.getElementById("dropdown");
        drop.click();
        drop.style.display = "flex"

    }


    return (
        <div>
            <div className={style.loginBox}>
                <Link to={'/'}>
                    <img className={style.logo} src={tranxact} />
                </Link>
                <div className={style.email}>

                    <div className={style.emailCon} >
                        Email address
                        <div className={style.emailCollector}>
                            <MdOutlineMail className={style.emailImage} />
                            <input type="text" id="email1" className={style.collector} name="email" placeholder="Email address" required />
                        </div>


                        <div className={style.passwordCon1}>
                            Password
                            <div className={style.passwordCon}>
                                <img className={style.keySvg} src={key} />
                                <input 
                                className={style.collector} 
                                type={passwordVisible ? 'text' : 'password'} 
                                value={password} onChange={(e) => setPassword(e.target.value)} 
                                placeholder="Password" />
                                <img className={style.eyeSvg} 
                                src={passwordVisible ? (close) : (eye)} alt="Toggle Password Visibility" 
                                onClick={togglePasswordVisibility} />

                            </div>

                        </div>
                        <button className={style.loginBtn}><h2>Log In</h2></button>
                        <div className={style.question}>New to Tranxactrust?
                            <Link to={'/signup'}><b>Sign Up </b></Link>

                        </div>
                        <Link to={'/'} className={style.update}>Forgot your password?</Link>
                    </div>
                </div>

            </div>

            <Support />
        </div>

    );

};

export default Login;