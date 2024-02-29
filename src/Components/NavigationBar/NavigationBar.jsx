import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Tranxact on.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./NavigationBar.module.css";
import FilledBtn from "../../Reuseables/Buttons/FilledBtn/FilledBtn";

const NavigationBar = () => {
  const navigate = useNavigate();

  const [isLogin, setLogin] = useState(false);

  const getLogin = () => {
    setLogin(!isLogin);
  };

  return (
    <div className={style.intro}>
      <nav>
        <ul>
          <ul>
            <li className={style.logo}>
              <Link to="/">
                <img
                  src={logo}
                  alt="Tranxactrust logo"
                  className={style.logo}
                  height={50}
                />
              </Link>
            </li>
          </ul>
          <li >
            <Link to="/" className={style.menu}>BankingPlus</Link>
          </li>
          <li>
            <Link to="/" className={style.menu}>Blockchain</Link>
          </li>
          <li>
            <Link to="/" className={style.menu}>Businesses</Link>
          </li>
          <li>
            <Link to="/" className={style.menu}>Pricing</Link>
          </li>
          <li>
            <Link to="/" className={style.menu}>Support</Link>
          </li>
          <li>
            <Link to="/" className={style.menu}>Resources</Link>
          </li>
          <li>
            <Link to="/about" className={style.menu}>About Us</Link>
          </li>
          <ul className={style.loginSignup}>
            <li className="">
              <Link to={"/login"} className={style.login}>
                Log In
              </Link>
            </li>
            <li>
              <FilledBtn style={style.signup} btn={"Sign Up"}/>
            </li>
          </ul>
        </ul>
      </nav>
      {isLogin && (
        <div className={style.login}>
          <div className={style.login}>
            <span className={style.close} onClick={getLogin}>
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;

