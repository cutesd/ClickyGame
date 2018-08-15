import React from "react";
import "./Nav.css";

const Nav = props =>
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <div className="navbar-brand font-headline">Clicky Game</div>
            <div className="navbar-brand">{props.msg}</div>
            <div className="navbar-brand">Score: {props.numCorrect} | Top Score: {props.topScore}</div>
        </div>
    </nav>;

export default Nav;
