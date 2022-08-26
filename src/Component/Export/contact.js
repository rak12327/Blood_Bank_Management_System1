// import nodemailer from "nodemailer";

// export default async (req, res) => {
//   require("dotenv").config();
//   const { name, email, phoneNumber, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "rohitpramanik30593@gmail.com",
//       pass: "sqzankfdytcvxvux",
//     },
//   });

//   const mailData = {
//     from: email,
//     to: "rohitpramanik30593@gmail.com",
//     subject: `Message From ${name}`,
//     html: `
//         <h4>${name} submitted contact request with following details:</h4>
//         <p><strong>Name: </strong>${name}</p>
//         <p><strong>Email: </strong>${email}</p>
//         <p><strong>Phone Number: </strong>${phoneNumber}</p>
//         <p><strong>Message: </strong>${message}</p>
//         `,
//   };

//   transporter.sendMail(mailData, function (err, result) {
//     if (err) {
//       console.log(err);
//       res.status(503).json({ message: "Unable to send mail" });
//     } else {
//       res.status(200).json({ message: "Sent mail" });
//       console.log(result);
//     }
//   });
// };
