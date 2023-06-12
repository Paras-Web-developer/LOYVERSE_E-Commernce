import React, { useEffect } from "react";
import axios from "axios";
import { ReceiptDiv } from "../StyleCompoents/StyleComponetPage";
import { CiSearch } from "react-icons/ci";
import userData from "../data/userData";

const User = () => {
  // const [data,setData]

  return (
    <>
      <ReceiptDiv>
        <div className="receipt_container">
          <div className="Receipt_header">
            <p>Add Customer to Ticket</p>
            <div className="input_seacch">
              <span>
                <div className="search">
                  <div>
                    <CiSearch />
                  </div>
                  <input type="search" placeholder="Search" />
                  <button className="ticket_add_customer">
                    <span>+</span> Add Customer
                  </button>
                </div>
              </span>
            </div>
          </div>
          <div className="table_container">
            <table className="tabletag">
              <thead className="table_head">
                <tr className="table_row">
                  <td>
                    <b>Sr.No</b>
                  </td>
                  <td>
                    <b>Name</b>
                  </td>
                  <td>
                    <b>Email</b>
                  </td>
                  <td>
                    <b>Phone</b>
                  </td>
                  <td>
                    <b>Total spent</b>
                  </td>
                  <td>
                    <b>Last Visit</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                {userData.map((ele) => {
                  return (
                    <>
                      <tr>
                        <td>{ele.sNo}</td>
                        <td className="ticket_div">
                          <img
                            src={ele.logo}
                            alt=""
                            className="ticket_userlogo"
                          />
                          <p>{ele.name}</p>
                        </td>
                        <td>{ele.email}</td>
                        <td>{ele.number}</td>
                        <td>{ele.total}</td>
                        <td>{ele.date}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </ReceiptDiv>
    </>
  );
};

export default User;
