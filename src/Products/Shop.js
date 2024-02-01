import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Homepage/Footer";


const Shop = () => {
    return (
        <div>
            <div>
                <h1>Sell & shop online.
                </h1>
            </div>
            <Link to={'/signup'} class="update" >
                <h2> Sign up</h2>
            </Link>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Shop;