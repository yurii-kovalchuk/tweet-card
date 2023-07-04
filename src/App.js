import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";

const Home = lazy(() => import("./pages/Home/Home"));
const Tweets = lazy(() => import("./pages/Tweets/Tweets"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
};

export default App;
