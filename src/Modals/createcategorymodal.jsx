import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AddDiscount } from "../StyleCompoents/DiscountModalStyle";

function Createcategorymodal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <span>+</span> Add category
      </Button>

      <Modal show={show} onHide={handleClose}>
        <AddDiscount>
          <section>
            <div className="modal">
              <header closeButton>
                <h3>Create category</h3>
                <Button variant="secondary" onClick={handleClose}>
                  X
                </Button>
              </header>
              <body className="categotybody">
                <div>
                  <label htmlFor="">Category Name</label>
                  <input type="text" placeholder="Category Name" />
                </div>
                <div className="categorymodal">
                  <h1>Category Color</h1>
                  <hr />
                </div>
                <div className="color-box">
                  <div className="box1 box" value="Default">
                    ✔
                  </div>
                  <div className="box2 box" value="red"></div>
                  <div className="box3 box" value="Pink"></div>
                  <div className="box4 box" value="Orange"></div>
                </div>
                <div className="color-box">
                  <div className="box5 box" value="Light Green"></div>
                  <div className="box6 box" value="Green"></div>
                  <div className="box7 box" value="Blue"></div>
                  <div className="box8 box" value="Purple"></div>
                </div>
              </body>
              <footer>
                <Button variant="primary" onClick={handleClose}>
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

export default Createcategorymodal;
