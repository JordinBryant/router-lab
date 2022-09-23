import React from "react";
import { Link } from "react-router-dom";

function About(props){
    return(
        <div>
            <h1>About Page</h1>
            <Link to="/stocks">
                List of stocks
            </Link>
            <div>
                <img src="https://i.ytimg.com/vi/SMRg9mKcyhM/mqdefault.jpg" />
            </div>
        </div>
    );
};

export default About;