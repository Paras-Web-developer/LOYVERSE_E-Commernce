import React from "react";
import { LayoutDiv } from "../StyleCompoents/styleComoent";
import PrivateHeader from "../Compoents/PrivateHeader";
import { Outlet } from "react-router-dom";
import Footer from "../Compoents/Footer";
import SideNav from "../Compoents/SideNav";
const Layout = () => {
  return (
    <LayoutDiv>
      <div className="TopNavber">
        <PrivateHeader />
      </div>
      <div className="SidNavbar">
        <SideNav />
      </div>
      <div className="pageContent">
        <Outlet></Outlet>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </LayoutDiv>
  );
};

export default Layout;
