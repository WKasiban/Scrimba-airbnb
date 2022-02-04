import React from "react"
import logo from "../images/airbnb1.png"


export default function Navbar() {
    return (
        <nav>
            <img src={logo} alt="airbnb logo" className="logo" />
        </nav>
    )
}