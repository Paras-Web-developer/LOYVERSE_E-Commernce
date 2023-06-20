import React from "react";
import { SalesDiv } from "../StyleCompoents/StyleComponetPage";
import box from "../Assets/box 1.png";
import img from "../Assets/paras.jpeg";

const Sales = () => {
  return (
    <>
      <SalesDiv>
        <div className="Salse_container">
          <div className="left_content">
            <div className="item_search">
              <select style={{ outline: "none" }}>
                <option>All Items</option>
              </select>
              <input type="Search" placeholder="Search" />
            </div>
            <hr className="hr_line" />
            <div className="items_show">
              <div>
                <img src={box} alt=""></img>
                <h3>You Have no items yet</h3>
                <p>Go to items to add on item</p>
                <button className="goto_btn">Go to Items</button>
              </div>
            </div>
          </div>
          <div className="right_content">
            <div className="paraDiv">
              <div className="img_name_email">
                <img className="imges" src={img} alt="" />
                <div>
                  <b>
                    <p>Paras</p>
                  </b>
                  <p className="email_img">parasgrover932@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="paraDiv discount">
              <p>Discount</p>
              <p>$ 0.00</p>
            </div>
            <div className="paraDiv total">
              <p>Total</p>
              <p>$0.00</p>
            </div>
            <button className="charge_btn">CHARGE $0.00</button>
          </div>
        </div>
      </SalesDiv>
    </>
  );
};

export default Sales;
