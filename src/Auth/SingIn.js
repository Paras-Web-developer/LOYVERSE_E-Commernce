import React, { useState } from "react";
import { SingInDiv } from "../StyleCompoents/styleComoent";
import GroupIcon from "../Assets/GroupIcon.png";
import { useNavigate } from "react-router-dom";
import ForgetModel from "../Modals/ForgetModal";
import axios from "axios";

const SingIn = () => {
  const navigate = useNavigate();
  const [errorpassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [val, setValue] = useState({
    email: "",
    password: "",
  });

  const SubmitForm = async (e) => {
    e.preventDefault();

    let emailPattern = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailPattern.test(val.email)) {
      setErrorEmail("");
      if (val.password.length >= 5 && val.password.length < 15) {
        axios
          .post("http://192.168.137.1:4000/signin", val)
          .then((response) => {
            // Handle success
            setTimeout(() => {
            alert("login Succesful");
            }, 1000);
            window.location.reload();
            console.log(response.data);
            localStorage.setItem("Token", response.data.token);
          })
          .catch((error) => {
            // Handle error
            setTimeout(() => {
            alert(error);
            }, 100);
            console.error(error);
          });
        setErrorPassword("");
      } else {
        setErrorPassword("Please Enter valid password");
      }
    } else {
      setErrorEmail("Please Enter valid email");
    }
  };

  // Question 1   ?
  const ChangeHandle = (e) => {
    const { name, value } = e.target;
    setValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const Navgte = () => {
    navigate("/SingUp");
  };

  return (
    <SingInDiv>
      <div className="SingInPage_contianer">
        <div className="topheadingLog">
          <img src={GroupIcon} alt="" />
          <h1 className="singIn_heading1">Loyverse</h1>
          <p className="paraHeading">POint of Sale</p>
        </div>
        <div className="singin_inner_container">
          <h3 className="singIn_heading">SIGN IN</h3>

          <div className="input_tag_container">
            <label className="lables">Email</label>
            <input
              className="input_tag"
              type="email"
              name="email"
              value={val.email}
              placeholder="Email ID"
              onChange={ChangeHandle}
              required
            ></input>
            <p className="error">{errorEmail}</p>
          </div>

          <div className="input_tag_container">
            <label className="lables">Password</label>
            <input
              className="input_tag"
              type="password"
              name="password"
              value={val.password}
              placeholder="Password"
              onChange={ChangeHandle}
              required
            ></input>
            <p className="error">{errorpassword}</p>
          </div>
          <ForgetModel />
          <br></br>
          <button className="singIn_btn" onClick={SubmitForm}>
            SING IN
          </button>
        </div>
        <p className="bottom_para Sing_up">
          Not Registered? Please{" "}
          <span className="Navigating" onClick={Navgte}>
            SIGN UP
          </span>{" "}
          here
        </p>
      </div>
    </SingInDiv>
  );
};

export default SingIn;
