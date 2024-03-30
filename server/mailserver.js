require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post(
  "/submit-form",
  [
    body("name")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Name must be specified."),
    body("email").isEmail().withMessage("Email must be a valid email address."),
    body("message")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Message must be specified."),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      // port: 587,
      auth: {
        // user: process.env.VITE_EMAIL,
        user: "ivsanmas@gmail.com",
        pass: "Miloradmimoslav26",
        // pass: process.env.VITE_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: "contact@ivanmiceta.dev",
      subject: `New message from ${name}`,
      text: message,
    };

    transporter
      .sendMail(mailOptions)
      .then(info => {
        console.log("Email sent: " + info.response);
        res.status(200).send("Email sent");
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("Error sending email");
      });
  }
);

app.listen(5173, () =>
  console.log("Server running on port 5173", process.env.VITE_EMAIL)
);
