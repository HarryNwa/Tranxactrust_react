import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Homepage/Footer";


const Trustmonie = () => {
    return (
        <div>
            <h1>
                Trusted transaction.
            </h1>

            <Link to={'/signup'} class="update" >
                <h2> Sign up</h2>
            </Link>

            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Trustmonie;