const path = require("path");
require("dotenv").config({
	path: path.resolve(__dirname, "../../.env")
});
const nodemailer = require("nodemailer");

const MY_EMAIL = process.env.MY_EMAIL;
const EMAIL_PASS = process.env.MY_EMAIL_PASS;

// Create transporter with correct authentication method
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: MY_EMAIL,
		pass: EMAIL_PASS
	},
	secure: true, // use SSL
	logger: true,
	debug: true
});

const sendEmail = async (transporter, mailOptions) => {
	try {
		let info = await transporter.sendMail(mailOptions);
		console.log("Email sent successfully!");
		console.log("Message ID:", info.messageId);
	} catch (error) {
		throw new Error(`Failed to send email: ${error.message}`);
	}
};

module.exports = { transporter, sendEmail };
