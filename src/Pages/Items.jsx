import React, { useState } from "react";
import { Formik, Field, Form } from "formik";

import { ItemFormWrapper } from "../StyleCompoents/itemsStyle";
import { itemsValidation } from "../Auth/validation";
import polygonimg from "../Assets/Polygon 2.png";
import starimg from "../Assets/Star 1.png";
const Items = () => {
  // radio button
  const [input, setInput] = useState(true);
  let chack = "";
  if (input === true) {
    chack = "checked";
  } else {
    chack = "";
  }

  const [boxes, setBoxes] = useState([
    { id: 1, color: "red", checked: true, padding: "0.8rem" },
    { id: 2, color: "blue", checked: false, padding: "0.8rem" },
    { id: 3, color: "green", checked: false, padding: "0.8rem" },
    { id: 4, color: "yellow", checked: false, padding: "0.8rem" },
    { id: 5, color: "orange", checked: false, padding: "0.8rem" },
    { id: 6, color: "purple", checked: false, padding: "0.8rem" },
    { id: 7, color: "pink", checked: false, padding: "0.8rem" },
    { id: 8, color: "cyan", checked: false, padding: "0.8rem" },
    { id: 9, color: "magenta", checked: false, padding: "0.8rem" },
    { id: 10, color: "teal", checked: false, padding: "0.8rem" },
    { id: 11, img: polygonimg, checked: false, style: "", padding: "1rem" },
    { id: 12, img: starimg, checked: false, style: "", padding: "1rem" },
  ]);
  const handleBoxClick = (id) => {
    const updatedBoxes = boxes.map((box) => {
      if (box.id === id) {
        return { ...box, checked: true, style: "tik-img" };
      }
      return { ...box, checked: false, style: "" };
    });

    setBoxes(updatedBoxes);
  };
  const [on, setOn] = useState("inputof");
  function toggle() {
    console.log(on);
    setOn(on === "inputof" ? " " : "inputof");
  }
  function locate(e) {
    const val = e.target.value;
    if (val === "Category1") {
      console.log("Category1");
    }
    if (val === "Category2") {
      console.log("Category2");
    }
    if (val === "Category3") {
      console.log("Category3");
    }
    if (val === "Category4") {
      console.log("Category4");
    }
    if (val === "Category5") {
      console.log("Category5");
    }
  }
  return (
    <>
      <ItemFormWrapper>
        <section>
          <h1>Create Item</h1>
          <Formik
            initialValues={{
              name: "",
              Category: "",
              Price: "",
              soldby: "",
              Cost: "",
              SKU: "",
              Barcode: "",
            }}
            validationSchema={itemsValidation}
            onSubmit={async (values) => {
              console.log(values);
              await new Promise((resolve) => setTimeout(resolve, 5000));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form">
                  <div className="form-group1">
                    <div className="nameField">
                      <label htmlFor="">Name</label>
                      <Field
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="input"
                      />
                      {errors.name && touched.name ? (
                        <div className="error">{errors.name}</div>
                      ) : null}
                    </div>
                    <div className="categoryField">
                      <label htmlFor="">Category</label>
                      <select name="Category" id="" onClick={locate}>
                        <option value="Category1" name="Category">
                          Category1
                        </option>
                        <option value="Category2" name="Category">
                          Category2
                        </option>
                        <option value="Category3" name="Category">
                          Category3
                        </option>
                        <option value="Category4" name="Category">
                          Category4
                        </option>
                        <option value="Category5" name="Category">
                          Category5
                        </option>
                      </select>
                    </div>
                    <div className="soldBy">
                      <label htmlFor="">Sold By</label>
                      <div className="radio-btn">
                        <Field type="radio" name="soldby" id="" value="Each" />
                        <h5>Each</h5>
                        <Field
                          type="radio"
                          name="soldby"
                          id=""
                          value="Weight"
                        />
                        <h5>Weight</h5>
                      </div>
                    </div>
                    <div className="price">
                      <label htmlFor="">Price</label>
                      <Field
                        type="number"
                        name="Price"
                        placeholder="Price"
                        className="input"
                        min="99"
                        max="1000"
                      />
                      {errors.Price && touched.Price ? (
                        <div className="error">{errors.Price}</div>
                      ) : null}
                    </div>
                    <div className="Cost">
                      <label htmlFor="">Cost</label>
                      <Field
                        type="number"
                        name="Cost"
                        placeholder="Cost"
                        className="input"
                        min="500"
                        max="1000"
                      />
                      {errors.Cost && touched.Cost ? (
                        <div className="error">{errors.Cost}</div>
                      ) : null}
                    </div>
                    <div className="SKU">
                      <label htmlFor="">SKU</label>
                      <Field
                        type="number"
                        name="SKU"
                        placeholder="100000"
                        className="input"
                        min="1000"
                        max="100000"
                      />
                      {errors.SKU && touched.SKU ? (
                        <div className="error">{errors.SKU}</div>
                      ) : null}
                    </div>
                    <div className="Barcode">
                      <label htmlFor="">Barcode</label>
                      <Field
                        type="text"
                        name="Barcode"
                        placeholder="Barcode"
                        className="input"
                      />
                      {errors.Barcode && touched.Barcode ? (
                        <div className="error">{errors.Barcode}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="Inventory">
                    <h1>Inventory</h1>
                    <hr />
                  </div>
                  <div className="form-group2">
                    <h1>Track Stock</h1>
                    <div className="Track-stock-right">
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider" onClick={toggle}></span>
                      </label>

                      <div>
                        <label htmlFor="">In Stock</label>
                        <div className="not-allowed">
                          <Field
                            type="number"
                            name="Stock"
                            placeholder="In Stock"
                            className={on}
                            min="1"
                            style={{
                              padding: "10px 50px 10px 5px",
                              outline: "none",
                              opacity: "0.9 !importtant",
                            }}
                          ></Field>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="Inventory Representation">
                    <h1>Representation on POS</h1>
                    <hr />
                  </div>
                  <div className="color-shape">
                    <Field
                      type="radio"
                      name="color"
                      value="Color and Shape"
                      onClick={() => {
                        setInput(true);
                      }}
                      checked={chack}
                    ></Field>
                    <h5>Color and Shape</h5>
                    <Field
                      onClick={() => {
                        setInput(false);
                      }}
                      type="radio"
                      name="color"
                      value="image"
                    />
                    <h5>image</h5>
                    {/* <input type="file" name="" id="" className="file" accept="image/png, image/jpg, image/gif, image/jpeg"/> */}
                  </div>
                  {input === true ? (
                    <div className="color-box">
                      {boxes.map((box) => {
                        return (
                          <>
                            <div
                              key={box.id}
                              className="box"
                              style={{
                                backgroundColor: box.color,
                                padding: box.padding,
                              }}
                              onClick={() => handleBoxClick(box.id)}
                            >
                              {box.checked ? "✔" : ""}
                              <img
                                className={`img-size ${box.style}`}
                                src={box.img}
                                alt=""
                                key={box.id}
                                onClick={() => handleBoxClick(box.id)}
                              />
                            </div>
                          </>
                        );
                      })}
                    </div>
                  ) : null}
                  {input === false ? <input type="file" src="" alt="" /> : null}
                </div>
                <div className="submit-btns">
                  <button className="btn btn-1">Cancel</button>
                  <button className="btn btn-2" type="submit">
                    Save
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </ItemFormWrapper>
    </>
  );
};

export default Items;
