import "./style.css";
import styled from "styled-components";

//-------------------------------- Layout page Open-------------------------------------------->
//-------------------------------- Layout page Open-------------------------------------------->

export const LayoutDiv = styled.div`
  .TopNavber {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
  }

  .SidNavbar {
    width: 15%;
    height: 100vh;
    position: fixed;
    top: 3.5rem;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  }
  .pageContent {
    width: 85%;
    margin-top: 3.5rem;
    float: right;
  }

  .footer {
    width: 85%;
    float: right;
  }
`;

//-------------------------------- Layout page Close-------------------------------------------->
//-------------------------------- Layout page Close-------------------------------------------->

//-------------------------------- Sing IN page Open-------------------------------------------->
//-------------------------------- Sing IN page Open-------------------------------------------->

export const SingInDiv = styled.div`
  background: linear-gradient(
    172.18deg,
    rgb(29, 66, 141) 9.64%,
    rgb(68, 120, 225) 92.85%
  );
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .topheadingLog {
    text-align: center;
  }

  .topheadingLog img {
    width: 6rem;
    margin-bottom: -28px;
  }
  .singIn_heading1 {
    text-transform: uppercase;
    color: #fbb43a;
    text-align: center;
  }
  .paraHeading {
    color: white;
    text-align: center;
    font-size: x-small;
    text-transform: uppercase;
    margin-bottom: 2rem;
    letter-spacing: 0.33em;
  }
  .input_tag_container {
    margin: 10px 0px 10px 0px;
  }
  h3.singIn_heading {
    text-transform: uppercase;
    text-align: center;
    font-size: 23px;
    line-height: 34px;
  }
  .singin_inner_container {
    padding: 2rem;
    background-color: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
      0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 15px;
    width: 22rem;
  }
  .lables {
    color: #303841;
  }

  input.input_tag {
    background: #ffffff;
    border: 1px solid #c6c8cc;
    border-radius: 4px;
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem;
    outline: none;
  }
  p.Forget_pass {
    float: right;
    margin: 20px 0px 20px 0px;
    color: #303841;
    cursor: pointer;
  }
  button.singIn_btn {
    background: rgb(250, 164, 57);
    border-radius: 5px;
    width: 100%;
    height: 50px;
    border: none;
    font-size: 14px;
    color: white;
    cursor: pointer;
    &:hover:active {
      background-color: rgb(247, 138, 4);
      font-size: 16px;
    }
  }
  .bottom_para.Sing_up {
    text-align: center;
    color: white;
    margin: 1rem;
    letter-spacing: 1px;
    font-size: small;
  }
  .error {
    color: red;
    font-size: small;
  }
  .Navigating:hover {
    color: #0000ff;
    cursor: pointer;
  }
`;
//-------------------------------- Sing IN page Close-------------------------------------------->
//-------------------------------- Sing IN page Close-------------------------------------------->

//-------------------------------- Sing Up page Open-------------------------------------------->
//-------------------------------- Sing UP page Open-------------------------------------------->

export const SingUpDiv = styled.div`
  background: linear-gradient(
    172.18deg,
    rgb(29, 66, 141) 9.64%,
    rgb(68, 120, 225) 92.85%
  );
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .topheadingLog {
    text-align: center;
  }

  .topheadingLog img {
    width: 6rem;
    margin-bottom: -28px;
  }

  .singIn_heading1 {
    text-transform: uppercase;
    color: #fbb43a;
    text-align: center;
  }
  .paraHeading {
    color: white;
    text-align: center;
    font-size: x-small;
    text-transform: uppercase;
    margin-bottom: 2rem;
    letter-spacing: 0.33em;
  }
  .input_tag_container {
    margin: 10px 0px 10px 0px;
  }
  h3.singIn_heading {
    text-transform: uppercase;
    text-align: center;
    font-size: 23px;
    line-height: 34px;
  }
  .singin_inner_container {
    padding: 2rem;
    background-color: #ffffff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
      0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 15px;
    width: 41rem;
  }
  .lables {
    color: #303841;
  }
  .upptage {
    display: flex;
  }

  input.input_tag {
    background: rgb(255, 255, 255);
    border: 1px solid rgb(198, 200, 204);
    border-radius: 4px;
    width: 18rem;
    height: 2.5rem;
    padding: 0.5rem;
    outline: none;
  }
  .Forget_pass {
    margin: 20px 0px 20px 0px;
    color: rgb(93 100 108);
  }
  button.singIn_btn {
    background: rgb(250, 164, 57);
    border-radius: 5px;
    width: 12rem;
    height: 50px;
    border: none;
    font-size: 14px;
    color: white;
    cursor: pointer;
    &:hover:active {
      background-color: rgb(247, 138, 4);
      font-size: 16px;
    }
  }
  .btn_singUP {
    text-align: center;
  }
  .bottom_para.Sing_up {
    text-align: center;
    color: white;
    margin: 1rem;
    letter-spacing: 1px;
    font-size: small;
  }
  .error {
    color: red;
    font-size: small;
  }
  .Navigating:hover {
    color: #0000ff;
    cursor: pointer;
  }
`;
//-------------------------------- Sing UP page Close-------------------------------------------->
//-------------------------------- Sing Up page Close-------------------------------------------->

//-------------------------------- PrivatHeader page Open-------------------------------------------->
//-------------------------------- PrivateHeader page Open-------------------------------------------->

export const PrivateHeaderDiv = styled.div`
  background: #3b69c5;

  .headerContainer {
    width: 98%;
    display: flex;
    margin: auto;
    justify-content: space-between;
    padding-top: 1rem;
  }

  .topheadingLog {
    display: flex;
  }
  .nav.ownerNav {
    background: none;
  }
  .topheadingLog img {
    width: 4rem;
    margin: -15px -7px -15px;
  }

  .singIn_heading1 {
    text-transform: uppercase;
    text-align: center;
    color: rgb(253 169 24);
    font-size: medium;
  }
  .paraHeading {
    color: white;
    font-size: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.33em;
  }
  .header_page_button {
    display: flex;
  }

  .nav {
    width: 7rem;
    height: 30px;
    color: white;
    background: rgb(91, 132, 214);
    font-size: small;
    margin: 0px 12px 0px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12rem;
  }
  a {
    text-decoration: none;
  }
  select {
    background: none;
    border: none;
    color: white;
    outline: none;
  }
  svg.logNav {
    font-size: 24px;
    margin: -2px 6px -8px 0px;
  }
  span.logcount {
    background: white;
    color: black;
    border-radius: 50%;
    padding: 2px 6px;
    margin: 7px;
  }
`;
//-------------------------------- PrivatHeader page Close-------------------------------------------->
//-------------------------------- PrivateHeader page Close-------------------------------------------->

//-------------------------------- side Navbar page Open-------------------------------------------->
//-------------------------------- side Nabbar page Open-------------------------------------------->

export const SideNavbarDiv = styled.div`
  .cVSgPc .SideNave_container {
    width: 100%;
    margin-top: 1rem;
  }
  .SideNave_container a {
    text-decoration: none;
    color: #303841;
  }
  p.SideNave {
    padding: 1rem;
    margin: 1px;
  }
  svg.sideNave_Log {
    margin-right: 0.5rem;
    margin: 0px 16px -3px 0px;
  }
  .sideSelecter {
    border: none;
    color: #303841;
    width: 70%;
    outline: none;
  }
  .SideNave_container a.active {
    color: #060606;
    border: none;
    & p {
      background: #f4f8fb;
    }
  }
`;

//-------------------------------- side Navber page Close-------------------------------------------->
//-------------------------------- side Navber page Close-------------------------------------------->
