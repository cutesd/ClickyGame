import React from "react";
import "./Row.css";

const Row = props =>
    <div className="bg-grad py-5">
        <div className={props.rowClasses}>{props.children}</div>
    </div>;

export default Row;
