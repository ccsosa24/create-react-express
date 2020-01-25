import React from "react";

function Image(props) {
    return (
    <div className="text-right">
        <img className="img img-fluid" src={props.image} alt="thumb" />
    </div>
    );
};

export default Image;