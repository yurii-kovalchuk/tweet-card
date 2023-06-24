import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/tweets">Tweets</NavLink>
    </nav>
  );
};
