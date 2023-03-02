import * as yup from "yup";

const workvalidationSchema = yup.object().shape({
  company_name: yup.string().required("Company name is Required"),
  industry: yup.string().required("industry Type is Required"),
  Designation: yup.string().required("Designation is required"),
  job_description: yup
    .string()
    .required("job description is required")
    .min(10, "your job description must have atleast 10 words"),
});

export default workvalidationSchema;
