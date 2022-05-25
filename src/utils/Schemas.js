import * as yup from "yup";

export const EnquirySchema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  datefrom: yup.string().required("Please enter date of arrival"),
  dateto: yup.string().required("Please enter date of check out"),
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

export const EstablishmentSchema = yup.object().shape({
  title: yup.string().required("Please enter title of establishment"),
  punchline: yup
    .string()
    .required("Please enter a punchline for the establishment"),
  description: yup
    .string()
    .required("Please enter a description")
    .min(10, "The description must be at least 10 characters"),
});
