import React from "react";
import { useState } from "react";
import "./navbar.css";

export const Navbar = () => {
  const [state, setstate] = useState("footer");
  return (
    <div>
      <ul className="Navbar">
        <li
          onClick={() => setstate("home")}
          className={state === "home" ? "Active" : ""}
        >
          home
        </li>
        <li
          onClick={() => setstate("faqs")}
          className={state === "faqs" ? "Active" : ""}
        >
          faqs
        </li>
        <li
          onClick={() => setstate("feature")}
          className={state === "feature" ? "Active" : ""}
        >
          feature
        </li>
        <li
          onClick={() => setstate("content")}
          className={state === "content" ? "Active" : ""}
        >
          content
        </li>
        <li
          onClick={() => setstate("footer")}
          className={state === "footer" ? "Active" : ""}
        >
          footer
        </li>
      </ul>
    </div>
  );
};
