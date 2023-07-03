import styled from "styled-components";
import "./style.css";

//---------------------Receipts-------------------------//
//---------------------Receipts-------------------------//

export const ReceiptDiv = styled.div`
  padding: 1rem;
  background: #f9f9f9;

  .Receipt_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .Receipt_header p {
    font-family: sans-serif;
    font-weight: 600;
  }
  .search {
    display: flex;
    align-items: center;
    gap: 1rem;
    div {
      position: relative;
      right: -40px;
    }
  }
  svg#search {
    /* position: absolute;
    top: 83px;
    right: 9rem; */
  }
  .recept-search {
    position: absolute;
    top: 82px;
    right: 9.3rem;
  }
  input[type="search"] {
    background: #ffffff;
    border: 1px solid #dfe7ed;
    border-radius: 4px;
    height: 1.8rem;
    padding-left: 2rem;
    width: 158px;
    height: 38px;
  }
  .tabletag {
    width: 100%;
  }
  .table_container {
    background: #ffffff;
    padding: 6px;
  }
  thead.table_head {
    background: #dfe7ed;
  }

  td {
    height: 2.6rem;
    margin-right: 5px;
    font-size: smaller;
    padding-left: 1rem;
    border-bottom: 1px solid #dfe7ed;
    border-collapse: collapse;
  }
  //---------------------Receipts-------------------------//
  /* _______________________Ticket Style Start_______________ */
  .search {
    button {
      color: white;
      font-size: 1rem;
      background: linear-gradient(261.25deg, #faa439 14.88%, #fbb43a 65.33%);
      border-radius: 5px;
      border: none;
      width: 158px;
      height: 38px;
      span {
        font-weight: 900;
      }
    }
  }
  .ticket_div {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #3b69c5;
  }
  .ticket_userlogo {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  .Modal_container {
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
  .Modal_content {
    width: 26%;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 20px 0px;
    margin: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .cut {
    color: #000000;
    background: #ffffff;
    border-radius: 50%;
    text-align: center;
    padding: 7px 10px;
    float: right;
    margin: -7px -8px 0 0px;
    cursor: pointer;
  }
  /* _______________________Ticket Style End_________________ */
`;

//---------------------Sales-------------------------//
//---------------------Sales-------------------------//

export const SalesDiv = styled.div`
  padding: 1rem;
  background: rgb(249, 249, 249);

  .Salse_container {
    background: rgb(255, 255, 255);
    padding: 6px;
    display: flex;
  }
  .item_search {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
  }
  svg#searchd {
    position: absolute;
    top: 83px;
    right: 9rem;
  }
  .left_content {
    width: 77%;
  }
  .right_content {
    width: 24%;
    background: rgb(249, 249, 249);
  }
  .items_show {
    height: 500px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-family: emoji;
    font-weight: initial;
  }
  .goto_btn {
    background: #3b69c5;
    border-radius: 29px;
    border: none;
    padding: 8px;
    color: white;
    margin: 1rem;
    cursor: pointer;
    &:hover:active {
      background-color: #0858f7;
    }
  }
  select {
    background: #ffffff;
    border-radius: 5px;
    padding: 0.4rem;
    top: 31.25%;
    bottom: 31.25%;
    color: rgb(48, 56, 65);
    font-weight: revert;
    font-family: math;
  }
  input[type="search"] {
    background: #ffffff;
    border: 1px solid #dfe7ed;
    border-radius: 4px;
    height: 1.8rem;
    padding-left: 1rem;
  }

  hr.hr_line {
    border: 1px solid #dfe7ed;
    margin-top: 1rem;
    width: 99%;
    margin: 1rem auto auto auto;
  }

  .paraDiv {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    background: #ffffff;
    border-radius: 2px;
    width: 90%;
    margin: auto;
    height: 3rem;
    text-align: center;
    align-items: center;
    margin: 1rem auto;
    color: #303841;
  }
  img.imges {
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    margin-right: 0.5rem;
  }
  .img_name_email {
    text-align: left;
    text-align: left;
    display: flex;
    font-size: 10px;
    align-items: center;
  }
  .email_img {
    color: #848484;
  }

  .charge_btn {
    background: rgb(250, 164, 57);
    border-radius: 5px;
    margin: 0 1rem 0 1rem;
    width: 13.5rem;
    height: 43px;
    border: none;
    font-size: 12px;
    color: white;
    cursor: pointer;
    &:hover:active {
      background-color: rgb(247, 138, 4);
      font-size: 16px;
    }
  }
`;

//--------------------Owner---------------------//
//---------------------Owner-------------------------//

export const OwnerDiv = styled.div`
  width: 100%;
  height: 90vh;
  padding: 1rem;
  background: #f9f9f9;
  h5.Owner_heading {
    font-size: large;
    font-family: serif;
    margin-bottom: 1rem;
    font-weight: bolder;
    margin-top: 1rem;
  }

  .Owner_details {
    width: 100%;
    /* height: 85vh; */
    padding: 1rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    background: white;
  }
  .details p {
    line-height: 37px;
    font-size: 14px;
    font-family: math;
  }
  .all_details {
    display: flex;
  }
  .all_details b {
    color: rgb(59, 105, 197);
    font-size: 21px;
    margin-right: 14px;
  }
  .Owner_photo img {
    width: 100%;
    border-radius: 100%;
  }
  .Owner_photo {
    width: 20%;
  }
  button.logOut_btn {
    background: rgb(250, 164, 57);
    border-radius: 5px;
    width: 22rem;
    height: 35px;
    border: none;
    font-size: 17px;
    color: white;
    cursor: pointer;
    margin-top: 1rem;
    &:hover:active {
      background-color: rgb(247, 138, 4);
      font-size: 16px;
    }
  }
`;
