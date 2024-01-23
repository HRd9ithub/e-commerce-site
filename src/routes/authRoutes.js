const express = require("express");
const { loginValidation, verifyValidation, emailValidation, resetPasswordValidation } = require("../utils/validation");
const { userLogin, userVerify, resendOTP, forgotPassword, resetPassword } = require("../controllers/authControllers");
const { errorHandler } = require("../middlewares/errorMiddleware");

const route = express.Router();

// login route
route.post("/login", loginValidation, errorHandler, userLogin);

// verify route
route.patch("/otp", verifyValidation, errorHandler, userVerify);

// resend otp api 
route.put('/resend-otp', emailValidation, errorHandler, resendOTP)

// forget password for email verification and send reset link for email api
route.post('/forgot-password', emailValidation, errorHandler, forgotPassword)

// reset password api
route.post('/reset-password',resetPasswordValidation ,errorHandler ,resetPassword)

module.exports = route;