import React from "react";
import { ReactDOM } from "react";

function Navbar() {
    return(
        <div className="navbar">
            {/* <img src={image} alt="logo"  className="nav-logo"/> */}
            {/* <img src="../images/menu.png" alt="menu" className="nav--menu--ham" onClick={MenuBar}/> */}
            {/* <img src="../images/cross.png" alt="menu" className="nav--menu--cross" onClick={Cross}/> */}
            <h1 className="nav--header">Saayaa's Creations...</h1>
            {/* <a href="" className="nav--options">Our Happy Customers</a> */}
        </div>
    )
}

function MenuBar(){
    console.log(`Opened`)
    return(
        <div className="menubar">
            <h1>This is the sidebar</h1>
        </div>
    )
}
function Cross(){
    console.log(`Crossed`)
    return(
        <div className="menubar">
        </div>
    )
}

export default Navbar;