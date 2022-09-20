const nodemailer = require("nodemailer")

module.exports = class Email {
    constructor(user, resetUrl) {
        this.from = `Natours_B <${process.env.EMAIL_FROM}>`
        this.to = user.email;
        this.fullName = user.name
        this.resetUrl = resetUrl
    }


    initTransport() {
        if (process.env.NODE_ENV === "production") {
            //send grid transport

        }
        else if (process.env.NODE_ENV === "development") {
            // mailtrap transport
            return nodemailer.createTransport({
                host: process.env.MAILTRAP_HOST,
                port: process.env.MAILTRAP_PORT,
                auth: {
                    user: process.env.MAILTRAP_USER,
                    pass: process.env.MAILTRAP_PASSWORD
                },

            })

        }
    }

    async send(template, subject, emailText) {
        const mailOptions = {
            from: this.from,
            to: this.to,
            subject: subject,
            text: emailText

        }

        await this.initTransport().sendMail(mailOptions)
    }

    async sendPWResetEmail() {
        await this.send(null, "reset your password", `click on the provided link to reset your password: ${this.resetUrl}`)

    }

    async sendWelcomeEmail() {

    }

}

/**
 * 
 */