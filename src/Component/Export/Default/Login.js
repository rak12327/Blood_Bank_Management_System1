import { object, string } from "yup";

export const defaultValue = { email: "", password: "" };

export const LoginUserSchema = object({
  email: string()
    .trim()
    .required("Email Address is required")
    .email("Email address must be valid"),
  password: string()
    .trim()
    .required("Password is required")
    .min(8, "Password must have 8 character"),
});
