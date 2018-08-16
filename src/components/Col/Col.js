import React from "react";
import "./Col.css";

const Col = props =>
    <div className="col-3 col-spc">
      
            <img className="img-fluid" id={props.id} src={props.img} alt={props.name} onClick={props.btnClick}/>
        
    </div>;

export default Col;
