import { object, string } from "yup";

export const defaultValue = { email: "", password: "" };

export const SignInSchema = object({
  email: string()
    .trim()
    .required("Email Address is required")
    .email("Email address must be valid"),
  password: string()
    .trim()
    .required("Password is required")
    .min(8, "Password must have 8 character"),
});

export const defaultSignup = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

export const SignUpSchema = object({
  firstName: string().trim().required("First Name is required"),
  lastName: string().trim().required("Last Name is required"),
  email: string()
    .trim()
    .required("Email Address is required")
    .email("Email address must be valid"),
  password: string()
    .trim()
    .required("Password is required")
    .min(8, "Password must have 8 character"),
});
