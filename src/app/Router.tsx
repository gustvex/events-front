import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";

import MainLayout from "../layout/Main";
import Home from "../pages/Home";
import Event from "../pages/Event"

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }
        >
          <Route element={<Home />} path="/" />
          <Route element={<Event />} path="event" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
