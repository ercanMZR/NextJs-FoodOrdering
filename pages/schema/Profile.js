import * as Yup from "yup";

export const profileSchema =Yup.object({
    fullName:Yup.string()
    .required("Full  name is required.")
    .min(3,"Full name must be at least 3 characters."),
    phoneNumber:Yup.string()
    .required("Phone number is required")
    .min(10,"phone number must be at least 10 characters."),
    email:Yup.string().required("Email is required.").email("Email is invalid"),
    job:Yup.string().required("Job is required."),
    bio:Yup.string().required("Bio is required"),
})


