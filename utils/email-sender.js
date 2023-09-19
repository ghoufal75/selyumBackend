const nodemailer = require('nodemailer');


const sendEmail = (email,messageToSend) => {
    return new Promise(async(resolve,reject) => {
        const transporter = nodemailer.createTransport({
          host: "smtp-mail.outlook.com",
          port: 587,
          secure: false, // upgrade later with STARTTLS
          auth: {
            user: "no.reply.selyum@outlook.com",
            pass: "selyum123456789",
          },
        });
      
        // Message to be sent
          let message = {
            from: "no.reply.selyum@outlook.com",
            to: email,
            subject: "Retour sur livraison",
            text : messageToSend,
            html : messageToSend,
          };
      
        // Connection verification and message sending
        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
            throw new Error(error)
          } else {
            transporter.sendMail(message,(err, info) => {
              console.log("sent succesfully")
              resolve("Email was sent");
              if (err) {
                console.log(err);
                reject(err);
                return;
              }
            });
          }
        });
      })
}

module.exports = sendEmail;