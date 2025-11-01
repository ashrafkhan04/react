import React, { useContext } from "react";
import "./Displaymenu.css";
import { StoreContext } from "../store/pages/content/StoreContent";
import { DisplayItem } from "../DisplayItem/DisplayItem";

export const Displaymenu = () => {
  const { Food_List } = useContext(StoreContext);
  return (
    <div className="display-container">
      <div className="display_food">
        {Food_List.map((item, index) => {
          return (
            <DisplayItem
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};
