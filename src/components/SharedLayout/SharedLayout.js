import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../Navigation/Navigation";

export const SharedLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
