const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
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

module.exports = sendEmail;
