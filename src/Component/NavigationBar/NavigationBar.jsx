import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Tranxact on.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./NavigationBar.module.css";

const NavigationBar = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const signup = () => {
    navigate("/signup");
  };

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
          <li className={style.menu}>
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
            <Link to="/about">About Us</Link>
          </li>
          <ul className={style.loginSignup}>
            <li className="">
              {/* <button onClick={getLogin}>Log In</button> */}
              <Link to={"/login"} className={style.btn}>
                Log In
              </Link>
              {/* <i onClick={() => toggleModal(false)} className="bi bi-x-lg"></i> */}
            </li>
            <li className={style.signup}>
              <Link to={"/signup"}>Sign Up</Link>
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

