import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p className="card-id">{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar src={props.img} />
      </div>
      <div className="bottom">
        <Details text={props.tel} />
        <Details text={props.email} />
      </div>
    </div>
  );
}

export default Card;
