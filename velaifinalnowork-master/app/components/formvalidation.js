import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  proof: yup
    .string()
    .matches(
      /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
      "Enter a valid aadhar number"
    )
    .required("aadhar is required"),
  first_name: yup.string().required("Firstname is required"),
});

export default loginValidationSchema;
