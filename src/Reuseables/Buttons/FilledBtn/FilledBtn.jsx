import React from "react";
import { Link } from "react-router-dom";
import style from './FilledBtn.module.css';

const FilledBtn = ({ style, btn }) => {
    return (
        <div>

            <Link to={'/signup'} >
                <button className={style}>{btn}</button>
            </Link>

        </div>
    );
};

export default FilledBtn;