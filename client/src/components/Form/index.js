import React from "react";
import formStyle from "./formStyle.css";

export function Input(props) {
    return(
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function TextArea(props) {
    return (
        <div className="form-group" id="textplace">
            <textarea className="form-control" rows="15" {...props} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{  marginBottom: 10 }} id="submitbtn" className="btn btn-success">

        </button>
    );
}