import React from "react";
import {
  BrowserRouter,
  Outlet,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import User from "../Pages/Ticket";
import Owner from "../Pages/Owner";
import Layout from "../Layout/Layout";
import SingIn from "../Auth/SingIn";
import SingUp from "../Auth/SingUp";
import Sales from "../Pages/Sales";
import Receipts from "../Pages/Receipts";
import Items from "../Pages/Items";
import Settings from "../Pages/Settings";
import Help from "../Pages/Help";
import Page404error from "../Pages/Page404error";
import Discount from "../Pages/Discount";
import Category from "../Pages/Category";

const PublicRoute = ({ isAuth }) => {
  if (isAuth !== null) {
    return <Navigate to="/Layout" />;
  }
  return <Outlet />;
};

const PrivateRoute = ({ isAuth }) => {
  if (isAuth === null) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

// token access
const Tokenger = localStorage.getItem("Token");
const Routing = () => {
  let token = Tokenger;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute isAuth={token} />}>
            <Route path="" element={<SingIn />} />
            <Route path="/SingUp" element={<SingUp />} />
            <Route path="*" element={<Page404error />} />
          </Route>

          <Route element={<PrivateRoute isAuth={token} />}>
            <Route path="/Layout" element={<Layout />}>
            <Route path="" element={<Sales />} />
              <Route path="Layout/Ticket" element={<User />} />
              <Route path="Layout/Owner" element={<Owner />} />
              <Route path="Layout/Receipts" element={<Receipts />} />
              <Route path="Layout/Items" element={<Items />} />
              <Route path="Layout/Category" element={<Category />} />
              <Route path="Layout/Discount" element={<Discount />} />
              <Route path="Layout/Settings" element={<Settings />} />
              <Route path="Layout/Help" element={<Help />} />
              <Route path="*" element={<Page404error />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Routing;
