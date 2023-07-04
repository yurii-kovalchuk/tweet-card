import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Tweets } from "./pages/Tweets/Tweets";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
