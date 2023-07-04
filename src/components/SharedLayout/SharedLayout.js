import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
