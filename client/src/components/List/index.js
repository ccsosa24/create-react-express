import React from "react";
import "./style.css";

export function List({ children }) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{childre}</ul>
        </div>
    );
}

export function ListItem({ chidren }) {
    return <li className="list-group-item">{children}</li>;
}