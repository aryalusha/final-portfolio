require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Debugging to check if environment variables are loaded correctly
console.log('Environment Variables:', process.env);

// Set up the transporter with email credentials from .env
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route to handle sending email
app.post('/send-email', async (req, res) => {
  const { fullName, email, message } = req.body; // Extract user data from request

  if (!fullName || !email || !message) {
    return res.status(400).json({ message: "Please provide all required fields." });
  }

  try {
    let info = await transporter.sendMail({
      from: process.env.EMAIL_USER, // Your email
      to: process.env.MY_EMAIL, // Your email address to receive messages
      subject: `Contact Request from ${fullName}`,
      text: `Message from ${fullName} (${email}):\n\n${message}`,
    });

    console.log('Email sent: ', info);
    res.status(200).json({ message: 'Email sent successfully!', info });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Failed to send email.', error });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
