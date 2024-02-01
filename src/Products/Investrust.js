import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Homepage/Footer";


const Investrust = () => {
    return (
        <div>
            <h1>
                Start investing
            </h1>
            <Link to={'/signup'} className="update">
                <h2> Sign up</h2>
            </Link>

            <div>
                <Footer />
            </div>
        </div>
    );
}


export default Investrust;