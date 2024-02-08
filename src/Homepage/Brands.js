import React from "react";
import { Link } from "react-router-dom";
import landwey from "../images/landwey.jpeg";
import adron from "../images/adron.png";
import fuse from "../images/fuse.jpeg";
import mist from "../images/mist.png";


const Brands = () => {

    return (
        <div>
        
        <section className="brands">
            
            <p className="brandPara">Your favourite brands trust <span className="brand-intro-span">
                Tranxactrust.</span>
            </p>

            {/* <div className="brands-logo"> */}
                <div className="brands-logo">
                    <img src={landwey} alt="LandWey logo" className="landwey"  />

                    <img src={adron} alt="Adron logo" className="adron" />
                    <img src={fuse} alt="Fuse logo" className="fuse" />

                    <img src={mist} alt="Mist logo" className="mist"  />
                </div>
            {/* </div> */}
        </section>
        </div>
    );

};

export default Brands;