import React from "react";
import { SideNavbarDiv } from "../StyleCompoents/styleComoent";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BiCart, BiReceipt } from "react-icons/bi";
import {
  MdOutlineDataset,
  MdOutlineSettings,
  MdOutlineHelpCenter,
} from "react-icons/md";

const SideNav = () => {
  const navigate = useNavigate();
  function locate(e) {
    const val = e.target.value;
    if (val === "Items") {
      navigate("Layout/Items");
    }
    if (val === "Category") {
      navigate("Layout/Category");
    }
    if (val === "Discounts") {
      navigate("Layout/Discount");
    }
  }
  return (
    <SideNavbarDiv>
      <div className="SideNave_container">
        <NavLink to="">
          <p className="SideNave">
            <BiCart className="sideNave_Log" />
            Sales
          </p>
        </NavLink>
        <NavLink to="Layout/Receipts">
          <p className="SideNave">
            <BiReceipt className="sideNave_Log" />
            Receipts
          </p>
        </NavLink>
        <p className="SideNave">
          <MdOutlineDataset className="sideNave_Log" />
          <select className="sideSelecter" onClick={locate}>
            <option id="options" value="Items">Items</option>
            <option className="options" value="Category">Category</option>
            <option className="options" value="Discounts">Discounts</option>
          </select>
        </p>
        <NavLink to="Layout/Settings">
          <p className="SideNave">
            <MdOutlineSettings className="sideNave_Log" />
            Settings
          </p>
        </NavLink>
        <NavLink to="Layout/Help">
          <p className="SideNave">
            <MdOutlineHelpCenter className="sideNave_Log" />
            Help
          </p>
        </NavLink>
      </div>
    </SideNavbarDiv>
  );
};

export default SideNav;
