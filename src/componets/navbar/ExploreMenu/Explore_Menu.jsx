import "./Explore_Menu.css";
import { menu_list } from "../../../assets/assets";
export const Explore_Menu = () => {
  return (
    <div className="menu-comtainer">
      <h1>we have pizza burgar chichen </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
        praesentium.
      </p>
      <div className="img-container">
        {menu_list.map((item, index) => {
          return (
            <div className="img">
              <img className="img-all" src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
