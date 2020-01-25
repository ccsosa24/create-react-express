import React from "react";
import style from "./style.css";


function Jumbotron({ children }) {
    return (
        <div
        // src="background-image: url('https://media.giphy.com/media/uDj0Fa3q8ipBS/giphy.gif')"
            style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
            className="jumbotron"
            >
                {children}
        </div>
    );
}

export default Jumbotron;