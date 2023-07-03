import { BsDisplay } from "react-icons/bs";
import "./style.css";
import styled from "styled-components";

export const ItemFormWrapper = styled.section`
  section {
    padding: 0.5rem 2rem;
    line-height: 2rem;
  }
  .input {
    width: 300px;
    height: 35px;
    outline: none;
    border: 1px solid #c6c8cc;
    border-radius: 2px;
    padding: 5px;
    &:out-of-range {
      color: red;
      border: 1px solid red;
    }
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  label {
    display: block;
    font-size: 1.2rem;
  }

  select {
    width: 300px;
    height: 35px;
    outline: none;
    border: 1px solid #c6c8cc;
    border-radius: 2px;
  }
  .radio-btn {
    display: flex;
    margin-top: 7px;
    gap: 1rem;
  }
  .form {
    padding: 0.7rem;
    margin-top: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .form-group1 {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 2rem;
  }
  .Inventory {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 2rem;
    h1 {
      color: #3b69c5;
    }
    hr {
      width: 100%;
    }
  }
  .Representation {
    hr {
      width: 80% !important;
    }
  }
  .form-group2 {
    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
    width: 60%;
  }
  .Track-stock-right {
    display: flex;
  }

  .switch {
    position: relative;
    top: 0.4em;
    right: 2rem;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  .switch input {
    display: none;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: gray;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
  }

  input:checked + .slider {
    background: linear-gradient(172.18deg, #1d428d 9.64%, #4478e1 92.85%);
  }

  input:checked + .slider:before {
    transform: translateX(20px);
  }

  .color-shape {
    display: flex;
    gap: 0.5rem;
  }
  .color-box {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
  }
  .box {
    width: 60px;
    height: 60px;
    cursor: pointer;
    text-align: center;
    font-size: 2rem;
    align-items: center;
    /* padding-top: 0.8rem; */
  }

  .boximg img {
    width: 60px;
    height: 60px;
  }
  .submit-btns {
    text-align: end;
    margin: 1rem 0;
  }
  .btn {
    width: 144px;
    height: 54px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn-1 {
    margin-right: 1rem;
    &:hover {
      border: 1px solid gray;
      background-color: white;
    }
  }
  .btn-2 {
    background: linear-gradient(261.25deg, #faa439 14.88%, #fbb43a 65.33%);
    color: white;
  }

  /* Error css */
  .error {
    color: red;
  }

  /* File input design */
  /* .file {
    border: 2px solid red;
  } */
  // disable input
  .inputof {
    pointer-events: none;
    opacity: 0.2;
  }
  .not-allowed {
    cursor: not-allowed;
  }
  .tik-img {
    position: relative;
    top: -55px !important;
    left: -70px;
  }
  .img-size {
    position: relative;
    top: -22px;
    left: -20px;
  }
`;
