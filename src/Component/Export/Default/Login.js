import { object, string } from "yup";

//Login Default value
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

//Register Default value
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

//Reset Default value
export const ResetDefault = {
  newPassword: "",
  confirmPassword: "",
};
export const ResetSchema = object({
  newPassword: string()
    .trim()
    .required("New Password is required")
    .min(8, "New Password must have 8 character"),
  confirmPassword: string()
    .trim()
    .required("Confirm Password is required")
    .min(8, "Confirm Password must have 8 character"),
});

// Forgot password Default value
export const ForgotSchema = string()
  .trim()
  .required("Email is required")
  .email("Your email is not valid");
