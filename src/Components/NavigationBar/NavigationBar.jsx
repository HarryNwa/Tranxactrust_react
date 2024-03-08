'use client'
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Tranxact on.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./NavigationBar.module.css";
import FilledBtn from "../../Reuseables/Buttons/FilledBtn/FilledBtn";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import GhostBtn from "../../Reuseables/Buttons/GhostBtn/GhostBtn";
import clsx from "clsx";
import { data } from "autoprefixer";




const NavigationBar = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false);



  const navigate = useNavigate();

  const [isLogin, setLogin] = useState(false);

  const getLogin = () => {
    setLogin(!isLogin);
  };

  const navLink = [
    {
      label: "BankingPlus",
      link: "/"
    },
    // {
    //   label: "Blockchain",
    //   link: "/"
    // },
     {
      label: "Payments",
      link: "/"
    },
    {
      label: "Businesses",
      link: "/"
    },
    {
      label: "Resources",
      link: "/"
    },
    {
      label: "Pricing",
      link: "/"
    },
    {
      label: "Support",
      link: "/"
    },
    {
      label: "About Us",
      link: "about"
    },

  ]

  const loginLink = [
    {
      label: "Log In",
      link: "login"
    }
  ]

  return (
    <main  >
      <nav className="flex justify-between items-center lg:px-44">

        <div className="flex justify-between items-center gap-4">
          <section className="flex items-center gap-4">
            <Link to="/">
              <img
                // className="flex w-[16rem]"
                src={logo}
                alt="Tranxactrust logo"
                // className={style.logo}
                // height={200}
                width={177}
              />
            </Link>

          </section>
          <div className="flex flex-col lg:flex-row gap-20 justify-center lg:justify-between items-center ">
          {navLink.map((data, index) => (
            <Link key={index} to={data.link}
              className="hidden lg:block font-bold hover:text-blue">{data.label}</Link>
          ))}
          </div>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center ">
          {loginLink.map((data, index) => (
            <GhostBtn key={index} styler={style.login} btn={data.label} />
          ))}

          <FilledBtn style={style.signup} btn={"Sign Up"} />
          </div>
        </div>

        {/* "sidebar mobile menu" */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col 
            absolute left-0 top-0 h-screen p-8 gap-8 z-50 flex ">
            <GrClose onClick={() => setSideMenu(false)} className="mt-0 mb-0 text-3xl cursor-pointer" />
            {/* <MdOutlineCloseFullscreen
              onClick={() => setSideMenu(false)} 
              className="mt-0 mb-0 text-3xl cursor-pointer" /> */}
            {navLink.map((data, index) => (
              <Link key={index} to={data.link}
                className="font-bold">{data.label}</Link>

            ))}
            {/* {loginLink.map((data, index) => (
            <GhostBtn key={index} styler={style.login} btn={data.label} />
          ))} */}

            <GhostBtn styler={style.login} btn={"Log In"} />
            <FilledBtn style={style.signup} btn={"Sign Up"} />

          </section>

        </div>

        {/* <section className="flex items-center gap-4"> */}
          <FiMenu onClick={() => setSideMenu(true)}
            className="text-3xl cursor-pointer lg:hidden" />

        {/* </section> */}
        {isLogin && (
          <div className={style.login}>
            <div className={style.login}>
              <span className={style.close} onClick={getLogin}>
                &times;
              </span>
            </div>
          </div>
        )}

      </nav>
      {/* <hr /> */}
    </main>
  );
};

export default NavigationBar;

