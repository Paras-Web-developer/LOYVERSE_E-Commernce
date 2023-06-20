import React from "react";
import img from "../Assets/paras.jpeg";
import { OwnerDiv } from "../StyleCompoents/StyleComponetPage";

const Owner = () => {
  function logout() {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <>
      <OwnerDiv>
        <h5 className="Owner_heading">Owner</h5>
        <div className="Owner_details">
          <div className="Owner_photo">
            <img src={img} alt=""></img>
          </div>
          <div className="details">
            <div className="all_details">
              <div>
                <p>
                  <b>Bussiness Name </b>
                </p>
                <p>
                  <b>Email </b>
                </p>
                <p>
                  <b>Country </b>
                </p>
                <p>
                  <b>Total Items</b>
                </p>
              </div>
              <div>
                <p>
                  <b> : </b> Paras
                </p>
                <p>
                  <b> : </b> parasgrover932@gmail.com
                </p>
                <p>
                  <b> : </b> India
                </p>
                <p>
                  <b> : </b> 445
                </p>
              </div>
            </div>

            <button className="logOut_btn" onClick={logout}>
              LogOut
            </button>
          </div>
        </div>
      </OwnerDiv>
    </>
  );
};

export default Owner;
