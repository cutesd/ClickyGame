import React from "react";
import "./Jumbotron.css";

const Jumbotron = props =>
    <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
            <h1 className="font-headline">Clicky Game!</h1>
            <h3>Click on an image to earn points, but don't click on any more than once!</h3>
        </div>
    </div>;

export default Jumbotron;
