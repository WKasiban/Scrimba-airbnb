import React from "react"
import Navbar from "./components/Navbar"
import Headline from "./components/Headline"
import Cards from "./components/Cards"
import "./style.css"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Cards 
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <>
            <Navbar />
            <Headline />
            <div className="card-list">
                {cards}
            </div>
        </>
    )
}