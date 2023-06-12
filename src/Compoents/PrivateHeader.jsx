import React from "react";
import { PrivateHeaderDiv } from "../StyleCompoents/styleComoent";
import GroupIco from "../Assets/GroupIcon.png";
import { NavLink } from "react-router-dom";

import { IoMdContact, IoIosContact } from "react-icons/io";
const PrivateHeader = () => {
  return (
    <PrivateHeaderDiv>
      <div className="headerContainer">
        <div className="header_log">
          <div className="topheadingLog">
            <img src={GroupIco} alt="" />
            <div>
              <h1 className="singIn_heading1">Loyverse</h1>
              <p className="paraHeading">POint of Sale</p>
            </div>
          </div>
        </div>
        <div className="header_page_button">
          <NavLink to="Layout/Ticket">
            {" "}
            <div className="nav">
              <p>
                Ticket <span className="logcount">3</span>
              </p>
            </div>
          </NavLink>
          <NavLink to="Layout/Receipts">
            {" "}
            <div className="nav">
              <p>
                <IoIosContact className="logNav" />
                Customer
              </p>
            </div>
          </NavLink>
          <NavLink to="Layout/Owner">
            {" "}
            <div className="nav ownerNav">
              <p>
                <IoMdContact className="logNav" />
                <select>
                  <option>Owner</option>
                </select>
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </PrivateHeaderDiv>
  );
};

export default PrivateHeader;
