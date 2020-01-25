import React from "react";
import navStyle from "./navStyle.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="title">
            <a className="navbar-brand" id="rrl" href="/">
                React Reading List
            
            <button variant="button"  id="save" className="btn btn-dark">Save</button>
            <button type="button" id="list" className="btn btn-dark">List</button>
            </a>
        </nav>
    );
}

export default Nav;
