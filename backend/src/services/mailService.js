const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendMail({ to, subject, text, html }) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject,
    text,
    html,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw new Error('Error enviando correo: ' + error.message);
  }
}

module.exports = { sendMail };
