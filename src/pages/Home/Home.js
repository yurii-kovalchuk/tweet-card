import React from "react";
import { NavLink } from "react-router-dom";

import "./Home.style.css";

export const Home = () => {
  return (
    <>
      <div className="wrapHome">
        <h1>Welcome to app</h1>
        <h2>To see tweets follow the link</h2>
        <NavLink to="tweets" className="tweetsLink">
          Tweets
        </NavLink>
      </div>
    </>
  );
};
