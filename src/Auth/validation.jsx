import * as Yup from "yup";

export const itemsValidation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  //  Category: Yup.string()
  // .required('Required'),
  Price: Yup.number()
    .min(99, "Too Short")
    .max(1000, "Too Long")
    .required("Required"),
  Cost: Yup.number()
    .min(500, "Too Short")
    .max(1000, "Too Long")
    .required("Required"),
  SKU: Yup.number()
    .min(1000, "Too Short")
    .max(100000, "Too Long")
    .required("Required"),
  Barcode: Yup.number()
    .min(100000, "Must be exactly 6 characters")
    .max(999999, "Must be exactly 6 characters")
    .required("Required"),
  // email: Yup.string()
  // .email('Must be a valid email').max(255).required('Email is required'),
});
