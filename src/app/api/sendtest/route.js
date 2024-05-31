const nodemailer = require("nodemailer")

export async function GET() {
  
      let mailTransporter =
    nodemailer.createTransport(
          {
              service: 'gmail',
        auth: {
                  user: 'dev.adolfo006@gmail.com',
          pass: 'irie osby crvh uoro',
        }
      }
    );
      
      let mailDetails = {
          from: 'dev.adolfo006@gmail.com',
          to: 'aadolfo0516@gmail.com',
          subject: 'Test mail',
          text: 'henlo :>',
          html:'<h1>Test html text</h1>'
      };
      
      mailTransporter.sendMail(mailDetails,function (err, data) {
          if (err) {
              console.log('Error Occurs');
          } else {
              console.log('Email sent successfully');
          }
      });

      return new Response("Email sent")
  }

