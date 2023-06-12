import React from "react";
import { DiscountWrapper } from "../StyleCompoents/discountStyle";
import { CiSearch } from "react-icons/ci";
import { categorydata } from "../data/categorydata";
import Createcategorymodal from "../Modals/createcategorymodal";

export default function Category() {
  return (
    <>
      <DiscountWrapper>
        <header>
          <h1>Category</h1>
          <Createcategorymodal />
        </header>

        <section>
          <div className="search">
            <div>
              <CiSearch />
            </div>
            <input list="items" id="category" name="category" />
            <datalist id="items">
              <option value="Computer & IT" />
              <option value="Beauty" />
              <option value="Black Friday" />
              <option value="Regular Customer" />
              <option value="Buy4 get 1" />
              <option value="Off Season Sale 2" />
              <option value="Stock Deal" />
              <option value="Bulk Purchare" />
            </datalist>
          </div>
          <hr />
          <div className="cart">
            {categorydata.map((ele) => {
              return (
                <>
                  <div className="carts">
                    <img src={ele.icon} alt="" />
                    <div className="content">
                      <h4>{ele.product}</h4>
                      <h4>{ele.items}</h4>
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
