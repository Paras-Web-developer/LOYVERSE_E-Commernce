import React, { useState } from "react";
import { SingUpDiv } from "../StyleCompoents/styleComoent";
import GroupIcon from "../Assets/GroupIcon.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let emaE = "",
  passE = "",
  coutE = "";
const SingUp = () => {
  const navigate = useNavigate();
  const [erro, setErrorPassword] = useState("Please enter business name ");
  const [errob, setErrorPasswordb] = useState("");

  const [val, setValue] = useState({
    Business_Name: "",
    email: "",
    password: "",
    Country: "",
  });

  const SubmitForm = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      axios
        .post("http://192.168.137.1:4000/signup", val)
        .then((response) => {
          // Handle success
          window.location.reload();
          // console.log(response.data);
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    }, 2000);
    let emailPattern = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailPattern.test(val.email)) {
      emaE = setErrorPassword("");
      if (val.password.length === 8) {
        passE = setErrorPassword("");
        if (val.Country !== "") {
          coutE = "";
          setErrorPassword("");
          // console.log(val.email, val.Business_Name, val.Country, val.password);
        } else {
          setErrorPassword("Plase enter country name");
          coutE = erro;
        }
      } else {
        setErrorPassword("Please ente valid password");
        passE = erro;
      }
    } else {
      setErrorPassword("Please enter valid email");
      emaE = erro;
    }
  };

  const ChangeHandle = (e) => {
    setValue({ ...val, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    setValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const Navgte = () => {
    navigate("/");
  };

  return (
    <SingUpDiv>
      <div className="SingInPage_contianer">
        <div className="topheadingLog">
          <img src={GroupIcon} alt="" />
          <h1 className="singIn_heading1">Loyverse</h1>
          <p className="paraHeading">POint of Sale</p>
        </div>
        <div className="singin_inner_container">
          <h3 className="singIn_heading">SIGN UP</h3>
          <div className="upptage">
            <div className="input_tag_container">
              <label className="lables">Business Name</label>
              <input
                className="input_tag"
                type="text"
                name="Business_Name"
                value={val.Business_Name}
                placeholder="Business Name"
                onChange={ChangeHandle}
                required
              />
              <p className="error">{errob}</p>
            </div>
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
              />
              <p className="error">{emaE}</p>
            </div>
          </div>
          <div className="upptage">
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
              />
              <p className="error">{passE}</p>
            </div>
            <div className="input_tag_container">
              <label className="lables">Country</label>
              <input
                className="input_tag"
                type="text"
                name="Country"
                value={val.Country}
                placeholder="Select Country"
                onChange={ChangeHandle}
                required
              />
              <p className="error">{coutE}</p>
            </div>
          </div>
          <p className="Forget_pass">
            By Submit this you have accept trem & conditions and privacy policy
          </p>
          <br></br>
          <div className="btn_singUP">
            <button className="singIn_btn" onClick={SubmitForm}>
              SIGN UP
            </button>
          </div>
        </div>
        <p className="bottom_para Sing_up">
          Already Registered user? Please{" "}
          <span className="Navigating" onClick={Navgte}>
            SIGN IN
          </span>{" "}
          here
        </p>
      </div>
    </SingUpDiv>
  );
};

export default SingUp;
