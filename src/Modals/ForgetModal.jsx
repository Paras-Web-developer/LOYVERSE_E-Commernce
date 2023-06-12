import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import { forgetvalidation } from "../Auth/forgetvalidation";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AddDiscount } from "../StyleCompoents/DiscountModalStyle";
import facebook from "../Assets/facebook (1).png";
import apple from "../Assets/apple-logo (1).png";
import google from "../Assets/google (1).png";

function ForgetModel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [change, setChange] = useState(true);
  return (
    <>
      <p variant="primary" onClick={handleShow} className="Forget_pass">
        Forget Password ?
      </p>

      <Modal show={show} onHide={handleClose}>
        <AddDiscount>
          <section className="forget_bg">
            <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={forgetvalidation}
              onSubmit={async (values) => {
                console.log(values);
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
                setChange(false);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="modal">
                    <header closeButton>
                      <h3>Forget Password</h3>
                      <Button variant="secondary" onClick={handleClose}>
                        X
                      </Button>
                    </header>
                    {change && (
                      <div>
                        <body className="forget_body">
                          <div className="forget">
                            <label htmlFor="">Enter Your Gmail ID</label>
                            <Field
                              type="email"
                              placeholder="Enter Your Gmail ID"
                              name="email"
                              id=""
                            />
                            {errors.email && touched.email ? (
                              <div className="error">{errors.email}</div>
                            ) : null}
                            <p onClick={handleClose}>Back to Sign In</p>
                          </div>
                          <footer>
                            <button type="submit">Send</button>
                          </footer>
                          <div className="forget_social_media">
                            <h3>Or</h3>
                            <div className="social_icon">
                              <img src={google} alt="" />
                              <img src={facebook} alt="" />
                              <img src={apple} alt="" />
                            </div>
                          </div>
                        </body>
                      </div>
                    )}

                    {/* -----------------------varification Form----------------------- */}
                    {!change && (
                      <>
                        <div className="verification">
                          <h2 className="enter_varification">
                            Enter Verification Code
                          </h2>
                          <div className="code_div">
                            <input
                              type="text"
                              className="code1 code"
                              name="code"
                              placeholder="0"
                              maxlength="1"
                              required
                            />
                            <input
                              type="text"
                              className="code2 code"
                              name="code"
                              placeholder="0"
                              maxlength="1"
                              required
                            />
                            <input
                              type="text"
                              className="code3 code"
                              name="code"
                              placeholder="0"
                              maxlength="1"
                              required
                            />
                            <input
                              type="text"
                              className="code3 code"
                              name="code"
                              placeholder="0"
                              maxlength="1"
                              required
                            />
                          </div>
                          <div className="verification_btn_div">
                            <h5>
                              if you didn't receive a code! <span>Resend</span>
                            </h5>
                            <button className="verificaton_btn">Verify</button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </section>
        </AddDiscount>
      </Modal>
    </>
  );
}

export default ForgetModel;
