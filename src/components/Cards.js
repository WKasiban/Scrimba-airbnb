import React from "react"
import star from "../images/Star.png"

export default function Cards(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <section className="card">
                {badgeText && <div className="card-badge">{ badgeText }</div>}
                <img src={`../cardImg/${props.coverImg}`} alt="card coverImg" className="card-img" />
                <div className="card-caption">
                    <img src={star} alt="star" className="card-star" />
                    <span className="card-rating">{props.stats.rating}</span>
                    <span className="card-review">({props.stats.reviewCount})</span>
                    <span className="card-review"> • </span>
                    <span className="card-location">{props.location}</span>
                </div>
                <p className="title">{props.title}</p>
                <p className="card-price"><span className="card-bold">From ${props.price}</span> / person</p>
        </section>
    )
}