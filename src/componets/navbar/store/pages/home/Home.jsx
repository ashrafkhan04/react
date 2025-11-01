import { Displaymenu } from "../../../DisplayMenu/Displaymenu";
import { Explore_Menu } from "../../../ExploreMenu/Explore_Menu";
import { Header } from "./Header/Header";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <Header></Header>
      <Explore_Menu />
      <Displaymenu />
    </div>
  );
};
