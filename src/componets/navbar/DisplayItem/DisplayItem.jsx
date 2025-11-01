import React from "react";
import "./DisplayItem.css";
import { starrate } from "../../../assets/assets";

export const DisplayItem = ({
  id,
  name,
  image,
  price,
  description,
  category,
}) => {
  return (
    <div className="display_items_Content">
      <div className="food_img_container">
        <img className="Img-container" src={image} alt="" />
      </div>
      <div className="list_info">
        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
        <p>{category}</p>
      </div>
    </div>
  );
};
