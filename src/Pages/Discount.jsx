import React from "react";
import { DiscountWrapper } from "../StyleCompoents/discountStyle";
import { CiSearch } from "react-icons/ci";
import { discount } from "../data/discount";
import AdddiscountModal from "../Modals/AdddiscountModal";

export default function Discount() {
  return (
    <>
      <DiscountWrapper>
        <header>
          <h1>Discount</h1>
          <AdddiscountModal />
          {/* <button className="add_Discount">
            <span>+</span> Add Discount
          </button> */}
        </header>

        <section>
          <div className="search">
            <div>
              <CiSearch />
            </div>
            <input type="search" name="" id="" placeholder="Search" />
          </div>
          <hr />
          <div className="cart">
            {discount.map((ele) => {
              return (
                <>
                  <div className="carts">
                    <div className="img">
                      <img src={ele.icon} alt="" />
                    </div>
                    <div className="content">
                      <h4>{ele.discountName}</h4>
                      <p>{ele.discount}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </DiscountWrapper>
    </>
  );
}
