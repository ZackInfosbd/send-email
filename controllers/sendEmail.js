const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

const sendEmailetheral = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'jennings.donnelly62@ethereal.email', // generated ethereal user
      pass: 'H1Uhsu9KBUBmfwqsZ1', // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"zack infosBD" <kourdali.zakaria@gmail.com>',
    to: 'zackinfosbd@gmail.com',
    subject: 'Hello',
    html: '<h2>Sending Emails with nodejs</h2>',
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'zackinfosbd@gmail.com', // Change to your recipient
    from: 'kourdali.zakaria@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid on Nodejs',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
