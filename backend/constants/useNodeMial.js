const { sendEmail, generateOTP } = require('./NodeMailer.util');

// Example usage
async function sendOtpExample() {
  try {
    const otp = generateOTP(6); // Generate a 6-digit OTP
    const email = 'example@example.com'; // Example email
    const template = {
      subject: 'Your OTP',
      text: (otp, additionalInfo) => `Your OTP is ${otp}. It will expire in ${additionalInfo.expirationTime} minutes.`
    };
    const additionalInfo = { expirationTime: 5 }; // Additional information to pass
    const result = await sendEmail(email, otp, template, additionalInfo);
    console.log(result);
  } catch (error) {
    console.error('Error sending OTP:', error);
  }
}

// Call the example function
sendOtpExample();