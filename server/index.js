import path from "path";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { from } from "stylis";

dotenv.config(); // Ensure environment variables are loaded

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const contactEmail = nodemailer.createTransport({
  host: process.env.CPANEL_SMTP_HOST, 
  port: process.env.CPANEL_SMTP_PORT || 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  }
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to send");
  }
});

app.post("/api/contact", bodyParser.urlencoded({ extended: false }), (req, res) => {
  const { name, email, phone, message } = req.body;
  const mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Website Contact Form Submission",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `
  };
  
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.status(500).json({ code: 500, message: "Failed to send message" });
    } else {
      res.status(200).json({ code: 200, message: "Message sent successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is online in port: ${PORT}`)
  console.log("Email Address:", process.env.EMAIL_ADDRESS);
  console.log("Email Password:", process.env.EMAIL_PASS);
  console.log("SMTP Host:", process.env.CPANEL_SMTP_HOST);
  console.log("SMTP Port:", process.env.CPANEL_SMTP_PORT);
})