import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AddDiscount } from "../StyleCompoents/DiscountModalStyle";
import axios from "axios";

function AdddiscountModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [val, setValue] = useState({
    Discount_Name: "",
    Discount_Value: "",
  });
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
  function submit() {
    console.log(val);
    if (val.Discount_Value >= 1 && val.Discount_Value < 100) {
      axios
        .post("http://192.168.137.1:4000/createDiscount", val)
        .then((response) => {
          // Handle success
          console.log(response.data);
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    } else {
      alert("error");
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <span>+</span> Add Discount
      </Button>

      <Modal show={show} onHide={handleClose}>
        <AddDiscount>
          <section>
            <div className="modal">
              <header closeButton>
                <h3>Create discount</h3>
                <Button variant="secondary" onClick={handleClose}>
                  X
                </Button>
              </header>
              <body>
                <div>
                  <label htmlFor="">Discount Name</label>
                  <input
                    value={val.Discount_Name}
                    type="text"
                    placeholder="Discount Name"
                    name="Discount_Name"
                    onChange={ChangeHandle}
                    required
                  />
                </div>
                <div className="discount_value">
                  <div className="left">
                    <label htmlFor="">Discount Value</label>
                    <input
                      type="number"
                      onChange={ChangeHandle}
                      value={val.Discount_Value}
                      placeholder="Discount Value"
                      name="Discount_Value"
                      min="1"
                      max="99"
                      required
                    />
                    <p>Leave the field blank to indicate the value upon sale</p>
                  </div>
                  <div className="select_discount_right">
                    <h2 className="percentage">%</h2>
                    <h2 className="doller">$</h2>
                  </div>
                </div>
              </body>
              <footer>
                <Button variant="primary" onClick={submit}>
                  SAVE
                </Button>
              </footer>
            </div>
          </section>
        </AddDiscount>
      </Modal>
    </>
  );
}

export default AdddiscountModal;
