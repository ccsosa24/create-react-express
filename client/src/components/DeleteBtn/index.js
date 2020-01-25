import React from "react";
// import "./sytle.css";

function DeleteBtn(props) {
    return (
        <span className="delete-btn" {...props} role="button"  tabIndex="0">
            x
        </span>
    );
}

export default DeleteBtn;