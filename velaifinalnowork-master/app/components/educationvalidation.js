import * as yup from "yup";

const eduValidationSchema = yup.object().shape({
  inisitute: yup.string().required("Insitute name is Required"),
  eduaction_level: yup
    .string()
    .required("education level is Required SSLC/HSC/UG/PG"),
  Grade: yup.string().required("Grade is required"),
});

export default eduValidationSchema;
