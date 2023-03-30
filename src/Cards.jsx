import React from "react"
import ReactDOM from 'react-dom/client'

 function Card(props){
   let boxInfo;
   if(!props.openSpots)boxInfo="SOLD OUT!"
   else if(props.location==="Online")boxInfo="ONLINE"
    return (
        <div className="card">
         {boxInfo && <div className="box">{boxInfo}</div>}
           <img  src={`/images/${props.coverImg}`} />
           <div className="rating">
                <img src="images\Star 1.png"  />
                <span>{props.stats.rating} {"("+props.stats.reviewCount+")"} {props.location}</span>
           </div>
           <p className="descrip">{props.title}</p>
           <p className="price"><b>From {"$"+props.price}</b> /person</p> 
        </div>
    )
 }
 export default Card