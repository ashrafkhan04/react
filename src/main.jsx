import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./componets/navbar/store/pages/content/StoreContent.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {" "}
    <StoreContextProvider>
      {" "}
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
