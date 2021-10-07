import React from "react";
import "./card.style.css";

const Card = (props) => {
    return(
        <div className="card-container" key={props.id}>
            <img src={`https://robohash.org/${props.id}/?set=set2&size=180x180`} />
            <h1>{props.name}</h1>
        </div>
    )
}

export default Card;