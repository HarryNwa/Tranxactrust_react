import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Tranxact on.png";
import Signup from "../Menu/Signup";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

const NavigationBar = () => {
    const navigate = useNavigate();

    const login = () => {
        navigate('/login');
      };

    const signup = () => {
      navigate('/signup');
    };

    const modalRef = useRef();

    const [isLogin, setLogin] = useState(false);

    const getLogin = () => {
        setLogin(!isLogin);
    };

    const toggleModal = (show) => show? modalRef.current.showModal() : modalRef.current.close()

   

    {isLogin && (
        <div className="login">
            <div className="login-form">
                <span className="close" onClick={getLogin}>
                    &times;
                </span>
            </div>
        </div>
      )}
    return (
        <div className="intro-wrapper">
        <nav>

            <ul>
                <ul>
                <li className="logo">
                    <Link to="/"><img src={logo} alt="Tranxactrust logo" className="logo" height={45} /></Link>
                </li>
            </ul>
                <li className="menu">
                    <Link to="/">BankingPlus</Link>
                </li>
                <li>
                    <Link to="/">Blockchain</Link>
                </li>
                <li>
                    <Link to="/">Businesses</Link>
                </li>
                <li>
                    <Link to="/">Pricing</Link>
                </li>
                <li>
                    <Link to="/">Support</Link>
                </li>
                <li>
                    <Link to="/">Resources</Link>
                </li>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <ul className="login-signup">
                    <li className="">
                    {/* <button onClick={getLogin}>Log In</button> */}
    
                        <Link to={'/login'} className="btn">Log In</Link>
                        {/* <i onClick={() => toggleModal(false)} className="bi bi-x-lg"></i> */}
                    </li>
                    <li className="signup">
                        <Link to={'/signup'}>Sign Up</Link>
                    </li>
                </ul>
            </ul>

        </nav>
        </div>
    );
}

export default NavigationBar;