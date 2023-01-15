import { number, object, string } from "yup";

export const defaultRequestValue = {
  patientName: "",
  age: 0,
  gender: "",
  hospitalName: "",
  hospitalPhoneNumber: 0,
  consultantName: "",
  dateOfReceivingBlood: "",
};

export const RequestFormSchema = object({
  patientName: string().trim().required("Patient Name is required"),
  age: number()
    .required()
    .positive()
    .integer()
    .min(18, "Your age must 18 or greater then 18"),
  gender: string().trim().required("Please select your gender"),
  hospitalName: string().trim().required("Hospital Name is required"),
  hospitalPhoneNumber: number().required("Hospital Phone Number is required"),
  consultantName: string().trim().required("Consultant Name is required"),
  dateOfReceivingBlood: string()
    .trim()
    .required("Date Of Receiving Blood is required"),
});
