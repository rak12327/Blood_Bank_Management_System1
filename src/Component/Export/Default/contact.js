import { object, string } from "yup";

export const defaultContactUs = { name: "", email: "", message: "" };

export const ContactUsSchema = object({
  name: string().trim().required("Name is required"),
  email: string()
    .trim()
    .required("Email Address is required")
    .email("Email address must be valid"),
  message: string().trim().required("Message is required"),
});
