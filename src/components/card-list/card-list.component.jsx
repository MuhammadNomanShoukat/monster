import React from "react";
import "./card-list.style.css";

import Card from "../card/card.container";

const CardList = (props) => {
    return(
        <div className="card-list">
            {props.robots.map((value, index)=>{
                return(<Card name={value.name} id={value.id}/>)
            })}
        </div>
    )
}

export default CardList;