import "./style.css";
import styled from "styled-components";

export const AddDiscount = styled.section`
 input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  section {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 1;
    top: 0;
    background-color: #101010ab;
  }
  .modal {
    box-shadow: 0px 12px 28px 0px rgba(0, 0, 0, 0.2),
      0px 2px 4px 0px rgba(0, 0, 0, 0.1),
      0px 0px 0px 1px rgba(255, 255, 255, 0.05) inset;
    position: absolute;
    top: 15%;
    left: 36%;
    background-color: white;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #3c69c5;
      padding: 1rem;
      color: white;
      h3 {
        font-size: 1.4rem;
      }
      button {
        position: relative;
        top: -35px;
        right: -30px;
        background-color: white;
        padding: 0.5rem 0.8rem;
        border-radius: 50%;
        font-size: 1.3rem;
        font-weight: bold;
        border: 1px solid white;
        cursor: pointer;
      }
    }
    body {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      label {
        font-weight: bold;
        display: block;
      }
      input {
        width: 360px;
        height: 50px;
        padding: 0 10px;
        outline: none;
        margin-top: 10px;
        border: 1.5px solid #c6c8cc;
        border-radius: 3px;
      }
      .discount_value {
        display: flex;
        align-items: center;
        .left {
          input {
            width: 230px;
            &:out-of-range {
              color: red;
              border: 1px solid red;
            }
          }
          p {
            margin-top: 5px;
            width: 250px;
            color: #aeaebd;
          }
        }
        .select_discount_right {
          display: flex;
          border-radius: 3px;
          margin-top: -12px;
          align-items: center;
          justify-content: space-around;
          width: 110px;
          height: 50px;
          border: 1.5px solid #c6c8cc;
          .percentage {
            background: #faa439;
            border-radius: 5px;
            width: 48px;
            height: 40px;
            text-align: center;
            color: white;
            font-weight: 500;
            padding-top: 5px;
            cursor: pointer;
            &:hover {
              color: #faa439;
              background-color: white;
              border: 1px solid #faa439;
            }
          }
          .doller {
            padding: 0.3rem 1rem;
            cursor: pointer;
            &:hover {
              color: #faa439;
            }
          }
        }
      }
    }
    footer {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
      button {
        background: linear-gradient(261.25deg, #faa439 14.88%, #fbb43a 65.33%);
        border-radius: 5px;
        width: 110px;
        height: 45px;
        color: white;
        outline: none;
        border: none;
        cursor: pointer;
      }
    }
  }

  /* ------------------------------- categorymodal css start ------------------------------ */
  .categotybody {
    gap: 1rem !important;
  }
  .categorymodal {
    display: flex;
    align-items: center;
    justify-content: space-around;
    h1 {
      color: #3b69c5;
    }
    hr {
      width: 60%;
      height: 0;
    }
  }
  .color-box {
    display: flex;
    justify-content: space-between;
    /* gap: 1rem; */
    /* margin-top: 1rem; */
  }
  .box {
    width: 70px;
    height: 70px;
    cursor: pointer;
  }
  .box1 {
    background-color: #e2e2e2;
    color: black;
    text-align: center;
    font-size: 2rem;
    align-items: center;
    padding-top: 0.8rem;
  }
  .box2 {
    background-color: #f44236;
  }
  .box3 {
    background-color: #ea1e63;
  }
  .box4 {
    background-color: #ff9700;
  }
  .box5 {
    background-color: #cddc39;
  }
  .box6 {
    background-color: #4cb050;
  }
  .box7 {
    background-color: #2196f3;
  }
  .box8 {
    background-color: #9c28b1;
  }
  .box9 {
    background-color: white;
    border: 1px solid #e2e2e2;
  }
  .box10 {
    background-color: white;
    border: 1px solid #e2e2e2;
    border-radius: 50%;
  }
  /* ------------------------------- categorymodal css End ------------------------------ */

  /* ------------------------------- forget css start ------------------------------ */
  .error {
    color: red;
  }
  .forget_bg {
    background: linear-gradient(
      172.18deg,
      rgb(29, 66, 141) 9.64%,
      rgb(68, 120, 225) 92.85%
    );
  }
  .forget {
    p {
      color: gray;
      cursor: pointer;
      margin: 1rem 0;
      font-weight: lighter;
      &:hover {
        color: #faa439;
      }
    }
  }
  .forget_body {
    gap: 1rem !important;
  }
  .forget_social_media {
    display: flex;
    flex-direction: column;
    /* line-height: 4rem; */
    align-items: center;
    .social_icon {
      display: flex;
      gap: 1rem;
      /* margin-bottom: 3rem; */
      img {
        margin-top: 1rem;
        cursor: pointer;
        width: 30px;
        height: 30px;
      }
    }
  }
  /* ----------------------------verification------------------------  */

  .verification {
    h2 {
      margin: 1rem;
    }
    input[type="text"] {
      outline: none;
    }
  }

  .enter_varification {
    text-align: center;
  }
  .code_div {
    display: flex;
    gap: 1rem;
    padding: 0 1rem;
    margin: 2rem;
    justify-content: space-around;
  }
  .code {
    font-size: 2rem;
    width: 50px;
    height: 50px;
    text-align: center;
    border: 1px solid gray;
    border-radius: 50%;
  }

  .verification_btn_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    span {
      color: #faa439;
      cursor: pointer;
    }
  }
  .verificaton_btn {
    background: linear-gradient(261.25deg, #faa439 14.88%, #fbb43a 65.33%);
    border-radius: 5px;
    width: 80%;
    margin-bottom: 1rem;
    border-radius: 0;
    height: 45px;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
  }
  /* ------------------------------- forget css End ------------------------------ */
`;
