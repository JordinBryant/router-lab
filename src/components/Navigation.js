import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) =>{
    return(
        <div className="navigation">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/stocks">
                Stocks
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
        </div>
    );
};

export default Navigation;