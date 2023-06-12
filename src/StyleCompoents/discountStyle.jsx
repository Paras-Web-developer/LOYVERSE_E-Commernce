import "./style.css";
import styled from "styled-components";

export const DiscountWrapper = styled.section`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    button {
      font-size: 1.1rem;
      width: 147px;
      height: 38px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background: linear-gradient(261.25deg, #faa439 14.88%, #fbb43a 65.33%);
      color: white;
    }
  }
  section {
    padding: 0 1rem;
    margin: 0rem 1rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    height: 70vh;

    .search {
      display: flex;
      align-items: center;
      justify-content: end;
      /* margin-right: 1.5rem; */
      /* border: 1px solid red; */
      div {
        position: relative;
        right: -25px;
        top: 2px;
      }
      input {
        background: rgb(255, 255, 255);
        border: 1px solid rgb(223, 231, 237);
        border-radius: 4px;
        margin: 1rem 0;
        padding-left: 2rem;
        width: 158px;
        height: 38px;
        outline: none;
      }
    }
    .cart {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      gap: 1.5rem;
      flex-wrap: wrap;
    }
    .carts {
      display: flex;
      gap: 1rem;
      align-items: center;
      width: 232px;
      height: 60px;
      padding: 1rem 1rem;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      .img {
        padding: 0.4rem;
        background-color: #f4f8fb;
        border-radius: 50%;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      h4 {
        font-weight: 100;
      }
      p {
        font-weight: bold;
      }
    }
  }
`;
