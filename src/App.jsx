import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./componets/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./componets/navbar/store/pages/home/Home";
import { Cards } from "./componets/navbar/store/pages/Cards/Cards";
import { Placeholder } from "./componets/navbar/store/pages/placeholder/Placeholder";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/" element={<Cards></Cards>} />
        <Route path="/" element={<Placeholder></Placeholder>} />
      </Routes>
    </>
  );
}

export default App;
