import React from "react"
import headlinePhoto from "../images/Group77.png"

export default function Headline() {
    return (
        <section className="header">
            <img src={ headlinePhoto } alt="headline" className="header-pic"/>
            <div className="header-text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts -- all without leaving home.</p>
            </div>
        </section>
    )
}