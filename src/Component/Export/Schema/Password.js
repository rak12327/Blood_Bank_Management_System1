import { object, string } from "yup";

export const passwordSchema = object({
  currentPassword: string()
    .trim()
    .required("Current Password is required")
    .min(8, "Current password must have 8 character"),
  newPassword: string()
    .trim()
    .required("New Password is required")
    .min(8, "New password must have 8 character"),
  confirmPassword: string()
    .trim()
    .required("Confirm Password is required")
    .min(8, "Confirm password must have 8 character"),
});
