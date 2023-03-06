import * as yup from "yup";

const companyValidationSchema = yup.object().shape({
  // proof
  // number
  // emailid
  designation: yup.string().required("designation is required"),
  location: yup.string().required("location is required"),
  companyname: yup.string().required("companyname is required"),
  username: yup.string().required("username is required"),
  number: yup.number().required("number is required"),
  emailid: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  //   location: yup.string().required("location is required"),
  proof: yup
    .string()
    .matches(
      /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
      "Enter a valid aadhar number"
    )
    .required("aadhar is required"),
  //   username: yup.string().required("username is required"),
});

export default companyValidationSchema;
