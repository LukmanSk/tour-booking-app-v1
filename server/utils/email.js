const nodemailer = require("nodemailer")

const sendEmail = async options  => {
    // first step to create transporter
    const transporter = nodemailer.createTransport({
        host:process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT,
        auth:{
            user:process.env.USER_EMAIL,
            pass:process.env.USER_EMAIL_PASS
        }
    })

    // Define the mail options
    const mailOptions = {
        from:"info@demomailtrap.com",
        to:options.email,
        subject:options.subject,
        text:options.message
    }

    // finally send the email
   await transporter.sendMail(mailOptions)
}

module.exports = sendEmail