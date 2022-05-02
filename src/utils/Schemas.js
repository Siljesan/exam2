import * as yup from "yup";

export const EnquirySchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  date: yup.string().required("Please enter planned date of visit"),
  information: yup
    .string()
    .required("Please enter additional information")
    .min(5, "The message must be at least 5 characters"),
});

export const ContactSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  subject: yup.string().required("Please enter subject"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(5, "The message must be at least 5 characters"),
});

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  password: yup.string().required("Please enter password"),
});
