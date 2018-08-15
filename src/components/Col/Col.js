import React from "react";
import "./Col.css";

const Col = props =>
    <div className="col-3 col-spc">
        <a onClick={props.btnClick}>
            <img className="img-fluid" id={props.id} src={props.img} alt={props.name} />
        </a>
    </div>;

export default Col;
